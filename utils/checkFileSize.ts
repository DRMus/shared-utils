/**
 * Проверка размера файла
 * @param file Файл
 * @param fileSize Допустимый размер файла
 * @returns boolean - Флаг валидности
 */
export const checkFileSize = (file: File | Blob, fileSize: number) => {
    return file.size > fileSize;
};
