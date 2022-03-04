
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

		// tilemap
		const tilemap = this.add.container(0, 0);

		// water_1
		const water_1 = beachV1.createLayer("Water", ["beach"], 0, 0);
		water_1.scaleX = 0.85;
		water_1.scaleY = 0.85;
		tilemap.add(water_1);

		// dock
		const dock = beachV1.createLayer("Dock", ["beach"], 4, 9);
		dock.scaleX = 0.85;
		dock.scaleY = 0.85;
		tilemap.add(dock);

		// sand
		const sand = beachV1.createLayer("Sand", ["beach"], 4, 5);
		sand.scaleX = 0.85;
		sand.scaleY = 0.85;
		tilemap.add(sand);

		// objects
		const objects = beachV1.createLayer("Objects", ["beach"], 3, 10);
		objects.scaleX = 0.85;
		objects.scaleY = 0.85;
		tilemap.add(objects);

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