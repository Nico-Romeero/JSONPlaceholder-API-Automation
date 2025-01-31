const apiClient = require("../src/api");

describe("GET / wrong endopoint", () => {
  it("should handle errors when fecching users", async () => {
    try {
      await apiClient.get("/invalid-endpoint");
    } catch (error) {
      expect(error.response.status).toBe(404);
      expect(error.response.statusText).toBe("Not Found");
    }
  });
});
// In this test, we are trying to fetch users from an invalid endpoint.