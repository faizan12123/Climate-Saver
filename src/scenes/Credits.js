
// You can write more code here

/* START OF COMPILED CODE */

class Credits extends Phaser.Scene {

	constructor() {
		super("Credits");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// credits_banner_title
		this.add.image(840, 426, "credits-banner-title");

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
