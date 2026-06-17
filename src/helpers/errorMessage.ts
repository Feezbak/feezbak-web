export const getErrorMessage = (error: any): string =>
  error?.response?.data?.message ?? "Something went wrong, please try again.";
