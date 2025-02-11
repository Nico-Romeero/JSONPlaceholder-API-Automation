const apiClient = require("../src/api");

describe("POST / users", () => {
  it("should create a new user", async () => {
    try {
      const newUser = { name: "John Doe", email: "john@example.com" };
      const response = await apiClient.post("/users", newUser);
      expect(response.status).toBe(201);
      expect(response.data.name).toBe(newUser.name);
      expect(response.data.email).toBe(newUser.email);
    } catch (error) {
      fail(`Test failed with error: ${error.message}`);
    }
  });
});
//FINAL COMENT