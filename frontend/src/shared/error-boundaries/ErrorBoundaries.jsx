// System
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ErrorBoundaries({ children }) {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const errorHandler = (event) => {
            setHasError(true);
            console.error("Error caught by ErrorBoundary:", event.error);
        };

        // Listen for unhandled errors
        window.addEventListener("error", errorHandler);
        window.addEventListener("unhandledrejection", errorHandler);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener("error", errorHandler);
            window.removeEventListener("unhandledrejection", errorHandler);
        };
    }, []);

    if (hasError) {
        return <h1>Something went wrong.</h1>;
    }

    return children;
}

// Add prop-types validation
ErrorBoundaries.propTypes = {
    children: PropTypes.node.isRequired, // Ensures children are provided
};

export { ErrorBoundaries };
