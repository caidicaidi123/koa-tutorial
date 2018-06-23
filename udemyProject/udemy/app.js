const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(['Mobile', 'Mac', 'Pen', 'Book']);
        }, 1000);
    });
}

const processRequest = async () => {
    const item1 = await getItems();
    const item2 = await getItems();
}