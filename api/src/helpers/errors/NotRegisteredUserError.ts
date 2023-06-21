import AppError from "./AppError";

class NotRegisteredUserError extends AppError {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.status = 403;
        this.message = "The user email was not registered";
    }
}

export default NotRegisteredUserError;
