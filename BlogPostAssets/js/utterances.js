function initUtterances() {
    let mainContent = document.getElementById('mainContent');
    let authorInfo = document.getElementById('authorInfo');
    let utterances = document.createElement('script');
    utterances.src = 'https://utteranc.es/client.js';
    utterances.setAttribute('repo', '0And1Story/0And1Story.github.io');
    utterances.setAttribute('issue-term', 'pathname');
    utterances.setAttribute('theme', 'github-light');
    utterances.crossorigin = 'anonymous';
    utterances.async = true;
    mainContent.insertBefore(utterances, authorInfo);
    if (document.getElementsByClassName('utterances').length == 0) return;
    let utterances = document.getElementsByClassName('utterances')[0];
    utterances.classList.add('element');
    utterances.outerHTML +=
    '.folder input[type="checkbox"]:checked ~ .element {' +
    '    max-height: ' + utterances.style.height + ';' +
    '}';
    utterances.outerHTML = 
    '<div id="comment" class="folder">' +
    '<h1>评论</h1>' +
    '<input type="checkbox" id="check">' +
    '<label for="check" class="expand">展开</label>' +
    '<label for="check" class="collapse">收起</label>' +
    utterances.outerHTML +
    '</div>';
}