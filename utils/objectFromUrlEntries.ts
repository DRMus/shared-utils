/** Получение объекта из URLSearchParams */
export function objectFromURLEntries(iteratable: URLSearchParams) {
    return Object.fromEntries(Array.from(iteratable.entries()));
}
