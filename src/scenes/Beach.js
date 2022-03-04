
// You can write more code here

/* START OF COMPILED CODE */

class Beach extends Phaser.Scene {

	constructor() {
		super("beach");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// beachV1
		const beachV1 = this.add.tilemap("beachV1");
		beachV1.addTilesetImage("beach", "beach-tilesV1");

		// water_1
		beachV1.createLayer("Water", ["beach"], 0, 0);

		// dock
		beachV1.createLayer("Dock", ["beach"], 4, 9);

		// sand
		beachV1.createLayer("Sand", ["beach"], 1, 2);

		// objects
		beachV1.createLayer("Objects", ["beach"], 3, 10);

		this.beachV1 = beachV1;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here