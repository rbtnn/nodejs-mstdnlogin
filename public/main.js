
(function(){
	function async_request(url) {
		return new Promise(function(resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function(){
				if(this.readyState == 4){
					if (200 == this.status) {
						resolve(this.response);
					}
					else {
						reject(this.status);
					}
				}
			};
			xhr.open('GET', url, true);
			xhr.responseType = 'json';
			xhr.send();
		});
	};

	function deleteAllCookies() {
		var cookies = document.cookie.split(";");
		for (var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i];
			var eqPos = cookie.indexOf("=");
			var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
			document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		}
	};

	const LOGIN_OR_LOGOUT = document.getElementById('login_or_logout');
	const OUTPUT = document.getElementById('output');

	LOGIN_OR_LOGOUT.addEventListener('click', function(){
		if (-1 == document.cookie.indexOf('access_token')) {
			async_request('./url').then(function(e){
				location.href = e.url;
			});
		}
		else {
			deleteAllCookies();
			location.reload();
		}
	});

	if (-1 == document.cookie.indexOf('access_token')) {
		LOGIN_OR_LOGOUT.innerText = 'Login';
		OUTPUT.innerText = document.cookie;
	}
	else {
		LOGIN_OR_LOGOUT.innerText = 'Logout';
		OUTPUT.innerText = document.cookie;
	}

})();
