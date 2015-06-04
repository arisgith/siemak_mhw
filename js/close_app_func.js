	function toast(a){
				Materialize.toast('Anda Ingin Keluar? '+a+' <button onclick="onBackKeyDown2()" class="btn red">Ya</button>', 4000)
			}
			//disable back button
			if (typeof history.pushState === "function") {
				history.pushState("jibberish", null, null);
				var page_loaded = false;
				window.onpopstate = function () {
					if(!page_loaded){
						page_loaded = true;
						return false;
					}
					history.pushState('newjibberish', null, null);
					// Handle the back (or forward) buttons here
					// Will NOT handle refresh, use onbeforeunload for this.
					toast(1);
				};
			}
			else {
				var ignoreHashChange = true;
				window.onhashchange = function () {
					if (!ignoreHashChange) {
						ignoreHashChange = true;
						window.location.hash = Math.random();
						// Detect and redirect change here
						// Works in older FF and IE9
						// * it does mess with your hash symbol (anchor?) pound sign
						// delimiter on the end of the URL
					}
					else {
						ignoreHashChange = false;   
					}
				};
			}	
