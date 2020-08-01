  /////////////////////////////////////
 ////LAMA.JS FUNCTIONS START HERE/////
////////////////////////////////////

var lama = {
	init: function () {
		return lama;
	},
	lamamenu: function () {
		lamacookee.initialize();
	},

	/////////////
   ///CONSOLE///
  /////////////

	//logs a message to console
	log: function (msg) {
		console.log(msg);
		return false;
	},

	/////////////
   ///STORAGE///
  /////////////

	//stores a <key,vaue> pair to localStorage
	setItem: function (key, value) {
		window.localStorage.setItem(key, value);
		return false;
	},

	//gets the value for a specified key in localStorage
	getItem: function (key) {
		return window.localStorage.getItem(key);
	},

	//stores a <key,vaue> pair to sessionStorage
	setVal: function setVal(key, value) {
		window.sessionStorage.setItem(key, value);
		return false;
	},

	//gets the value for a specified key in sessionStorage
	getVal: function (key) {
		return window.sessionStorage.getItem(key);
	},

	///////////////////
   ///NOTIFICATIONS///
  ///////////////////

	//shows a notification message
	notify: function (msg, type) {
		var color = "#0274e9";
		if (type == "alert") color = "#888888";
		else if (type == "error") color = "#f10909";
		else if (type == "success") color = "#00d723";
		$("#status-msg").css("background-color", color);
		document.getElementById("status-msg").innerHTML = msg;
		$("#status-msg").fadeIn('slow', function () {
			setTimeout(function () {
				$("#status-msg").fadeOut('slow');
			}, 1000);
		});
		return false;
	},

	////////
   ///UI///
  ////////

	//adds element to containing body element
	addElement: function (element) {
		document.getElementById("container").appendChild(element);
		return false;
	},

	//sets the content of the containing body element
	setContent: function (content) {
		$("#container").empty();
		document.getElementById("container").innerHTML = content;
		return false;
	},

	//sets the style of the target element
	setStyle: function (style, targetId) {
		var currDOM;
		if (/.|#/.test(targetId)) {
			currDOM = $(targetId);
		} else {
			this.log("Invalid class/id");
			this.notify("Something went wrong!", "alert");
			return false;
		}
		var params = JSON.parse(style);
		for (var key in params) {
			if (params.hasOwnProperty(key)) {
				currDOM.css(key, params[key]);
				this.log(targetId + "{ " + key + ":" + params[key] + " }");
			}
		}
		return false;
	},

	//opens a page in the containing body
	openPage: function (pageurl) {
		if (!pageurl) return false;
		var container = $("#container");
		container.empty();
		container.load(pageurl);
		this.log("open new page: (" + pageurl +")");
		return false;
	},


	//creates a rating card element
	createStarCard: function (text, imageSource, starRating) {
		var btItem = document.createElement("div");
		var btItemImg = document.createElement("img");
		var btItemData = document.createElement("div");
		var btItemRatings = document.createElement("div");
		var btItemText = document.createElement("p");
		btItem.className = "btItem";
		btItemImg.className = "btItemImg";
		btItemData.className = "btItemData";
		btItemRatings.className = "btItemRatings";
		btItemText.className = "btItemText";
	
		btItemImg.src = imageSource;
		for(var i=0;i<10;i++){
			var star = document.createElement("span");
			star.innerHTML = "★";
			if(i>=starRating){star.className = "btItemRating";}
			btItemRatings.appendChild(star);
		}
		btItemText.innerHTML = text;
		
		btItem.appendChild(btItemImg);
		btItemData.appendChild(btItemRatings);
		btItemData.appendChild(btItemText);
		btItem.appendChild(btItemData);
		return btItem;
	},

	//shows a loading element
	showLoading: function () {
		if (!document.getElementById("loading")) {
			mObj = document.body.appendChild(document.createElement("div"));
			mObj.className = "modalContainers";
			mObj.id = "loading";
			mObj.style.height = document.documentElement.scrollHeight + "px";
			spinner = mObj.appendChild(document.createElement("div"));
			spinner.id = "spinner";
			spinner1 = mObj.appendChild(document.createElement("div"));
			spinner1.id = "spinner1";
			spinner2 = mObj.appendChild(document.createElement("div"));
			spinner2.id = "spinner2";
			spinner3 = mObj.appendChild(document.createElement("div"));
			spinner3.id = "spinner3";
			spinner4 = mObj.appendChild(document.createElement("div"));
			spinner4.id = "spinner4";
			spinner5 = mObj.appendChild(document.createElement("div"));
			spinner5.id = "spinner5";
		}
		return false;
	},

	//hides the loading element
	hideLoading: function () {
		if (document.getElementById("loading")) {
			document.body.removeChild(document.getElementById("loading"));
		}
		return false;
	},
};
//initializes the lamacookee menu
var lamacookee = {
	title: document.title,
	initialize: function () {
		var mywindow = $(window),
			mypos = mywindow.scrollTop(),
			up = false,
			newscroll,
			lamaheight = $(".lama-header").outerHeight(true),
			lamamenu = document.getElementById("lama-menu"),
			lamainput = document.createElement("input"),
			lamalabel = document.createElement("Label"),
			lamaheader = document.createElement("div"),
			emptydiv = document.createElement("div");

		lamainput.type = "checkbox";
		lamainput.id = "lama-trigger";
		$("#lama-menu").after(lamainput);

		lamalabel.setAttribute("for", "lama-trigger");
		$("#lama-trigger").after(lamalabel);

		lamaheader.id = "lama-header";
		$("label[for=lama-trigger]").after(lamaheader);

		var title = lamacookee.title;
		$("#lama-header").append(title);

		emptydiv.id = "emptyHeaderElement";
		$("#lama-header").after(emptydiv);

		if ($("#lama-trigger").is(":checked")) {
			$(".lama-item").css("display", "block");
		} else {
			$(".lama-item").css("display", "none");
		}
		$("#lama-trigger").change(function () {
			if ($(this).is(":checked")) {
				$(".lama-item").css("display", "block");
			} else {
				$(".lama-item").css("display", "none");
			}
		});

		mywindow.scroll(function () {
			newscroll = mywindow.scrollTop();

			if (newscroll == ($(document).height())) {
				return;
			}

			if (!up && newscroll <= lamaheight) {
				window.scrollTo(lamaheight, mywindow.scrollLeft());
			} else if (newscroll > mypos && !up) {
				$("#lama-header").stop().slideToggle();
				$("label[for=lama-trigger]").stop().slideToggle();
				$("#emptyHeaderElement").stop().slideToggle();
				up = !up;
			} else if (newscroll < mypos && up) {
				$("#lama-header").stop().slideToggle();
				$("label[for=lama-trigger]").stop().slideToggle();
				$("#emptyHeaderElement").stop().slideToggle();
				up = !up;
			}
			mypos = newscroll;
		});
	}
};


   //////////////
  ///HELPERS///
 /////////////

//pre-loads images for smoother performance
var imager = function () {
	var i = 0;
	var tags = document.getElementsByTagName("img");
	imageObj = new Image();

	for (i = 0; i < tags.length; i++) {
		imageObj = tags[i].getAttribute("src");
		tags[i].setAttribute("src", imageObj);
		this.log(imageObj);
	}
};
imager();

//initializes the notifier
var notifier = function () {
	mObj = document.getElementsByTagName("body")[0].appendChild(document.createElement("div"));
	mObj.id = "status-msg";
};
notifier();




