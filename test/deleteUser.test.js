const apiClient = require("../src/api");

describe("DELETE/users/:id", () => {
  it("should delete a user", async () => {
    const response = await apiClient.delete("/users/1");
    expect(response.status).toBe(200);
    expect(response.data).toEqual({});
  });
});
