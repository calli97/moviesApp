import AppError from "./AppError";

class InvalidTokenError extends AppError {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.status = 403;
        this.message = "Invalid Token";
    }
}

export default InvalidTokenError;
