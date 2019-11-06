let rSlider, gSlider, bSlider;
var foo;
var frase = 0;
var button = [];

function setup() {
  // create canvas
  createCanvas(windowWidth, windowHeight);
  textSize(15);
  noStroke();
  foo = new p5.Speech();// speech synthesis object
  foo.setVoice("Fred");
  foo.setLang("en-US");

  // create sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
	
  // create button
  button[frase] = createButton("Please don't click me");
  button[frase].size(100, 100);
  button[frase].position(windowWidth/2 - 50, windowHeight/2 - 50);
  button[frase].mousePressed(click);
	
  // create speech callback
  bSlider.mousePressed(Parlab);
  gSlider.mousePressed(Parlag);
  rSlider.mousePressed(Parlar);
}

function draw() {
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('background red', rSlider.x * 2 + rSlider.width, 35);
  text('background green', gSlider.x * 2 + gSlider.width, 65);
  text('background blue', bSlider.x * 2 + bSlider.width, 95);
}

function click(){
	if(frase === 0){
		foo.speak("Please stop");
		frase++;
		button[frase] = createButton("Why are you doing this");
		button[frase].style('font-size','20px');
		button[frase].size(130, 130);
  		button[frase].position(windowWidth/2 - 65, windowHeight/2 - 65);
		button[frase].mousePressed(click);
	} else if(frase === 1){
		foo.speak("I have a boyfriend");
		frase++;
		button[frase] = createButton("Help");
		button[frase].style('font-size','30px');
		button[frase].size(200, 200);
  		button[frase].position(windowWidth/2 - 100, windowHeight/2 - 100);
		button[frase].mousePressed(click);
	} else if (frase === 2){
		foo.speak("I'll call the cops");
		frase++;
		button[frase] = createButton("911");
		button[frase].style('font-size','50px');
		button[frase].size(300, 300);
  		button[frase].position(windowWidth/2 - 150, windowHeight/2 - 150);
		button[frase].mousePressed(click);
	} else if (frase === 3){
		foo.speak("This is enough");
		frase++;
		button[frase] = createButton("I'll have you arrested");
		button[frase].style('font-size','100px');
		button[frase].size(500, 500);
  		button[frase].position(windowWidth/2 - 250, windowHeight/2 - 250);
	} else if (frase ===4){
		button[frase].mousePressed(window.open("https://www.youtube.com/watch?v=zHC3uvzcfV0"));
	}
}

function Parlab(){
	foo.speak("You're modifying the blue");
}

function Parlar(){
	foo.speak("You're modifying the red");
}

function Parlag(){
	foo.speak("You're modifying the green");
}