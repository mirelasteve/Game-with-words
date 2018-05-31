class Data {
    constructor(model, includes) {
        this.model = model;
        this.includes = includes;
    }
    async getAll() {
        const result = await this.model.findAll();
        return result;
    }
}
module.exports = Data;