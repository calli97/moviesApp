import AppError from "./AppError";

class InvalidPasswordError extends AppError {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.status = 403;
        this.message = "Invalid password";
    }
}

export default InvalidPasswordError;
