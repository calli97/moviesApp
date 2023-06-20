class InvalidFieldsAmountError extends Error {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.message = "Invalid amount of fields";
    }
}

export default InvalidFieldsAmountError;
