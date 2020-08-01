//funtion default
var demo = lama.init();
demo.lamamenu();


function lamanotify(txt,txtcolr){
	//open screen notification
	demo.notify(txt, txtcolr);
}

document.getElementById("list-ite").onclick = function () {
	var cookee = demo.createStarCard("lama.js", "./images/icon.png", 5);
    demo.addElement(cookee);
};

document.getElementById("star").onclick = function () {
	var cookee = demo.createButton();
    demo.addElement(cookee);	
};

    ////////////////////////////////////////////////////////////////
   ///**Test functions and functions that need implementations **//
  ///***** You can make it works for you, but if you      *****///
 ////*****Contribute, it help others non programmers too*****////
////////////////////////////////////////////////////////////////

function diags() {
	notify("A notification for you!");
	return false;
}


function vibrate(num){
	if ('vibrate' in navigator) {
   		// Shake that device!
   		navigator.vibrate(num);
	} else {
	   // Not supported
	   demo.notify("Not","danger");
	}
}