/**
 * Создает новый объект, содержащий только указанные свойства из исходного объекта.
 *
 * @template T - Тип исходного объекта
 * @template K - Ключи исходного объекта для выбора (должны быть ключами T)
 * @param {T} obj - Исходный объект, из которого выбираются свойства
 * @param {K[]} keys - Массив ключей свойств, которые нужно выбрать из исходного объекта
 * @returns {Pick<T, K>} Новый объект, содержащий только указанные свойства
 *
 * @example
 * const user = {
 *   id: 1,
 *   name: 'Иван',
 *   age: 30,
 *   email: 'ivan@example.com'
 * };
 *
 * const userData = pick(user, ['name', 'age']); // { name: 'Иван', age: 30 }
 */
export const pick = <T extends object, K extends keyof T>(
    obj: T,
    keys: K[]
): Pick<T, K> => {
    const result = {} as Pick<T, K>;

    for (const key of keys) {
        if (key in obj) {
            result[key] = obj[key];
        }
    }

    return result;
};
