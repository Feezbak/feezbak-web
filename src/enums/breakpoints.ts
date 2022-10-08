import { BreakpointEnums } from "./breakpointEnums";

export type BreakpointProps = {
  minWidth: number;
  maxWidth: number;
};

export type BreakpointMap = Record<BreakpointEnums, BreakpointProps>;

export const Breakpoints: Readonly<BreakpointMap> = {
  [BreakpointEnums.mobile]: {
    minWidth: 0,
    maxWidth: 576,
  },
  [BreakpointEnums.tablet]: {
    minWidth: 576,
    maxWidth: 1024,
  },
  [BreakpointEnums.desktop]: {
    minWidth: 1024,
    maxWidth: 3800,
  },
  [BreakpointEnums.xxs]: {
    minWidth: 0,
    maxWidth: 360,
  },
  [BreakpointEnums.xs]: {
    minWidth: 360,
    maxWidth: 576,
  },
  [BreakpointEnums.sm]: {
    minWidth: 576,
    maxWidth: 768,
  },
  [BreakpointEnums.md]: {
    minWidth: 768,
    maxWidth: 991,
  },
  [BreakpointEnums.lg]: {
    minWidth: 992,
    maxWidth: 1200,
  },
  [BreakpointEnums.xl]: {
    minWidth: 1200,
    maxWidth: 1600,
  },
  [BreakpointEnums.xxl]: {
    minWidth: 1600,
    maxWidth: 3800,
  },
  [BreakpointEnums.landscape]: {
    minWidth: 0,
    maxWidth: 0,
  },
  [BreakpointEnums.portrait]: {
    minWidth: 0,
    maxWidth: 0,
  },
};
