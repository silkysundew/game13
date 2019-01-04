console.log("CONNECTED");

// var card = document.querySelector(".card");
// card.addEventListener("click", function(){
// 	this.classList.toggle("down");
// });




let deck = {
	A:4, 2:4, 3:4, 4:4, $:2
}


//selects individual cards
var cards = document.querySelectorAll(".card");
for(var i = 0; i <cards.length; i++){
	cards[i].addEventListener("click", function(){
		this.classList.toggle("down");
		console.log("clicked");
	});
};