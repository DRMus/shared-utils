/**
 * Функция превращения файла в base64
 * @param imgFile файл
 */
export const getBase64 = async (imgFile: File | Blob) =>
    new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => resolve(reader.result as string));
        reader.addEventListener("error", (error) => reject(error));
        reader.readAsDataURL(imgFile);
    });