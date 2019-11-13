var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'Pangea', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('astronaut' , 'astronaut.png')

}

function create() {

  game.add.sprite(0, 0, 'astronaut');

}

function update() {
}
