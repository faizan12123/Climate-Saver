
// You can write more code here

/* START OF COMPILED CODE */

class MovementV2 {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__MovementV2"] = this;

		/* START-USER-CTR-CODE */

		const scene = this.gameObject.scene;
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

		const speed = 200;
		const player = this.gameObject;
		const body  = player.body;
		if(!body){
			return;
		}

		if ((localStorage.getItem("controlsOptionArrows") == "true" && this.cursors.left.isDown) || (localStorage.getItem("controlsOptionArrows")  == "false" && this.keys.a.isDown))
		{
			body.setVelocity(-speed, 0)
			player.play('left-walk', true)

		}
		else if ((localStorage.getItem("controlsOptionArrows") == "true" && this.cursors.right.isDown) || (localStorage.getItem("controlsOptionArrows")  == "false" && this.keys.d.isDown))
		{
			body.setVelocity(speed, 0)
			player.play('right-walk', true)

		}
		else if ((localStorage.getItem("controlsOptionArrows") == "true" &&this.cursors.up.isDown) || (localStorage.getItem("controlsOptionArrows")  == "false" && this.keys.w.isDown))
		{
			body.setVelocity(0, -speed)
			player.play('up-walk', true)

		}
		else if ((localStorage.getItem("controlsOptionArrows") == "true" &&this.cursors.down.isDown) || (localStorage.getItem("controlsOptionArrows")  == "false" &&  this.keys.s.isDown))
		{
			body.setVelocity(0, speed)
			player.play('down-walk', true)

		}
		// else if(this.cursors.space.isDown){
		// 	body.setVelocity(0, 0)
		// 	const key = player.anims.currentAnim.key
		// 	const parts = key.split('-')
		// 	const direction = parts[0]
		// 	console.log("-"+direction+"-")
		// 	player.play(direction+"-attack", true);
		// }
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
/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
