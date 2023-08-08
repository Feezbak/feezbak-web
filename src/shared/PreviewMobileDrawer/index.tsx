import { ReactNode } from "react";
import { Drawer } from "antd";

interface Props {
  children: ReactNode;
  onClose: () => void;
  title?: string;
  isOpen: boolean;
}

const PreviewMobileDrawer = ({ children, onClose, title, isOpen }: Props) => {
  return (
    <Drawer
      getContainer={false}
      mask={false}
      contentWrapperStyle={{
        transform: "-90deg",
      }}
      title={title}
      onClose={onClose}
      width="100%"
      open={isOpen}
    >
      {children}
    </Drawer>
  );
};

export default PreviewMobileDrawer;
