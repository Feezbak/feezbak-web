import "react-draft-wysiwyg"; // Import to trigger declaration merging

declare module "react-draft-wysiwyg" {
  // Augment the existing ButtonProps interface
  interface EditorProps {
    handleBeforeInput?: any;
  }
}
