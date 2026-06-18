import styled from "styled-components";
import { motion } from "framer-motion";
import { Row } from "antd";
import { StyleEnums, FlexBoxEnum } from "@/enums";

export const ResponseToggleRow = styled(Row)`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid ${StyleEnums.gray4};
  border-radius: 0.875rem;
  margin-bottom: 1.25rem;
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  .toggle-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${StyleEnums.black};
  }

  .toggle-sub {
    font-size: 0.75rem;
    color: ${StyleEnums.gray2};
    margin-top: 0.1rem;
  }
`;

export const DetailsWrapper = styled(motion.div)`
  ${FlexBoxEnum.StartCenterVertical}
  width: 100%;
  height: 100%;
  background: ${StyleEnums.white};
  border: 1px solid ${StyleEnums.gray4};
  border-radius: 1.5rem;
  padding: 2.25rem;
  position: relative;
  box-shadow: 0 17px 40px rgba(74, 68, 143, 0.06);
`;
