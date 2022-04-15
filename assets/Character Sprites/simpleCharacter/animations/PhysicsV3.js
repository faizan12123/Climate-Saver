
// You can write more code here

/* START OF COMPILED CODE */

class PhysicsV3 {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__PhysicsV3"] = this;

		/* START-USER-CTR-CODE */

		const scene = this.gameObject.scene;

		scene.physics.add.existing(this.gameObject);
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {PhysicsV3} */
	static getComponent(gameObject) {
		return gameObject["__PhysicsV3"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
