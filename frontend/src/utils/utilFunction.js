export const displayDate = (displayDate) => {
    const date = new Date(displayDate);
    return `${date.getDate()} ${monthArray[date.getMonth()]}, ${date.getFullYear()}`;
}

const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
