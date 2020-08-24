const getElementById = <T extends { id: string }>(elements: T[]) => (
    id: string
) => {
    return elements.find((el) => el.id === id);
};

export default getElementById;
