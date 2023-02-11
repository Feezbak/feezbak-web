import styled from "styled-components";
import { Col } from "antd";
import { prop } from "@/helpers";
import { StyleEnums } from "@/enums";

export const PreviewFlowWrapper = styled(Col)`
  padding: 4rem 0;
  height: 100%;
`;

export const PreviewFlow = styled.div<{ readonly $background: string }>`
  background: ${prop("$background")};
  width: 100%;
  height: 100%;
  border-radius: 2.75rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const TitlePreview = styled.div`
  margin: 0 3rem;
  font-size: 2.5rem;
  line-height: 2.5rem;
  letter-spacing: -0.02em;
  color: ${StyleEnums.white};
  word-break: break-all;

  h3 {
    color: ${StyleEnums.white};
    font-weight: 800;
    text-align: center;
  }
`;
