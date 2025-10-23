type NounResult = number | string;

/**
 * Получение синтаксически правильного обозначения числа
 *
 * @param number
 * @param wordsArr - Пример порядка массива: ['класс', 'класса', 'классов']
 */
export function getRightCountNoun(
    number: number,
    wordsArr: [NounResult, NounResult, NounResult]
): NounResult {
    if (Number.isInteger(number)) {
        const options = [2, 0, 1, 1, 1, 2];

        if (number === 0) return wordsArr[2];

        return wordsArr[
            number % 100 > 4 && number % 100 < 20
                ? 2
                : options[number % 10 < 5 ? number % 10 : 5]
        ];
    }

    return wordsArr[1];
}