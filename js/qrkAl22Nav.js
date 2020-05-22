document.addEventListener(
	"DOMContentLoaded", () => {
		new Mmenu( "#myyMenu", {
		   "extensions": [
			  "theme-dark"
		   ],
		   "counters": true,
		   "navbars": [
			  {
				 "position": "top",
				 "content": [
					"searchfield"
				 ]
			  },
			  {
				 "position": "top",
				 "content": [
					"prev",
					"title"
				 ]
			  },
			  {
				 "position": "bottom",
				 "content": [
					"<a class='fa fa-envelope' href='#/'></a>",
					"<a class='fa fa-twitter' href='#/'></a>",
					"<a class='fa fa-facebook' href='#/'></a>"
				 ]
			  }
		   ]
		});
	}
);
