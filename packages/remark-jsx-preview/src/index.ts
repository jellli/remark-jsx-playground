import { visit } from 'unist-util-visit';

const jsxPreview = () => {
  return (tree: any, file: any) => {
    visit(tree, 'code', (node) => {
      console.log(node);
    });
  };
};

export default jsxPreview;
