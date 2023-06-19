import AppError from "./AppError";

class NotFoundError extends AppError {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.status = 404;
        this.message = "Not Found";
    }
}

export default NotFoundError;
