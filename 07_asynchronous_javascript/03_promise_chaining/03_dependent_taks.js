function fetchUser(userId) {
    return Promise.resolve({ id: userId, name: "GFG" });
}

function fetchOrders(user) {
    return Promise.resolve([{ orderId: 1, userId: user.id }]);
}

fetchUser(101)
    .then((user) => {
        console.log(`User: ${user.name}`);
        return fetchOrders(user);
    })
    .then((orders) => {
        console.log(`Orders: ${orders.length}`);
    })
    .catch((error) => console.error(error));
