export function underscoreToCamelCase(inputString) {
    return inputString.replace(/_([a-zA-Z0-9])/g, function(match, group1) {
        return group1.toUpperCase();
    });
}

export function removeDuplicateWords(inputString) {
   return inputString.replace(/\/(\w+)_\1_/g, '/$1_');
}
