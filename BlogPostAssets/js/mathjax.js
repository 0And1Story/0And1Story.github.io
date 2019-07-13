function initMathjax() {
	var script = document.createElement('script');
	script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML';
	script.async = 'async';
	document.body.appendChild(script);
}