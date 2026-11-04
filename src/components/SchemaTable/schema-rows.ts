/** A node of the JSON Schemas generated from the RQG data models. */
export interface SchemaNode {
  type?: string | string[];
  properties?: Record<string, SchemaNode>;
  items?: SchemaNode;
  enum?: string[];
  default?: unknown;
  minimum?: number;
  maximum?: number;
  title?: string;
  description?: string;
  readOnly?: boolean;
}

export interface Row {
  id: string;
  /** Field names from `system` down to this field. Array elements are `[]`. */
  path: string[];
  /** Set when several fields with the same shape are shown as one row. */
  group?: string[];
  title?: string;
  description?: string;
  type: string;
  nullable: boolean;
  defaultValue?: string;
  choices?: string[];
  calculated: boolean;
  children: Row[];
}

/** Fields with the same shape and no text of their own are shown as one row from this many. */
const MIN_GROUP_SIZE = 4;

export function formatPath(path: string[]): string {
  return path.join(".").replaceAll(".[]", "[]");
}

function typesOf(node: SchemaNode): { type: string; nullable: boolean } {
  const types = Array.isArray(node.type) ? node.type : [node.type ?? "any"];
  return {
    type: types.filter((t) => t !== "null").join(" | ") || "any",
    nullable: types.includes("null"),
  };
}

function shapeKey(row: Row): string {
  return JSON.stringify([row.type, row.nullable, row.defaultValue, row.choices, row.calculated]);
}

function groupSimilar(rows: Row[]): Row[] {
  const candidates = rows.filter((r) => r.children.length === 0 && !r.description);
  const byShape = new Map<string, Row[]>();
  for (const row of candidates) {
    byShape.set(shapeKey(row), [...(byShape.get(shapeKey(row)) ?? []), row]);
  }
  const grouped = new Set<Row>();
  const result: Row[] = [];
  for (const row of rows) {
    const same = byShape.get(shapeKey(row));
    if (!same || same.length < MIN_GROUP_SIZE || !candidates.includes(row)) {
      result.push(row);
    } else if (!grouped.has(row)) {
      same.forEach((r) => grouped.add(r));
      result.push({ ...row, group: same.map((r) => r.path.at(-1) as string), title: undefined });
    }
  }
  return result;
}

export function schemaToRows(node: SchemaNode, path: string[] = []): Row[] {
  const rows = Object.entries(node.properties ?? {}).map(([key, child]): Row => {
    const childPath = [...path, key];
    const element = child.type === "array" && child.items?.properties ? child.items : undefined;
    const { type, nullable } = typesOf(child);
    return {
      id: formatPath(childPath),
      path: childPath,
      title: child.title,
      description: child.description,
      type: element ? "array of objects" : type,
      nullable,
      defaultValue: child.default === undefined ? undefined : JSON.stringify(child.default),
      choices: child.enum,
      calculated: child.readOnly === true,
      children: schemaToRows(element ?? child, element ? [...childPath, "[]"] : childPath),
    };
  });
  return groupSimilar(rows);
}

export function matches(row: Row, query: string): boolean {
  const text = [formatPath(row.path), row.group?.join(" "), row.title, row.description]
    .join(" ")
    .toLowerCase();
  return text.includes(query);
}

/** Keeps rows that match the search text, or have a matching child. */
export function filterRows(rows: Row[], query: string, calculatedOnly: boolean): Row[] {
  const q = query.trim().toLowerCase();
  return rows.flatMap((row) => {
    const children = filterRows(row.children, q, calculatedOnly);
    if (children.length > 0) {
      return [{ ...row, children }];
    }
    const selfMatches = (!q || matches(row, q)) && (!calculatedOnly || row.calculated);
    return selfMatches ? [{ ...row, children: filterRows(row.children, "", calculatedOnly) }] : [];
  });
}
