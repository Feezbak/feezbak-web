import styled from "styled-components";
import { Button, Col } from "antd";
import { prop, ifProp } from "@/helpers";
import { StyleEnums } from "@/enums";
import Circle from "@uiw/react-color-circle";
import { motion } from "framer-motion";

export const PreviewFlowWrapper = styled(Col)`
  padding: 4rem 0;
  height: 100%;
`;

export const PreviewFlow = styled.div<{
  readonly $background: string;
  readonly $hasOutline: boolean;
}>`
  background: ${prop("$background")};
  width: 100%;
  height: 100%;
  border-radius: 2.75rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  box-shadow: ${ifProp("$hasOutline", `0 0 5px ${StyleEnums.gray2}`, "none")};
`;

export const PoweredByWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2.5rem;
  left: 0;
  right: 0;
  margin: 0 auto;

  p {
    margin-bottom: 0.15rem;
    color: ${StyleEnums.white};
    font-weight: 600;
    font-size: 0.563rem;
    line-height: 0.75rem;
    text-align: center;
    letter-spacing: 0.25rem;
  }
`;

export const TitlePreview = styled.div<{
  readonly $titleShadowColor: string;
}>`
  margin: 0 3rem;
  font-size: 2.5rem;
  line-height: 2.5rem;
  letter-spacing: -0.02em;
  word-break: break-all;

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

export const ColorPickerBtn = styled(Button)`
  background: none;
  border: none;
  padding: 0;
  width: 2.75rem !important;
  height: 2.75rem;
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
`;

export const CircleColorPicker = styled(Circle)`
  max-width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  div {
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
  bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
