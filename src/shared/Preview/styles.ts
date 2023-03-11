import styled, { css } from "styled-components";
import { Button, Col } from "antd";
import { prop, ifProp } from "@/helpers";
import { StyleEnums } from "@/enums";
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
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  box-shadow: ${ifProp("$hasOutline", `0 0 5px ${StyleEnums.gray2}`, "none")};
`;

export const PoweredByWrapper = styled.div<{
  readonly $hasCover: boolean;
  readonly $isSquare: boolean;
  readonly $imgSrc: string;
  readonly $hasLayer: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  right: 1.25rem;
  margin: 0 auto;
  transition: 0.3s;
  height: ${ifProp("$isSquare", "50%", "95%")};
  border-radius: 2rem;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, ${ifProp("$hasLayer", "0.65", "0")}) 100%
    ),
    url(${ifProp("$hasCover", prop("$imgSrc"), "")});
  background-position: ${ifProp("$isSquare", "top", "center")};
  background-repeat: no-repeat;
  background-size: cover;

  p {
    margin: 1.3rem 0 0.15rem 0;
    color: ${StyleEnums.white};
    font-weight: 600;
    font-size: 0.563rem;
    line-height: 0.75rem;
    text-align: center;
    letter-spacing: 0.25rem;
  }
`;

export const TitlePreview = styled(motion.div)<{
  readonly $titleShadowColor: string;
}>`
  margin: 0 3rem;
  font-size: 2.5rem;
  line-height: 2.5rem;
  letter-spacing: -0.02em;
  z-index: 2;

  h3 {
    color: ${StyleEnums.black};
    font-weight: 800;
    text-align: center;
    word-break: break-word;
    line-height: 3.5rem;
  }

  p {
    text-shadow: 0 0 3px ${prop("$titleShadowColor")};
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > div {
    margin-top: 12px;
    margin-left: 0.75rem !important;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      margin-left: 0 !important;
    }
  }
`;

export const ColorPickerWrapper = styled(motion.div)`
  position: absolute;
  top: 6rem;
  right: 2.2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ResponseTitleWrapper = styled.div<{
  readonly $isFullHeight: boolean;
}>`
  transition: 0.3s;
  width: 80%;
  display: flex;
  border-radius: 2.5rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: ${ifProp("$isFullHeight", "100%", "35%")};
`;

export const Responses = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1.5rem 0 1.25rem 0;
`;
