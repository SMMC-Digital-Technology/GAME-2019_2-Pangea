var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'Pangea', { preload: preload, create: create, update: update });

function preload() {
  game.load.spritesheet('astronaut' , 'assets/astronaut.png', 71, 84)

}

function create() {

  game.add.sprite(0, 0, 'astronaut');


}

function update() {
}
