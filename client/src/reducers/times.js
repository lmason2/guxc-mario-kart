const times = (times = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            console.log("fetch_all", action.payload);
            return action.payload
        case "CREATE":
            return [...times, action.payload];
        default:
            return times;
    }
}

export default times;