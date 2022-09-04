import React from "react";
import { DeepMap, FieldError } from "react-hook-form";
import { Error } from "./styles";

interface Props {
  message?: DeepMap<any, FieldError>;
}

const ErrorMessage = ({ message }: Props) => {
  return <Error>{message?.length ? message : ""}</Error>;
};

export default ErrorMessage;
