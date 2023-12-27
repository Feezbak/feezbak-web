import styled, { css } from "styled-components";
import { Button } from "antd";
import { prop, ifProp, inLessThan } from "@/helpers";
import { StyleEnums, FlexBoxEnum, BreakpointEnums } from "@/enums";
import Circle from "@uiw/react-color-circle";
import { motion } from "framer-motion";

export const iconBtnStyles = css`
  border: none;
  padding: 0;
  width: 2.75rem !important;
  height: 2.75rem;
  z-index: 3;
`;

export const PreviewFlow = styled(motion.div)<{
  readonly $background: string;
  readonly $hasOutline: boolean;
  readonly $hasBorderRadius: boolean;
  readonly $hasBorder: boolean;
}>`
  background: ${prop("$background")};
  width: 100%;
  height: 100%;
  border-radius: 3rem;
  position: relative;
  ${FlexBoxEnum.EndCenterVertical}
  transition: 0.3s;
  border: ${ifProp("$hasBorder", `20px solid ${StyleEnums.white}`, "none")};
  box-shadow: ${ifProp("$hasOutline", `0 0 5px ${StyleEnums.gray2}`, "none")};

  ${inLessThan(BreakpointEnums.mobile)`
     border: unset;
     border-radius: ${ifProp("$hasBorderRadius", "0", "3.5rem")} !important;
  `}

  .ant-drawer-content-wrapper {
    box-shadow: unset;
  }
`;

export const TitlePreview = styled(motion.div)<{
  readonly $color: StyleEnums;
  readonly $hasBtnResp: boolean;
}>`
  user-select: none;
  max-height: ${ifProp("$hasBtnResp", "17", "30")}rem;
  overflow-y: auto;
  font-size: 1.6rem;
  line-height: 2rem;
  letter-spacing: -0.02em;
  z-index: 2;
  ${FlexBoxEnum.StartStartVertical}

  h3 {
    color: ${prop("$color")}
    font-weight: bolder;
    text-align: center;
    word-break: break-word;
    line-height: 3.5rem;
  }

  p {
    color: ${prop("$color")};
    text-align: center;
    word-break: break-word;
    font-family: ${StyleEnums.fontFamilyExtraBold};
  }

  ${inLessThan(BreakpointEnums.mobile)`
    margin: 0 1.5rem;
  `}

  .story-title-placeholder {
    font-family: ${StyleEnums.fontFamilyExtraBold};
  }
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
  z-index: 5;
  ${FlexBoxEnum.JustifyEndHorizontal}
`;

export const ResponseTitleWrapper = styled.div`
  transition: 0.3s;
  width: 80%;
  display: flex;
  border-radius: 2.5rem;
  ${FlexBoxEnum.EndCenterVertical}
`;

export const Responses = styled(motion.div)`
  width: 80%;
  margin-top: 1.5rem;
  ${FlexBoxEnum.CenterVertical}
`;

export const LeaveComment = styled(Button)`
  border-radius: 50%;
  ${FlexBoxEnum.CenterVertical}
  width: 3.5rem !important;
  height: 3.5rem !important;
  padding: 0;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: none;
  margin-top: 1rem;

  svg {
    font-size: 2.25rem;
    color: ${StyleEnums.black};
  }
`;

export const SeeFullBtn = styled(Button)<{
  readonly $bgColor: StyleEnums | string;
  readonly $color: StyleEnums;
}>`
  margin-bottom: 0.75rem;
  border-radius: 12.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1rem;
  letter-spacing: -0.28px;
  height: 2.25rem;
  background-color: ${prop("$bgColor")} !important;
  color: ${prop("$color")} !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
`;
