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
}