
// You can write more code here

/* START OF COMPILED CODE */

class MovementV2 {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__MovementV2"] = this;

		/* START-USER-CTR-CODE */

		const scene = this.gameObject.scene;
		this.cursors = scene.input.keyboard.createCursorKeys();
		scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {MovementV2} */
	static getComponent(gameObject) {
		return gameObject["__MovementV2"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;

	/* START-USER-CODE */
	update(){
		const speed = 200
		const player = this.gameObject
		const body  = player.body;
		if(!body){
			return;
		}

		if (this.cursors.left.isDown)
		{
			body.setVelocity(-speed, 0)
			player.play('up-walk', true)
		}
		else if (this.cursors.right.isDown)
		{
			body.setVelocity(speed, 0)
			player.play('down-walk', true)
		}
		else if (this.cursors.up.isDown)
		{
			body.setVelocity(0, -speed)
			player.play('up-walk', true)
		}
		else if (this.cursors.down.isDown)
		{
			body.setVelocity(0, speed)
			player.play('down-walk', true)
		}
		else if(this.cursors.space.isDown){
			body.setVelocity(0, 0)
			const key = player.anims.currentAnim.key
			const parts = key.split('-')
			const direction = parts[0]
			console.log("-"+direction+"-")
			player.play(direction+"-attack", true);
		}
		else
		{
			body.setVelocity(0, 0)
			const key = player.anims.currentAnim.key
			const parts = key.split('-')
			const direction = parts[0]
			console.log("-"+direction+"-")
			player.play(direction+"-idle", true);
		}
	}
}


// You can write more code here
