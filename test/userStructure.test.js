const apiClient = require("../src/api");

describe('GET/ users structure', () => {
    it ("should validate user data structure", async () => {
        const response = await apiClient.get('/users');
        response.data.forEach(user => {
            expect(user).toHaveProperty('id');
            expect(user).toHaveProperty('name');
            expect(user).toHaveProperty('email');
            expect(user).toHaveProperty('address');
            expect(user.address).toHaveProperty('city');
            expect(user.address).toHaveProperty('zipcode');
        });
    });
});

