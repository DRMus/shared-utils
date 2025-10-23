type TimeUnit = "min" | "sec" | "hour" | "ms";

/**
 * Возвращает время в миллисекундах
 * @param value Времянное значение
 * @param units Единица измерения времени {default = "sec"}
 * @returns * ms
 */
export const time = (value: number, units: TimeUnit = "sec") => {
    switch (units) {
        case "hour":
            return value * 60 * 60 * 1000;
        case "min":
            return value * 60 * 1000;
        case "sec":
            return value * 1000;
        case "ms":
            return value;
    }
};
