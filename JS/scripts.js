var randhorozontal;
var randvertical;
var shiney;
var inverted;
var bright;
var oddcolor;

var level;
var friendly;
/**/
function pokeroller(pokenum){
	randhorozontal = ((Math.floor(Math.random()*28)*80)-80);
	randvertical = ((Math.floor(Math.random()*18)*80)-80);
	/**/
	$('#poke'+pokenum).css('background-position','-'+randhorozontal+'px -'+randvertical+'px');
	/**/
	shiney = Math.floor(Math.random()*10+1);
	bright = Math.floor(Math.random()*10+1);
	oddcolor = Math.floor(Math.random()*10+1);
	inverted = Math.floor(Math.random()*10+1);
	level = Math.floor(Math.random()*100+1);
	friendly = Math.floor(Math.random()*40+1);

	/**/
	$('#poketext'+pokenum).append('<p class="poketext">LVL '+level+'</p>');
	/**/
	if (friendly == 40){
		$('#poketext'+pokenum).append('<p class="poketext">Friendly!</p>');
		$('#pokecontainer'+pokenum).css('background-image','url(hearts.gif)');
	}
	if (friendly == 1){
		$('#poketext'+pokenum).append('<p class="poketext">Menacing!</p>');
		$('#pokecontainer'+pokenum).css('background-image','url(menacing.gif)');
	}
	if (level >= 90){
		$('#poketext'+pokenum).append('<p class="poketext">Strong!</p>');
		$('#pokecontainer'+pokenum).css('background-image','url(bright.gif)');
	}
	if (shiney == 10){
		$('#poke'+pokenum).css('background-image','url(spritesspecial.png)');
		$('#poketext'+pokenum).append('<p class="poketext">Shiney!</p>');
		$('#pokecontainer'+pokenum).css('background-image','url(shiney.gif)');
	} else {
		$('#poke'+pokenum).css('background-image','url(sprites.png)');
	}
	/**/
	if (inverted == 10){
		$('#poke'+pokenum).css('filter','invert(100%)');
		$('#poketext'+pokenum).append('<p class="poketext">Inverted!</p>');
	}
	/**/
	if (bright == 10){
		$('#poke'+pokenum).css('filter','contrast(600%)');
		$('#poketext'+pokenum).append('<p class="poketext">Glowing!</p>');
	}
	/**/
	if (oddcolor == 10){
		$('#poke'+pokenum).css('filter','hue-rotate('+Math.floor(Math.random()*270+90)+'deg)');
		$('#poketext'+pokenum).append('<p class="poketext">Odd Colored</p>');
	}
	/**/
}
/**/
function trainer(){
	randhorozontal = ((Math.floor(Math.random()*12)*80)-80);
	randvertical = ((Math.floor(Math.random()*10)*80)-80);
	$('#trainercontainer').css('background-position','-'+randhorozontal+'px -'+randvertical+'px');
}
$('#reroller').click(function(){
	$(".poketext").remove();
	pokeroller(1);
	pokeroller(2);
	pokeroller(3);
	pokeroller(4);
	pokeroller(5);
	pokeroller(6);
	trainer();
})