import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "antd";
import { inLessThan } from "@/helpers";
import { StyleEnums, BreakpointEnums, FlexBoxEnum } from "@/enums";

export const LinkShareWrapper = styled(motion.div)`
  width: 100%;
  min-height: 8.5rem;
  ${FlexBoxEnum.StartStartVertical}
`;

export const CopyToClipboardWrapper = styled.div`
  ${FlexBoxEnum.SpaceBetweenHorizontal}
  width: 100%;
  flex-wrap: wrap;
  ${inLessThan(BreakpointEnums.mobile)`
     flex-direction: column;
     justify-content: flex-end;
     align-items: flex-end;
     width: 100%;
   `};
`;

export const LinkContainer = styled.div`
   flex: 1;
   padding: 0.625rem 1.5rem;
   background: ${StyleEnums.gray4};
   border-radius: 0.75rem;
   overflow: hidden;
   ${FlexBoxEnum.JustifyStartHorizontal}
    ${inLessThan(BreakpointEnums.mobile)`
     width: 100%;
   `};
   
   p {
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
  margin-left: 0.5rem;
  ${inLessThan(BreakpointEnums.mobile)`
    margin-top: 0.5rem;
   `};
  ${FlexBoxEnum.CenterHorizontal}
`;
