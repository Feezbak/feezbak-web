import styled from "styled-components";
import { motion } from "framer-motion";
import { Button, Space } from "antd";
import { inLessThan } from "@/helpers";
import { StyleEnums, BreakpointEnums, FlexBoxEnum } from "@/enums";

export const LinkShareWrapper = styled(motion.div)`
  width: 100%;
  min-height: 8.5rem;
  ${FlexBoxEnum.StartStartVertical}
`;

export const CopyToClipboardWrapper = styled(Space)`
  width: 100%;
  ${FlexBoxEnum.SpaceBetweenHorizontal}
  flex-wrap: wrap;
  ${inLessThan(BreakpointEnums.mobile)`
     flex-direction: column;
     justify-content: flex-end;
     align-items: flex-end;
   
     .ant-space-item {
     width: 100%;
     ${FlexBoxEnum.EndEndHorizontal}
      }
   `};
`;

export const LinkContainer = styled.div`
   width: 100%;
   padding: 0.625rem 1.5rem;
   background: ${StyleEnums.gray4};
   border-radius: 0.75rem;
   overflow: hidden;
   ${FlexBoxEnum.JustifyStartHorizontal}
   
   p {
     max-width: 18rem;
     font-size: 0.938rem;
     line-height: 1.25rem;
     letter-spacing: -0.02em
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;                            
   }                                     
`;

export const CopyBtn = styled(Button)`
  font-size: 0.938rem;
  padding: 0 1rem;
  height: 2.5rem;
  ${FlexBoxEnum.CenterHorizontal}
`;
