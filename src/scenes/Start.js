// You can write more code here

/* START OF COMPILED CODE */

class Start extends Phaser.Scene {

	constructor() {
		super("Start");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// layer_0
		const layer_0 = this.add.image(413, 304, "Layer_0");
		layer_0.scaleX = 0.2;
		layer_0.scaleY = 0.3;
		
		// Button Sounds
    	var buttonClicked = this.sound.add("buttonOnClick");

		// button_back
		const button_back = this.add.image(88, 87, "button-back");
		button_back.scaleX = 0.15;
		button_back.scaleY = 0.15;
		button_back.setInteractive(); button_back.on("pointerdown", () => {
			buttonClicked.play(); 
			this.scene.start("MainMenu"); });
		// button_forward
		const button_forward = this.add.image(682, 79, "button-forward");
		button_forward.scaleX = 0.15;
		button_forward.scaleY = 0.15;

		// map_selection
		const map_selection = this.add.image(407, 309, "map-selection");
		map_selection.scaleX = 0.3;
		map_selection.scaleY = 0.3;

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
