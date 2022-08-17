var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var topLimit = createSprite(200, 120,400,10);
var bottonLimit = createSprite(200,280,400,10 );
topLimit.shapeColor = "gray"
bottonLimit.shapeColor = "gray"

var vilao1 = createSprite(140, 200,15,15)
var vilao2 = createSprite(190, 200,15,15);
var vilao3 = createSprite(250, 200,15,15);
var vilao4 = createSprite(310, 200,15,15);
vilao1.velocityY = -9
vilao2.velocityY = 10
vilao3.velocityY = -10
vilao4.velocityY = 9
vilao1.shapeColor = "red"
vilao2.shapeColor = "red"
vilao3.shapeColor = "red"
vilao4.shapeColor = "red"


var start = createSprite(25, 200,50,150);
var lineWin = createSprite(370,200,50,150);
var jogador = createSprite(25,210,20,20);
start.shapeColor = "lightBlue"
lineWin.shapeColor = "yellow"
jogador.shapeColor = "pink"


var win = 0;
var vidasPerdidas = 0;
function draw() {
background("white");
if(keyDown("LEFT")){
jogador.x = jogador.x - 6;
}
if(keyDown("RIGHT")){
jogador.x = jogador.x + 6;
}
if (vilao1.isTouching(topLimit)) {
vilao1.velocityY = 9
}
if (vilao2.isTouching(topLimit)) {
vilao2.velocityY = 9
}
if (vilao3.isTouching(topLimit)) {
vilao3.velocityY = 9
}
if (vilao4.isTouching(topLimit)) {
vilao4.velocityY = 9
}
if (vilao1.isTouching(bottonLimit)) {
vilao1.velocityY = -9
}
if (vilao2.isTouching(bottonLimit)) {
vilao2.velocityY = -9
}
if (vilao3.isTouching(bottonLimit)) {
vilao3.velocityY = -9
}
if (vilao4.isTouching(bottonLimit)) {
vilao4.velocityY = -9
}
if (jogador.isTouching(vilao1)) {
vidasPerdidas = vidasPerdidas + 1;
jogador.x = 25;
jogador.y = 210; 
}
if (jogador.isTouching(vilao2)) {

vidasPerdidas = vidasPerdidas + 1
jogador.x = 25;
jogador.y = 210;
  
}
if (jogador.isTouching(vilao3)) {
vidasPerdidas = vidasPerdidas + 1
jogador.x = 25;
jogador.y = 210;
  
}
if (jogador.isTouching(vilao4)) {
vidasPerdidas = vidasPerdidas + 1
jogador.x = 25;
jogador.y = 210;
  
}
if (jogador.isTouching(lineWin)) {
win = win + 1;
jogador.x = 25;
jogador.y = 210;
textSize(50);
stroke("black")
text("win" + win,160,200)  


}


textSize(18);
stroke("black")
text("vidasPerdidas:" + vidasPerdidas,270,20)
drawSprites(); 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
