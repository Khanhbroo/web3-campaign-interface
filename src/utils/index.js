export const shortenAddress = (address, startLength = 5, endLength = 5) => {
    if (address) {
        const start = address.substring(0, startLength + 2);
        const end = address.substring(address.length - endLength);
        return `${start}...${end}`;
    } else return undefined;
};

export const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);

    return remainingDays.toFixed(0);
};

export const calculateBarPercentage = (goal, raisedAmount) => {
    const percentage = Math.round((raisedAmount * 100) / goal);

    return percentage;
};

export const checkIfImage = (url, callback) => {
    const img = new Image();
    img.src = url;

    if (img.complete) callback(true);

    img.onload = () => callback(true);
    img.onerror = () => callback(false);
};
