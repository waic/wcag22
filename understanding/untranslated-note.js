// この JavaScript ファイルは、WCAG 2.2 解説書が完全に日本語訳されるまでの、仮のスクリプトです。
// WCAG 2.2 解説書が完全に日本語訳されたら、この .js ファイルを削除し、
// また各ページの head 要素内にある「<script src="untranslated-note.js"></script>」という一行を削除してください。
// 併せて、各ページの main 要素の直下にある「<div class="untranslated-note">」も不要になるので削除してください。

document.addEventListener('DOMContentLoaded', () => {
    const targetAnchor = document.querySelector('.untranslated-note a');
    if(!targetAnchor) return;
    const currentFilename = window.location.pathname.split('/').pop();
    targetAnchor.href = targetAnchor.href + currentFilename;
});