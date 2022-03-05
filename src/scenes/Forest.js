
// You can write more code here

/* START OF COMPILED CODE */

class Forest extends Phaser.Scene {

	constructor() {
		super("Forest");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// loading_graphic
		this.add.image(377, 239, "loading-graphic");

		var backgroundMusic = this.sound.add("forest-bgmusic" , {volume: parseFloat(localStorage.musicVolume)});
		backgroundMusic.loop = true;
		if(localStorage.settingsOptionMusic == "true"){
			backgroundMusic.play();
		}
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
