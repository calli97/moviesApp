import AppError from "./AppError";

class AlreadyExistError extends AppError {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.status = 409;
        this.message = "The resource already exist";
    }
}

export default AlreadyExistError;
