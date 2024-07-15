// dictionary.jsをインポートする
import dictionary from './dictionary.js';

const wordList = document.getElementById('word-list');

// 単語リストを表示する関数
function displayWordList() {
    wordList.innerHTML = ''; // 一旦リストをクリア

    dictionary.forEach(word => {
        const listItem = document.createElement('div');
        listItem.classList.add('word-item');
        listItem.innerHTML = `
            <h3>${word.kanji} (${word.hiragana})</h3>
            <p><strong>意味:</strong> ${word.meaning}</p>
            <p><strong>例文:</strong></p>
            <p>日本語: ${word.example.japanese}</p>
            <p>架空言語: ${word.example.fictionalLanguage}</p>
        `;
        wordList.appendChild(listItem);
    });
}

// 初期表示
displayWordList();
