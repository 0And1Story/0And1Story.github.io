function copyCode(self) {
	var text=self.parentNode.getElementsByClassName('hljs')[0].innerText;
	var input=document.getElementById('copy-buffer');
	input.value=text;
	input.select();
	document.execCommand('copy');
	self.innerHTML='<i class="far fa-copy"></i>&nbsp;复制成功';
	self.setAttribute('style', 'background-color: rgba(146,146,146,1.00);transition:0.2s;');
	setTimeout(function() {
		self.innerHTML='<i class="far fa-copy"></i>&nbsp;复制代码';
		self.removeAttribute('style');
	}, 500);
}
function initCopyButton() {
	var buttons=document.getElementsByClassName('copy-button');
	for (var i = 0; i < buttons.length; i ++)
		buttons[i].setAttribute('onClick', 'copyCode(this)');
}
