function ErrorMessage() {
    return (
        <div role="alert">
            <div className="rounded-t bg-red-700 px-4 py-2 font-bold text-red-100">
                Oops!
            </div>
            <div className="rounded-b border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700">
                <p>Something went terribly wrong.</p>
            </div>
        </div>
    );
}

export default ErrorMessage;
