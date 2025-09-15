import {useRouteError} from "react-router";

export function ErrorPage() {
    const error = useRouteError();
    return <div>
        {error.status === 404
            ? <h1>404 not found</h1>
            : <div>{JSON.stringify(error)}</div>
        }
    </div>
}