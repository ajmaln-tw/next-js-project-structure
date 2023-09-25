

export function formatCurrency(value) {
    // Ensure value is a number
    const numberValue = typeof value === "number" ? value : parseFloat(value);

    // Check if the number is valid
    if (!isNaN(numberValue)) {
        let price = numberValue / 100;
        return `$ ${price}`;
    } else {
        // Handle invalid input, return an empty string or an error message
        return "Invalid input";
    }
}
