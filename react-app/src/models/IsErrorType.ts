interface ErrorType {
  error: string;
}

const isErrorType = (response: any) : response is ErrorType => {
  return (response as ErrorType).error !== undefined;
}

export default isErrorType;