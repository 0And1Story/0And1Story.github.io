function updateScrollLine() {
	var winTop = document.documentElement.scrollTop || document.body.scrollTop;
	var docHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
	var winHeight = document.documentElement.clientHeight || document.body.clientHeight;
	var scrollLen = winTop / (docHeight-winHeight) * 100;
	var scrollLine = document.getElementsByClassName('scroll-line')[0];
	scrollLine.setAttribute('style', 'width: ' + scrollLen + '%;');
}

function initScrollLine() {
	document.body.innerHTML = '<div class="scroll-line"></div>\n' + document.body.innerHTML;
	updateScrollLine();
}

window.onscroll = updateScrollLine;
