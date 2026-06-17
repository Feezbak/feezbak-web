import React, { ErrorInfo } from "react";
import appCrashSrc from "@images/application-crash.webp";
import Prism from "prismjs";
import {
  ErrorBounderyWrapper,
  AppCrashIllustration,
  Title,
  ErrorWrapper,
} from "./styles";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render a custom error UI or fallback component here
      return (
        <ErrorBounderyWrapper>
          <AppCrashIllustration
            src={appCrashSrc}
            alt="Application was crashed"
            loading="lazy"
          />
          <Title>Oops! Something went wrong.</Title>
          <ErrorWrapper>
            <pre>
              <code className="language-javascript">
                {this.state.error && this.state.error.toString()}
              </code>
              <code className="language-javascript">
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </code>
            </pre>
          </ErrorWrapper>
        </ErrorBounderyWrapper>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
