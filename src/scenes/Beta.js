
// You can write more code here

/* START OF COMPILED CODE */

class Beta extends Phaser.Scene {

	constructor() {
		super("Beta");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg
		const bg = this.add.image(287, 164, "bg");
		bg.scaleX = 0.2;
		bg.scaleY = 0.2;

		// player
		const player = this.add.sprite(489, 348, "1_1");

		this.player = player;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	player;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.player.play("down-idle");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
