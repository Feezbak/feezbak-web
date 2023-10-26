import { ReactNode } from "react";
import { MobileDrawer } from "./styles";

interface Props {
  children: ReactNode;
  onClose: () => void;
  title?: string;
  isOpen: boolean;
}

const PreviewMobileDrawer = ({ children, onClose, title, isOpen }: Props) => {
  return (
    <MobileDrawer
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
    </MobileDrawer>
  );
};

export default PreviewMobileDrawer;
