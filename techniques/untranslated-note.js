document.addEventListener('DOMContentLoaded', () => {
    const targetAnchor = document.querySelector('.untranslated-note a');
    if (!targetAnchor) return;

    const pathParts = window.location.pathname.split('/');
    const parentDir = pathParts.at(-2);
    const filename  = pathParts.at(-1);
    if(!parentDir || !filename) return;

    targetAnchor.href = targetAnchor.href + parentDir + '/' + filename;
});


/*
この JavaScript ファイルは、WCAG 2.2 テクニック集が完全に日本語訳されるまでの、仮のスクリプトです。
WCAG 2.2 テクニック集が完全に日本語訳されたら、この .js ファイルを削除し、
また各ページの head 要素内にある「<script src="untranslated-note.js"></script>」という一行を削除してください。
併せて、各ページの main 要素の直下にある「<div class="untranslated-note">」も不要になるので削除してください。
*/
