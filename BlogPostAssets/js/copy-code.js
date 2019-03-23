function copyCode(num) {
	var text=document.getElementsByClassName('hljs')[num].innerText;
	var input=document.getElementById('copy-buffer');
	input.value=text;
	input.select();
	document.execCommand('copy');
	alert('复制成功！');
}