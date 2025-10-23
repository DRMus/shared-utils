/**
 * Проверка типа файла
 * @param file Файл
 * @param extensions Массив допустимых расширений файла
 * @param mimeTypes Массив mime-типов файла
 * @returns boolean - Флаг валидности
 */
export const checkFileType = (
    file: File,
    extensions: string[],
    mimeTypes?: string[]
) => {
    // Проверка по расширению
    const extension = file.name.split(".").pop()?.toLowerCase();
    const isExtensionValid = extension && extensions.includes(`.${extension}`);

    // Проверка по MIME-типу
    const isMimeTypeValid = mimeTypes ? mimeTypes.includes(file.type) : true;

    return !isExtensionValid || !isMimeTypeValid;
};
