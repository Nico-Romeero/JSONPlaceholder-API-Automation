const apiClient = require("../src/api");

describe("PUT/users/:id", () => {
  it("should update a user", async () => {
    const updateUser = { name: "Jane Miles", email: "jane@example.com" };
    const response = await apiClient.put("/users/1", updateUser);

    expect(response.status).toBe(200);
    expect(response.data.name).toBe(updateUser.name);
    expect(response.data.email).toBe(updateUser.email);
  });
});
