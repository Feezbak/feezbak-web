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

export const ProEmailTeaser = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border: 1.5px dashed ${StyleEnums.gray3};
  border-radius: 0.875rem;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: ${StyleEnums.primary};
    background: #fff5f3;
  }

  .lock {
    font-size: 1.25rem;
    flex-shrink: 0;
  }

  .teaser-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${StyleEnums.gray1};
    margin-bottom: 0.15rem;
  }

  .teaser-sub {
    font-size: 0.75rem;
    color: ${StyleEnums.gray2};
  }

  .badge {
    margin-left: auto;
    flex-shrink: 0;
    font-size: 0.7rem;
    font-weight: 700;
    background: ${StyleEnums.primary};
    color: #fff;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
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
