function generateErrorMessage(aggregate, compositeMark) {
    return "Continuous axis should not have a customized aggregation function '" + aggregate + "'; '" + compositeMark + "' already aggregates the axis.";
}

// Example usage:
let error = generateErrorMessage("customAvg", "bar");
console.log(error); // Outputs: Continuous axis should not have a customized aggregation function 'customAvg'; 'bar' already aggregates the axis.
