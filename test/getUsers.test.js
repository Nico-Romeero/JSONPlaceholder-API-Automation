const apiClient = require("../src/api");

describe("GET /users", () => {
  it("should fetch users succesfully", async () => {
    try {
      const response = await apiClient.get("/users");
      expect(response.status).toBe(200);
      expect(response.data).toBeDefined();
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data[0].name).toBeDefined();
    } catch (error) {
      fail(`Test failed with error: ${error.message}`);
    }
  });
});
