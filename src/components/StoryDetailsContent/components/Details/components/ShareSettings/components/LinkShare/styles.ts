import styled from "styled-components";
import { motion } from "framer-motion";
import { Button, Space } from "antd";
import { inLessThan } from "@/helpers";
import { StyleEnums, BreakpointEnums } from "@/enums";

export const LinkShareWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const CopyToClipboardWrapper = styled(Space)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  ${inLessThan(BreakpointEnums.mobile)`
     flex-direction: column;
     justify-content: flex-end;
     align-items: flex-end;
   
     .ant-space-item {
     width: 100%;
     display: flex;
     justify-content: flex-end;
     align-items: flex-end;
      }
   `};
`;

export const LinkContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   padding: 0.625rem 1.5rem;
   background: ${StyleEnums.gray4};
   border-radius: 0.75rem;
    overflow: hidden;                                     
   
   p {
     max-width: 14rem;                                   
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
  display: flex;
  justify-content: center;
  align-items: center;
`;
