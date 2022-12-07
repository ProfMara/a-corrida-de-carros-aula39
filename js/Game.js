class Game {
  constructor() {
    //atribuir a propriedade texto e botao 


    //atribuir a propriedade lugar1 e lugar2

  }

 

  

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];
  }

  colocarElementos() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
    
    //definir a posição do texto e seu conteúdo html


    //definir a posição do botão

  }
 

  play() {
    this.colocarElementos();

  
    
    Player.pegarInfo();

    if (allPlayers !== undefined) {
      image(track, 0, -height *5, width, height * 6);
    
      //índice da matriz
      var index = 0;
      for (var plr in allPlayers) {

        //use os dados do banco de dados para exibir os carros nas direções x e y
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        cars[index].position.x = x;
        cars[index].position.y = y;

        //adicione 1 ao índice para cada loop
        index = index + 1;
        if (index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);

          //alterar a posição da câmera na direção y
          camera.position.y = cars[index - 1].position.y;
        }
      }

      this.controle();

      drawSprites();
    }
  }

  controle() {
    // manipulando eventos de teclado
    if (keyIsDown(UP_ARROW)) {
      player.positionY += 10;
      player.update();
    }
   
   
  }
}
