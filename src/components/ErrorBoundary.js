import React, { Component } from 'react';
import '../App.css';

/**
 * ErrorBoundary component is a React component that catches JavaScript errors anywhere in its child component tree,
 * logs those errors, and displays a fallback UI instead of the component tree that crashed.
 *
 * @class ErrorBoundary
 * @extends {Component}
 * @property {boolean} state.hasError - Indicates if an error has been caught.
 * @property {Error|null} state.error - The error that was caught.
 * @property {object|null} state.errorInfo - Additional information about the error.
 * @method static getDerivedStateFromError - Updates state to indicate an error has been caught.
 * @param {Error} error - The error that was caught.
 * @returns {object} Updated state with hasError set to true and the error.
 * @method componentDidCatch - Lifecycle method that is called after an error has been caught.
 * @param {Error} error - The error that was caught.
 * @param {object} errorInfo - Additional information about the error.
 * @method render - Renders the fallback UI if an error has been caught, otherwise renders the child components.
 * @returns {React.ReactNode} The fallback UI or the child components.
 */
class ErrorBoundary extends Component {
  state = { hasError: false, error: null, errorInfo: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;