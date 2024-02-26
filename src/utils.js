export function addItem(list, newItem) {
    return [...list, newItem];
}

export function removeItem(list, item) {
    return list.filter((el) => el.id !== item.id);
}

export function completeItem(list, item) {
    return list.map((el) =>
        el.id === item.id ? { ...el, done: !el.done } : el,
    );
}

export function formatTitle(word) {
    const lowerCaseString = word.toLowerCase();
    return lowerCaseString[0].toUpperCase() + lowerCaseString.slice(1);
}
