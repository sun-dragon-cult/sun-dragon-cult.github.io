import MDXComponents from "@theme-original/MDXComponents";
import {
  CenterIt,
  GithubIssue,
  LightInvertSvg,
  ThemeInvert,
} from "@site/src/components/MdxHelpers";
import { CalculatedBadge, SchemaTable } from "@site/src/components/SchemaTable";

// Components that should be usable in mdx without import
export default {
  ...MDXComponents,
  LightInvertSvg,
  CenterIt,
  GithubIssue,
  ThemeInvert,
  SchemaTable,
  CalculatedBadge,
};
