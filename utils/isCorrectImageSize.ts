/**
 *  Получение изображения из файла
 *  @param file Файл изображения
 */
const getImageFromFile = async (file: File) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new Image();
        const objectURL = URL.createObjectURL(file);

        image.onload = () => {
            resolve(image);
            URL.revokeObjectURL(objectURL);
        };

        image.onerror = () => {
            reject(null);
            URL.revokeObjectURL(objectURL);
        };

        image.src = objectURL;
    });

/**
 * Проверка корректности разрешения изображения
 * @param file File
 * @param width Ширина
 * @param height Высота
 * @returns {Promise<string | boolean>}
 */
export const isCorrectImageSize = async (
    file: File,
    width: number,
    height: number
): Promise<string | boolean> => {
    try {
        const image = await getImageFromFile(file);
        return image.naturalWidth === width && image.naturalHeight === height;
    } catch {
        return false;
    }
};
