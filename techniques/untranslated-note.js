/*
document.addEventListener('DOMContentLoaded', () => {
    const targetAnchor = document.querySelector('.untranslated-note a');
    if (!targetAnchor) return;

    const pathParts = window.location.pathname.split('/');
    const partsLength = pathParts.length;

    const parentDir = partsLength >= 3 ? pathParts[partsLength - 2] : '';
    const filename = partsLength >= 2 ? pathParts[partsLength - 1] : '';

    const combinedPath = parentDir && filename ? `${parentDir}/${filename}` : filename;

    targetAnchor.href = targetAnchor.href + combinedPath;
});
*/

document.addEventListener('DOMContentLoaded', () => {
    const targetAnchor = document.querySelector('.untranslated-note a');
    if (!targetAnchor) return;

    const pathParts = window.location.pathname.split('/');
    const partsLength = pathParts.length;

    const parentDir = pathParts.at(-2) || '';
    const filename  = pathParts.at(-1) || '';

    const combinedPath = parentDir && filename ? `${parentDir}/${filename}` : filename;

    targetAnchor.href = targetAnchor.href + combinedPath;
});

/*
この JavaScript ファイルは、WCAG 2.2 テクニック集が完全に日本語訳されるまでの、仮のスクリプトです。
WCAG 2.2 テクニック集が完全に日本語訳されたら、この .js ファイルを削除し、
また各ページの head 要素内にある「<script src="untranslated-note.js"></script>」という一行を削除してください。
併せて、各ページの main 要素の直下にある「<div class="untranslated-note">」も不要になるので削除してください。
*/
