const removeUndefinedFromArray = <T extends unknown>(
    array: (T | undefined)[]
): T[] => {
    const result: T[] = [];
    array.forEach((el) => el !== undefined && result.push(el));
    return result;
};

export default removeUndefinedFromArray;
