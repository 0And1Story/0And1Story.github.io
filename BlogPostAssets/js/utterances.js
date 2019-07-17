function initUtterances() {
    let mainContent = document.getElementById('mainContent');
    let utterances = document.createElement('script');
    utterances.src = 'https://utteranc.es/client.js';
    utterances.setAttribute('repo', '0And1Story/0And1Story.github.io');
    utterances.setAttribute('issue-term', 'pathname');
    utterances.setAttribute('theme', 'github-light');
    utterances.crossorigin = 'anonymous';
    utterances.async = true;
    mainContent.appendChild(utterances);
    let style = document.createElement('link');
    style.href = 'https://0and1story.github.io/BlogPostAssets/styles/utterances.css';
    style.rel = 'stylesheet';
    style.type = 'text/css';
    document.getElementsByClassName('utterances-frame')[0].document.head.appendChild(style);
}