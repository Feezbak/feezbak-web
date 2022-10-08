import { BreakpointEnums } from "@/enums";
import { FlattenInterpolation, ThemeProps } from "styled-components";
import {
  breakpoint,
  StyledComponentsInterpolation,
  MediaQueryConditions,
} from "./responsiveHelpers";

type PredictedProp = {
  [name: string]: any;
};

export const prop = (name: string, defaultValue?: any): any => {
  // to support reading object props
  if (name.includes(".")) {
    const [object, value] = name.split(".");
    // @ts-ignore
    return (props: PredictedProp) => props[object][value] || defaultValue;
  } else {
    // regular props
    return (props: PredictedProp) => props[name] || defaultValue;
  }
};

export const inGreaterThan =
  (size: BreakpointEnums) =>
  (
    styles: any,
    ...interpolations:
      | StyledComponentsInterpolation[]
      | FlattenInterpolation<ThemeProps<any>>
  ) => {
    // const tempSize = getNextKey(Breakpoints, size) || size;
    return breakpoint(
      size,
      styles,
      MediaQueryConditions.GREATER,
      interpolations
    );
  };

export const inLessThan =
  (size: BreakpointEnums) =>
  (
    styles: any,
    ...interpolations:
      | StyledComponentsInterpolation[]
      | FlattenInterpolation<ThemeProps<any>>
  ) => {
    // const tempSize = getPreviousKey(Breakpoints, size) || size;
    return breakpoint(
      size,
      styles,
      MediaQueryConditions.LESSER,
      interpolations
    );
  };
