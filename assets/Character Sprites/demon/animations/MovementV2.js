
// You can write more code here

/* START OF COMPILED CODE */

class MovementV2 {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__MovementV2"] = this;
		const scene = this.gameObject.scene;

		this.cursors = scene.input.keyboard.createCursorKeys();
		/* START-USER-CTR-CODE */
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

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
