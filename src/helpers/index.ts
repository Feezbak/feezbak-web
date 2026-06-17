import { BreakpointEnums } from "@/enums";
import { FlattenInterpolation, ThemeProps } from "styled-components";
import { getDeviceName } from "./userAgentHelpers";
import {
  breakpoint,
  StyledComponentsInterpolation,
  MediaQueryConditions,
} from "./responsiveHelpers";

type PredictedProp = {
  [name: string]: any;
};
type PredictedFn = (props: PredictedProp) => number | string;
type ConditionalStyle = number | string | PredictedFn;

export { getErrorMessage } from "./errorMessage";

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

enum AndOr {
  "$AND" = "$AND",
  "$OR" = "$OR",
}

type ConditionsProperties =
  | string
  | string[]
  | { [key in AndOr]?: ConditionsProperties | ConditionsProperties[] }
  | "@mobileDevice"
  | "@tabletDevice"
  | "@mobileOrTabletDevice";

export const ifProp = (
  property: ConditionsProperties,
  thisStyle: ConditionalStyle | FlattenInterpolation<ThemeProps<any>>,
  thatStyle?: ConditionalStyle | FlattenInterpolation<ThemeProps<any>>
): PredictedFn => {
  return (props: PredictedProp) => {
    const renderWithCondition = (hasCondition: boolean) => {
      if (hasCondition) {
        if (typeof thisStyle !== "function") return thisStyle as string;
        return thisStyle(props);
      } else if (thatStyle) {
        if (typeof thatStyle !== "function") return thatStyle as string;
        return thatStyle(props);
      }

      return "";
    };

    /**
     * We have three generic condition to check against mobile and tablet stating with @
     */
    const device = getDeviceName();
    if (property === "@mobileDevice") {
      return renderWithCondition(device === "mobile");
    } else if (property === "@tabletDevice") {
      return renderWithCondition(device === "tablet");
    } else if (property === "@mobileOrTabletDevice") {
      return renderWithCondition(device === "mobile" || device === "tablet");
    }

    /**
     * Check string passes
     */
    const checkStringItems = (item: string) => {
      const isNegative = item.startsWith("!");
      return prop(item.replace("!", ""), false)(props) !== isNegative;
    };

    /**
     * Check object property pass
     */
    const checkObjectItems = (obj: {
      [key in AndOr]?: ConditionsProperties | ConditionsProperties[];
    }) =>
      Object.keys(obj).some((k) =>
        checkItems(obj[k as AndOr] as ConditionsProperties, k as AndOr)
      );

    /**
     * Iterate and check prop statuses
     */
    const checkArrayItems = (
      arrayInputs: ConditionsProperties[],
      conditionType: AndOr = AndOr.$AND
    ) => {
      const list: any = arrayInputs;
      return conditionType === AndOr.$AND
        ? list.every(checkItems)
        : list.some(checkItems);
    };

    const checkItems = (
      items: ConditionsProperties,
      conditionType: AndOr = AndOr.$AND
    ): boolean => {
      if (Array.isArray(items)) {
        // array case
        return checkArrayItems(items, conditionType);
      } else if (typeof items !== "string") {
        // object case
        return checkObjectItems(items);
      } else {
        // string case
        return checkStringItems(items);
      }
    };

    const hasCondition = checkItems(property);

    return renderWithCondition(hasCondition);
  };
};
