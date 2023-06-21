import AppError from "./AppError";

class NoTokenProvidedError extends AppError {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.status = 403;
        this.message = "No Token Provided";
    }
}

export default NoTokenProvidedError;
