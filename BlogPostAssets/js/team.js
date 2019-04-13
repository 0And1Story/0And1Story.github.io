function getTeamInfo(teamname) {
	var info;
	fetch('../team/' + teamname + '.json')
		.then(function(res) {
			info = res.json();
			return res.json();
		})
		.catch(function(err) {
			console.log(err);
		});
	return info;
}

function getTeamHtml(teamname, teamid, type='', json='') {
	var info;
	if (type === 'JSON') {
		info = JSON.parse(json);
	} else {
		info = getTeamInfo(teamname);
	}
	var html = '';
	html += '<a href="https://www.luogu.org/team/show?teamid=' + teamid + '" target="_blank"><h3>洛谷团队页面</h3></a>';
	
	html += '<h2>团队宣言</h2><p>' + info.Declaration + '</p>';
	
	html += '<h2>团队公告</h2><p>' + info.Notice + '</p>';
	
	html += '<h2>团队作业</h2>';
	for (var i = 0; i < info.Homework.length; i ++) {
		html += '<p>' + info.Homework[i] + '</p>';
	}
	
	html += '<h2>团队题目</h2>';
	for (var i = 0; i < info.Problem.length; i ++) {
		html += '<p>' + info.Problem[i] + '</p>';
	}
	
	html += '<h2>团队成员</h2>';
	for (var key in info.Member) {
		html += '<h4>' + key + '</h4>';
		for (i = 0; i < info.Member[key].length; i ++) {
			html += '<a href="https://www.luogu.org/space/show?uid=' + info.Member[key][i]['m-uid'] + '" target="_blank"><div class="team-member"><div class="team-username' + (info.Member[key][i].type == 'Operator' ? ' team-operator' : '') + '">' + info.Member[key][i].username + '</div><div class="team-realname">' + info.Member[key][i].realname + '</div></div></a>';
		}
	}
	return html;
}
