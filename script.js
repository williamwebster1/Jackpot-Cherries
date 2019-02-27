var audio = document.getElementById("you-win");
a = document.getElementById("slot1");
b = document.getElementById("slot2");
c = document.getElementById("slot3");

// cycle images in the following order: CHERRY --> LEMON --> ORANGE
function nextImage(el){
	if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/lemon_slot.PNG";
		// if the image is a cherry, change it to a lemon!
	} else if (el.src.match("images/lemon_slot.PNG")){
		el.src = "images/orange_slot.PNG";
		// if the image is a lemon, change it to an orange!
	} else if (el.src.match("images/orange_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
		// if the image is an orange, change it to a cherry!
	} else {
		// do nothing
	}
}

function nextImage1(el){
	if (el.src.match("images/lemon_slot.PNG")){
		el.src = "images/bar_slot.PNG";
	} else if (el.src.match("images/bar_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
	} else if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/lemon_slot.PNG";
	} else {
		
	}
}

function nextImages(el){
	if (el.src.match("images/orange_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
	} else if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/seven_slot.PNG";
	} else if (el.src.match("images/seven_slot.PNG")){
		el.src = "images/watermelon_slot.png";
	} else if (el.src.match("images/watermelon_slot.png")){
		el.src = "images/orange_slot.PNG";
	} else {
		
	}
}

function  checkConfiguration(el){
	if(a.src.match("images/cherry_slot.PNG") && b.src.match("images/cherry_slot.PNG") && c.src.match("images/cherry_slot.PNG")){
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
		audio.play();
	} else {
		
	}
	// when the JACKPOT! button is clicked, play the slot machine sound
}