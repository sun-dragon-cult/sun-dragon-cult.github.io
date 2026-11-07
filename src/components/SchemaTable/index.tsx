import { Fragment, useMemo, useState } from "react";
import type { JSX } from "react";
import { schemaRef, schemas } from "@site/src/data/rqg-schemas";
import { filterRows, formatPath, schemaToRows, type Row } from "./schema-rows";
import styles from "./styles.module.css";

/** The marker for a calculated (non-stored) field, also usable in running text. */
export function CalculatedBadge({ className }: { className?: string }): JSX.Element {
  return (
    <span
      className={className ? `${styles.badge} ${className}` : styles.badge}
      title="Calculated, never stored"
    >
      calculated
    </span>
  );
}

/** Groups with more fields than this start collapsed, so long lists don't bury the page. */
const COLLAPSE_ABOVE = 6;

function initiallyCollapsed(rows: Row[], depth = 0, collapsed = new Set<string>()): Set<string> {
  for (const row of rows) {
    if (row.children.length > COLLAPSE_ABOVE || (depth > 0 && row.children.length > 0)) {
      collapsed.add(row.id);
    }
    initiallyCollapsed(row.children, depth + 1, collapsed);
  }
  return collapsed;
}

function TypeCell({ row }: { row: Row }): JSX.Element {
  return (
    <>
      <code>{row.type}</code>
      {row.nullable && <span title="Can be null"> ?</span>}
      {row.defaultValue !== undefined && (
        <span className={styles.muted}> = {row.defaultValue}</span>
      )}
      {row.choices && (
        <div className={styles.choices}>
          {row.choices.map((c) => (
            <span key={c} className={styles.chip}>
              {c}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

function FieldRows({
  rows,
  depth,
  collapsed,
  forceOpen,
  toggle,
}: {
  rows: Row[];
  depth: number;
  collapsed: Set<string>;
  forceOpen: boolean;
  toggle: (id: string) => void;
}): JSX.Element {
  return (
    <>
      {rows.map((row) => {
        const isGroup = row.children.length > 0;
        const open = isGroup && (forceOpen || !collapsed.has(row.id));
        const name = row.group ? row.group.join(", ") : (row.path.at(-1) as string);
        return (
          <Fragment key={row.id}>
            <tr>
              <td style={{ paddingLeft: `${0.5 + depth * 1.1}rem` }}>
                {isGroup ? (
                  <button
                    className={styles.caret}
                    onClick={() => toggle(row.id)}
                    aria-expanded={open}
                    aria-label={`${open ? "Collapse" : "Expand"} ${name}`}
                  >
                    {open ? "▾" : "▸"}
                  </button>
                ) : (
                  <span className={styles.caret} />
                )}
                <code
                  className={styles.path}
                  title={`Copy system.${formatPath(row.path)}`}
                  onClick={() => navigator.clipboard?.writeText(`system.${formatPath(row.path)}`)}
                >
                  {name}
                </code>
                {row.group && <span className={styles.muted}> ×{row.group.length}</span>}
                {row.calculated && <CalculatedBadge className={styles.inTable} />}
                {row.title && <span className={styles.title}>{row.title}</span>}
              </td>
              <td>
                <TypeCell row={row} />
              </td>
              <td>{row.description}</td>
            </tr>
            {open && (
              <FieldRows
                rows={row.children}
                depth={depth + 1}
                collapsed={collapsed}
                forceOpen={forceOpen}
                toggle={toggle}
              />
            )}
          </Fragment>
        );
      })}
    </>
  );
}

/** Lists the fields of one data model from the synced JSON Schemas, e.g. `actor/character`. */
export function SchemaTable({ type }: { type: string }): JSX.Element {
  const schema = schemas[type];
  const rows = useMemo(() => (schema ? schemaToRows(schema) : []), [schema]);
  const [collapsed, setCollapsed] = useState(() => initiallyCollapsed(rows));
  const [query, setQuery] = useState("");
  const [calculatedOnly, setCalculatedOnly] = useState(false);

  if (!schema) {
    return <p>No schema named “{type}”.</p>;
  }

  const filtering = query.trim() !== "" || calculatedOnly;
  const shown = filtering ? filterRows(rows, query, calculatedOnly) : rows;
  const toggle = (id: string): void =>
    setCollapsed((previous) => {
      const next = new Set(previous);
      if (!next.delete(id)) {
        next.add(id);
      }
      return next;
    });

  return (
    <div className={styles.schemaTable}>
      <div className={styles.controls}>
        <input
          type="search"
          placeholder="Search fields"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={calculatedOnly}
            onChange={(e) => setCalculatedOnly(e.target.checked)}
          />{" "}
          Calculated only
        </label>
        <span className={styles.muted}>
          From the RQG system data models, version {schemaRef}. Click a name to copy its path.
        </span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Field (under system)</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <FieldRows
            rows={shown}
            depth={0}
            collapsed={collapsed}
            forceOpen={filtering}
            toggle={toggle}
          />
        </tbody>
      </table>
    </div>
  );
}
