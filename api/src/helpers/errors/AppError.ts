class AppError extends Error {
    status: number;
    constructor(message?: string, status?: number) {
        super();
        this.name = this.constructor.name;
        this.status = status ?? 500;
        this.message = message ?? "Unexpected Error";
    }
}

export default AppError;
