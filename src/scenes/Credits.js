
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

		// main-menu-background
		const main_menu_background = this.add.container(407, 309);

		// layer_0
		const layer_0 = this.add.tileSprite(-6, -4, 4320, 2160, "main-menu-environment-sky");
		layer_0.scaleX = 0.19;
		layer_0.scaleY = 0.28;
		main_menu_background.add(layer_0);

		// layer_1
		const layer_1 = this.add.tileSprite(-6, -98, 4320, 2160, "main-menu-environment-cloud");
		layer_1.scaleX = 0.2;
		layer_1.scaleY = 0.2;
		main_menu_background.add(layer_1);

		// layer_2
		const layer_2 = this.add.tileSprite(5, 122, 4320, 2160, "main-menu-environment-tree1");
		layer_2.scaleX = 0.2;
		layer_2.scaleY = 0.17;
		main_menu_background.add(layer_2);

		// layer_3
		const layer_3 = this.add.tileSprite(0, 107, 4320, 2160, "main-menu-environment-tree2");
		layer_3.scaleX = 0.19;
		layer_3.scaleY = 0.17;
		main_menu_background.add(layer_3);

		// layer_4
		const layer_4 = this.add.tileSprite(-4, 112, 4320, 2160, "main-menu-environment-tree");
		layer_4.scaleX = 0.19;
		layer_4.scaleY = 0.17;
		main_menu_background.add(layer_4);

		 // Button Sounds
   		 var buttonClicked = this.sound.add("buttonOnClick");

		// button_back
		const button_back = this.add.image(88, 87, "button-back");
		button_back.scaleX = 0.15;
		button_back.scaleY = 0.15;
		button_back.setInteractive();
		button_back.on("pointerdown", () => {
			buttonClicked.play();
			this.scene.start("MainMenu");
		});
		
		// credits_textbox_content5
		const credits_textbox_content5 = this.add.image(407, 309, "credits-textbox-content5");
		credits_textbox_content5.scaleX = 0.3;
		credits_textbox_content5.scaleY = 0.3;

		this.layer_0 = layer_0;
		this.layer_1 = layer_1;
		this.layer_2 = layer_2;
		this.layer_3 = layer_3;
		this.layer_4 = layer_4;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	layer_0;
	/** @type {Phaser.GameObjects.TileSprite} */
	layer_1;
	/** @type {Phaser.GameObjects.TileSprite} */
	layer_2;
	/** @type {Phaser.GameObjects.TileSprite} */
	layer_3;
	/** @type {Phaser.GameObjects.TileSprite} */
	layer_4;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}
	 update(){
		this.layer_1.tilePositionX += 1;
		this.layer_2.tilePositionX += 0.4;
		this.layer_3.tilePositionX += 0.6;
		this.layer_4.tilePositionX += 4.5;
  	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
