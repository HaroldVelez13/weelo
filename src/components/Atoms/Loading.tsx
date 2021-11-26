import logo from "../../logo.png"

function Loading(): JSX.Element {
    return (
        <div className="text-center" data-testid="loading">
            <div className="spinner-grow text-info mx-1" role="status">
                <span className="sr-only fs-1">Loading...</span>
            </div>
            <div className="spinner-grow text-info mx-1" role="status">
                <span className="sr-only fs-1">Loading...</span>
            </div>
            <div className="spinner-grow text-info mx-1" role="status">
                <span className="sr-only fs-1">Loading...</span>
            </div>
        </div>
    );
}

export default Loading;
