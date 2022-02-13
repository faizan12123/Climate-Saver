
// You can write more code here

/* START OF COMPILED CODE */

class City extends Phaser.Scene {

	constructor() {
		super("City");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {
        const map = this.make.tilemap({key: "cityV1"});
        const tileset = map.addTilesetImage("city-tilesV1", "city-tiles")

        const belowLayer = map.createLayer("Ground", tileset, 0,0);
        const worldLayer = map.createLayer("World Layer", tileset, 0,0);
        const worldLayer2 = map.createLayer("Windows and Doors", tileset, 0,0);
        const worldObjects = map.createLayer("Lights", tileset, 0,0);
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