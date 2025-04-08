export class ExampleController {
    public async getExample(req, res) {
        // Logic to retrieve example data
        res.send("Example data");
    }

    public async createExample(req, res) {
        // Logic to create a new example resource
        res.send("Example created");
    }

    public async updateExample(req, res) {
        // Logic to update an existing example resource
        res.send("Example updated");
    }

    public async deleteExample(req, res) {
        // Logic to delete an example resource
        res.send("Example deleted");
    }
}