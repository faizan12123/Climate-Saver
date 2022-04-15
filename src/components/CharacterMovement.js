    //character trial
    const character = this.add.image(
      "character.png"
    );
const player = this.physics.add.sprite(100,450, 'character')
player.setBounce(0.2);
player.setCollideWorldBounds(true);
player.body.setGravityY(300)
const cursors = this.input.keyboard.createCursorKeys();


this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('character', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'turn',
    frames: [ { key: 'character', frame: 4 } ],
    frameRate: 20
});

this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('character', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
});
    if (cursors.left.isDown)
{
    player.setVelocityX(-160);

    player.anims.play('left', true);
}
else if (cursors.right.isDown)
{
    player.setVelocityX(160);

    player.anims.play('right', true);
}
else
{
    player.setVelocityX(0);

    player.anims.play('turn');
}

if (cursors.up.isDown && player.body.touching.down)
{
    player.setVelocityY(-330);
}

    this.layer_0 = layer_0;
    this.layer_1 = layer_1;
    this.layer_2 = layer_2;
    this.layer_3 = layer_3;
    this.layer_4 = layer_4;

    this.events.emit("scene-awake");
  }
