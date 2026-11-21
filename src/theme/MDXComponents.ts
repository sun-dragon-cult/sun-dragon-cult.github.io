import MDXComponents from "@theme-original/MDXComponents";
import {
  CenterIt,
  GithubIssue,
  LightInvertSvg,
  ThemeInvert,
} from "@site/src/components/MdxHelpers";

// Components that should be usable in mdx without import
export default {
  ...MDXComponents,
  LightInvertSvg,
  CenterIt,
  GithubIssue,
  ThemeInvert,
};
