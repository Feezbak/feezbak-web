import { css, FlattenInterpolation, ThemeProps } from "styled-components";
import { BreakpointEnums, Breakpoints } from "@/enums";

export type StyledComponentsInterpolation =
  | ((executionContext: Record<string, any>) => StyledComponentsInterpolation)
  | string
  | number
  | StyledComponentsInterpolation[];

export enum MediaQueryConditions {
  LESSER,
  GREATER,
}

export enum OrientationConditions {
  LANDSCAPE,
  PORTRAIT,
}

export const renderStyle = (
  styles: any,
  interpolations: StyledComponentsInterpolation[]
) => css`
  ${css(styles, ...interpolations)};
`;

export const orientation = (
  styles: any,
  condition: OrientationConditions.LANDSCAPE | OrientationConditions.PORTRAIT,
  ...interpolations: StyledComponentsInterpolation[] | FlattenInterpolation<any>
) => {
  let orientationValue = "";

  if (condition === OrientationConditions.LANDSCAPE) {
    orientationValue = `(orientation: ${BreakpointEnums.landscape})`;
  }
  if (condition === OrientationConditions.PORTRAIT) {
    orientationValue = `(orientation: ${BreakpointEnums.portrait})`;
  }

  return css`
    @media ${orientationValue} {
      ${css(styles, ...interpolations)};
    }
  `;
};

export const breakpoint = (
  name: BreakpointEnums | BreakpointEnums[],
  styles: any,
  condition:
    | MediaQueryConditions.LESSER
    | MediaQueryConditions.GREATER
    | "" = "",
  ...interpolations:
    | StyledComponentsInterpolation[]
    | FlattenInterpolation<ThemeProps<any>>
) => {
  let minWidth;
  let maxWidth;
  if (typeof name === "string") {
    minWidth = Breakpoints[name]?.minWidth || 0;
    maxWidth = Breakpoints[name]?.maxWidth || 0;

    if (condition === MediaQueryConditions.LESSER) {
      minWidth = 0;
    } else if (condition === MediaQueryConditions.GREATER) {
      maxWidth = 0;
    }
  } else if (Array.isArray(name) && name.length === 2) {
    // @ts-ignore
    minWidth = Breakpoints[name[0]]?.minWidth || 0;
    // @ts-ignore
    maxWidth = Breakpoints[name[1]]?.maxWidth || 0;
    if (minWidth > maxWidth) {
      throw new Error(
        "The provided responsive range is not correct, the `inRange` responsive helper receives an array with [`smallViewName`, `largeViewName`] and apply your styles between them"
      );
    }
  } else {
    throw new Error(
      "The responsive breakpoint parameters are not valid : " + name
    );
  }

  const offset = 1;
  let mediaCondition = "";
  if (minWidth) {
    mediaCondition += `(min-width: ${minWidth - offset}px)`;
  }
  if (maxWidth) {
    mediaCondition += mediaCondition ? " and " : "";
    mediaCondition += `(max-width: ${maxWidth}px)`;
  }

  return css`
    @media ${mediaCondition} {
      ${css(styles, ...interpolations)};
    }
  `;
};

export default breakpoint;
