import styled, { css } from "styled-components";
import { Button, Col } from "antd";
import { prop, ifProp, inLessThan } from "@/helpers";
import { StyleEnums, FlexBoxEnum, BreakpointEnums } from "@/enums";
import Circle from "@uiw/react-color-circle";
import { motion } from "framer-motion";

export const PreviewFlowWrapper = styled(Col)`
  padding: 4rem 0;
  height: 100%;
`;

export const iconBtnStyles = css`
  background: none;
  border: none;
  padding: 0;
  width: 2.75rem !important;
  height: 2.75rem;
  z-index: 3;
`;

export const PreviewFlow = styled.div<{
  readonly $background: string;
  readonly $hasOutline: boolean;
  readonly $isSquare: boolean;
}>`
  background: ${prop("$background")};
  width: 100%;
  height: 100%;
  border-radius: 2.75rem;
  position: relative;
  ${FlexBoxEnum.EndCenterVertical}
  transition: 0.3s;
  box-shadow: ${ifProp("$hasOutline", `0 0 5px ${StyleEnums.gray2}`, "none")};

  .ant-drawer-content-wrapper {
    box-shadow: unset;
  }
`;

export const TitlePreview = styled(motion.div)<{
  readonly $titleShadowColor: string;
  readonly $isTextTypeWithBtnResp: boolean;
  readonly $fontSize: string;
}>`
  margin-top: ${ifProp("$isTextTypeWithBtnResp", "25rem", "0")};
  font-size: ${prop("$fontSize")}rem;
  line-height: ${prop("$fontSize")}rem;
  letter-spacing: -0.02em;
  z-index: 2;

  h3 {
    color: ${StyleEnums.black};
    font-weight: bolder;
    text-align: center;
    word-break: break-word;
    line-height: 3.5rem;
  }

  p {
    word-break: break-word;
    text-shadow: 0 0 3px ${prop("$titleShadowColor")};
  }

  ${inLessThan(BreakpointEnums.mobile)`
    margin: 0 1.5rem;
  `}
`;

export const ColorPickerBtn = styled(Button)<{ readonly $isActive: boolean }>`
  ${iconBtnStyles};
  background: ${ifProp("$isActive", StyleEnums.error, "unset")};
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
`;

export const SquareBtn = styled(Button)<{ readonly $isActive: boolean }>`
  ${iconBtnStyles};
  background: ${ifProp("$isActive", StyleEnums.error, "unset")};
  position: absolute;
  top: 2.5rem;
  left: 2.5rem;
`;

export const CircleColorPicker = styled(Circle)`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 1rem;
  ${FlexBoxEnum.CenterVertical}
  flex-wrap: wrap;
  & > div {
    margin-top: 0.75rem;
    margin-left: 0.75rem !important;
    ${FlexBoxEnum.CenterHorizontal}

    div {
      margin-left: 0 !important;
    }
  }
`;

export const ColorPickerWrapper = styled(motion.div)`
  position: absolute;
  top: 6rem;
  right: 2.2rem;
  ${FlexBoxEnum.JustifyEndHorizontal}
`;

export const ResponseTitleWrapper = styled.div<{
  readonly $isFullHeight: boolean;
  readonly $isTextTypeWithBtnResp: boolean;
}>`
  transition: 0.3s;
  width: 80%;
  display: flex;
  border-radius: 2.5rem;
  margin-bottom: ${ifProp("$isTextTypeWithBtnResp", "3rem", "0")};
  justify-content: ${ifProp(
    "$isTextTypeWithBtnResp",
    "space-between",
    "center"
  )};
  align-items: center;
  flex-direction: column;
  min-height: ${ifProp("$isFullHeight", "100%", "55%")};
`;

export const Responses = styled.div`
  width: 80%;
  margin: 1.5rem 0 1.25rem 0;
  ${FlexBoxEnum.CenterVertical}
`;
