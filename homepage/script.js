document.addEventListener("DOMContentLoaded", function(){
	const searcher = document.getElementById('search-textbox');
	searcher.addEventListener("keyup", function(event) {
		if(event.key === "Enter") {
			const str = "https://duckduckgo.com/?q="+searcher.value;
			window.open(str,"_self");
		}
	});
	function weather(){
		var a=document.getElementById("weatherwidget-io");
		window.addEventListener("message",function(t){
			console.log("got message");
			"https://weatherwidget.io" === t.origin &&
			a.parentNode &&
			(a.style.height = t.data.wwHeight+"px")
		});
		var o={};
		o.id="weatherwidget-io";
		//o.href="https://forecast7.com/en/56d7337d17/dubna/";
		o.href="https://forecast7.com/en/64d5540d56/arkhangelsk/";
		o.label_1=a.getAttribute("data-label_1");
		o.label_2=a.getAttribute("data-label_2");
		o.font=a.getAttribute("data-font");
		o.icons=a.getAttribute("data-icons");
		o.mode=a.getAttribute("data-mode");
		o.days=a.getAttribute("data-days");
		o.theme=a.getAttribute("data-theme");
		o.basecolor=a.getAttribute("data-basecolor");
		o.accent=a.getAttribute("data-accent");
		o.textcolor=a.getAttribute("data-textcolor");
		o.textaccent=a.getAttribute("data-textaccent");
		o.highcolor=a.getAttribute("data-highcolor");
		o.lowcolor=a.getAttribute("data-lowcolor");
		o.suncolor=a.getAttribute("data-suncolor");
		o.mooncolor=a.getAttribute("data-mooncolor");
		o.cloudcolor=a.getAttribute("data-cloudcolor");
		o.cloudfill=a.getAttribute("data-cloudfill");
		o.raincolor=a.getAttribute("data-raincolor");
		o.snowcolor=a.getAttribute("data-snowcolor");
		o.windcolor=a.getAttribute("data-windcolor");
		o.fogcolor=a.getAttribute("data-fogcolor");
		o.thundercolor=a.getAttribute("data-thundercolor");
		o.hailcolor=a.getAttribute("data-hailcolor");
		o.dayscolor=a.getAttribute("data-dayscolor");
		o.tempcolor=a.getAttribute("data-tempcolor");
		o.desccolor=a.getAttribute("data-desccolor");
		o.label1color=a.getAttribute("data-label1color");
		o.label2color=a.getAttribute("data-label2color");
		o.shadow=a.getAttribute("data-shadow");
		o.scale=a.getAttribute("data-scale");
		a.onload=function(){
			a.contentWindow.postMessage(o,"https://weatherwidget.io");
			console.log("posting");
			console.log(o);
		}
	}
	weather();
});
