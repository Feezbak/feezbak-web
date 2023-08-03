import "react-draft-wysiwyg"; // Import to trigger declaration merging
import "antd";

declare module "react-draft-wysiwyg" {
  // Augment the existing ButtonProps interface
  interface EditorProps {
    handleBeforeInput?: any;
  }
}

declare module "antd" {
  interface FormItemProps {
    name?: string;
  }
}
