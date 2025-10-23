export type SizeUnit = "B" | "KB" | "MB" | "GB" | "TB";

/**
 * Конвертирует размер файла в указанных единицах в байты
 * @param value Числовое значение размера
 * @param unit Единица измерения (B, KB, MB, GB, TB)
 * @returns Размер в байтах
 */
export function fileSize(value: number, unit: SizeUnit): number {
    const units: Record<SizeUnit, number> = {
        B: 1,
        KB: 1024,
        MB: 1024 ** 2,
        GB: 1024 ** 3,
        TB: 1024 ** 4,
    };

    if (!(unit in units)) {
        throw new Error(
            `Unsupported unit: ${unit}. Use one of: B, KB, MB, GB, TB`
        );
    }

    return value * units[unit];
}