export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('counter');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export function saveState<T>(key: string, state: T) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch {
        // ignore write errors
    }
};
