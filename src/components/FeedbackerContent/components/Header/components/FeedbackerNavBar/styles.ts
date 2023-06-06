import styled from "styled-components";
import { Button } from "antd";
import { FlexBoxEnum, StyleEnums } from "@/enums";

export const FeedbackerNavWrapper = styled.div`
  height: 3.625rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5.5px);
  ${FlexBoxEnum.CenterHorizontal}
`;

export const LinkTxt = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: -0.02em;
  color: ${StyleEnums.black};
  margin-right: 1.25rem;
  transition: 0.3s;

  a {
    color: ${StyleEnums.black};
  }

  &:hover {
    a {
      color: ${StyleEnums.white};
    }
  }

  &:last-child {
    margin: 0;
  }
`;

export const SignUpButton = styled(Button)`
  height: 2.5rem;
  padding: 0 1.5rem;
  background: ${StyleEnums.black};
  ${FlexBoxEnum.CenterHorizontal}
`;
