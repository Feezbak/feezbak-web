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
