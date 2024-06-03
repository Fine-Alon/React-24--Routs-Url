import { useRouteError, isRouteErrorResponse } from "react-router-dom";

interface RouteError {
    statusText?: string;
    message?: string;
}

export default function ErrorPage() {
    const error = useRouteError();

    console.error(error);

    const errorMessage = (error: unknown): string => {
        if (isRouteErrorResponse(error)) {
            return error.statusText || "Unknown error";
        }
        if (error instanceof Error) {
            return error.message;
        }
        return "Unknown error";
    };

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{errorMessage(error)}</i>
            </p>
        </div>
    );
}
