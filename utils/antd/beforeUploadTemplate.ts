import { message } from "antd";
import Upload, { RcFile } from "antd/es/upload";
import { fileSize, SizeUnit } from "../fileSize";
import { checkFileType } from "../checkFileType";
import { checkFileSize } from "../checkFileSize";
import { isCorrectImageSize } from "../isCorrectImageSize";

interface BeforeUploadTemplateOptions {
    allowedExtensions?: string[];
    allowedFileSize?: {
        size: number;
        unit: SizeUnit;
    };
    allowedImageSize?: {
        width: number;
        height: number;
    };
}

/** Стандартная обертка для проверки файла переде загрузкой
 *
 *  Производится проверка на разрешение файла и его размер
 */
export const beforeUploadTemplate = async (
    file: RcFile,
    options: BeforeUploadTemplateOptions = {}
) => {
    const { allowedExtensions, allowedFileSize, allowedImageSize } = options;

    if (allowedExtensions) {
        const isTypeValid = checkFileType(file, allowedExtensions);

        if (isTypeValid) {
            message.error(`Допустимы только файлы: ${allowedExtensions.join(", ")}`);
            return Upload.LIST_IGNORE;
        }
    }

    if (allowedFileSize) {
        const { size, unit } = allowedFileSize;
        const isSizeValid = checkFileSize(file, fileSize(size, unit));

        if (isSizeValid) {
            message.error(`Максимальный размер файла ${size} ${unit}`);
            return Upload.LIST_IGNORE;
        }
    }

    if (allowedImageSize) {
        const { height, width } = allowedImageSize;
        const isValidImageSize = await isCorrectImageSize(file, width, height);

        if (!isValidImageSize) {
            message.error(`Требуется файл размером ${width}x${height}`);
            return Upload.LIST_IGNORE;
        }
    }

    return true;
};
