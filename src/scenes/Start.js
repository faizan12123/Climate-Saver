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
		var backgroundMusic = this.sound.add("main-menu");
		backgroundMusic.play();
		backgroundMusic.loop = true;

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

		var buttonClicked = this.sound.add("buttonOnClick");

		// button_back
		const button_back = this.add.image(88, 87, "button-back");
		button_back.scaleX = 0.15;
		button_back.scaleY = 0.15;
		button_back.setInteractive();
		button_back.on("pointerdown", () => {
            buttonClicked.play();
            this.scene.start("MainMenu");
			backgroundMusic.stop();
		}).on("pointerover", () => {
      		button_back.scale += 0.05;
    	}).on("pointerout", () => {
			button_back.scaleX = 0.15;
			button_back.scaleY = 0.15;
		});

		// button_forward
		const button_forward = this.add.image(722, 91, "button-forward");
		button_forward.scaleX = 0.15;
		button_forward.scaleY = 0.15;

		// beach-container
		const beach_container = this.add.image(595, 503, "bg");
		beach_container.scaleX = 0.35;
		beach_container.scaleY = 0.2;

		// forest-container
		const forest_container = this.add.image(595, 288, "bg");
		forest_container.scaleX = 0.35;
		forest_container.scaleY = 0.2;

		// icey-container
		const icey_container = this.add.image(225, 503, "bg");
		icey_container.scaleX = 0.35;
		icey_container.scaleY = 0.2;

		// maps_banner_title
		const maps_banner_title = this.add.image(394, 102, "maps-banner-title");
		maps_banner_title.scaleX = 0.35;
		maps_banner_title.scaleY = 0.35;

		// city-group
		const city_group = this.add.container(218, 287);

		// city-container
		const city_container = this.add.image(7, 1, "bg");
		city_container.scaleX = 0.35;
		city_container.scaleY = 0.2;
		city_group.add(city_container);
		city_container.setInteractive();
		city_container.on("pointerdown", () => {
			console.log("city clicked");
			backgroundMusic.stop();
			buttonClicked.play();
			this.scene.start("City");
		});

		// city_img
		const city_img = this.add.image(0, 0, "city-img");
		city_img.scaleX = 0.15;
		city_img.scaleY = 0.15;
		city_group.add(city_img);
		city_img.setInteractive();
		city_img.on("pointerdown", () => {
			console.log("city clicked");
			backgroundMusic.stop();
			buttonClicked.play();
			this.scene.start("City");
		});
		city_img.on("pointerover", () => {
		city_img.scale += 0.01;
		});
		city_img.on("pointerout", () => {
		city_img.scaleX = 0.15;
		city_img.scaleY = 0.15;
		});

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

  // Write more your code here

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
