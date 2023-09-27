export function underscoreToCamelCase(inputString) {
    return inputString.replace(/_([a-zA-Z0-9])/g, function(match, group1) {
        return group1.toUpperCase();
    });
}
