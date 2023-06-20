class InvalidFieldDataError extends Error {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.message = "Invalid Field Data";
    }
}

export default InvalidFieldDataError;
