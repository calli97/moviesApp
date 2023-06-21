import AppError from "./AppError";

class EmailAlreadyRegisterError extends AppError {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.status = 409;
        this.message = "The Email is already register in our database";
    }
}

export default EmailAlreadyRegisterError;
