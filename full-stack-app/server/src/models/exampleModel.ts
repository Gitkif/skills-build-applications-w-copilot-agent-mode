class ExampleModel {
    constructor(public id: number, public name: string) {}

    static fromData(data: any): ExampleModel {
        return new ExampleModel(data.id, data.name);
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
        };
    }
}

export default ExampleModel;