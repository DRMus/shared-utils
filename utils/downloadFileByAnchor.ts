interface DownloadFileOptions {
    filename?: string;
    blank?: boolean;
}

/**
 * Функция для скачивания файла
 * @param url - ссылка на файл или же base64
 * @param options
 */
export function downloadFileByAnchor(
    url: string,
    options: DownloadFileOptions = {}
) {
    const { filename, blank } = options;

    const anchor = document.createElement("a");
    anchor.href = url;
    if (filename) {
        anchor.download = `${filename}`;
    }
    if (blank) {
        anchor.target = "_blank";
    }
    document.body.append(anchor);
    anchor.style.display = "none";
    anchor.click();
    anchor.remove();
}