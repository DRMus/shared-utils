/**
 * Создание массива моковых данных
 * @param callback Функция итерации map
 * @param length Размер массива {default: 100}
 * @returns Массив моковых данных
 */
export const createMockArray = <T>(
    callback: (value: unknown, index: number) => T,
    length: number = 100
) => Array.from({ length }, callback);
