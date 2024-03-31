import type { RehypePlugin } from "@astrojs/markdown-remark";
import { visit } from "unist-util-visit";

const externalize: RehypePlugin = (options: { domain: string }) => {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type != "element") {
        return;
      }

      // I don't trust JS (or this sugar either)
      const href = node?.properties?.href as string | undefined;
      if (!(node.tagName == "a" && !!href)) {
        return;
      }

      if (!href.includes(options.domain)) {
        node.properties["target"] = "_blank";
      }
    });
  };
};

export default externalize;
