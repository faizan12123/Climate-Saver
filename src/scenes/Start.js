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

		// bg
		const bg = this.add.image(418, 370, "bg");
		bg.scaleX = 0.75;
		bg.scaleY = 0.5;

		var buttonClicked = this.sound.add("buttonOnClick");

		// button_back
		const button_back = this.add.image(88, 87, "button-back");
		button_back.scaleX = 0.15;
		button_back.scaleY = 0.15;
		button_back.setInteractive();
		button_back.on("pointerdown", () => {
			backgroundMusic.stop();
			buttonClicked.play();
			this.scene.start("MainMenu");
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
		button_forward.setInteractive();
		button_forward.on("pointerdown", () => {
			backgroundMusic.stop();
			buttonClicked.play();
			this.scene.start(next_scene);
		}).on("pointerover", () => {
      		button_forward.scale += 0.02;
    	}).on("pointerout", () => {
			button_forward.scaleX = 0.15;
			button_forward.scaleY = 0.15;
		});
		button_forward.visible = false;

		// maps_banner_title
		const maps_banner_title = this.add.image(394, 102, "maps-banner-title");
		maps_banner_title.scaleX = 0.35;
		maps_banner_title.scaleY = 0.35;

		// city-group
		const city_group = this.add.container(218, 287);
		let next_scene = "";
		const clearSelection = () => {
			map_city_enabled.visible = false;
			map_forest_enabled.visible = false;
			map_beach_enabled.visible = false;
			map_icey_enabled.visible = false;
			map_city_disabled.visible = true;
			map_icey_disabled.visible = true;
			map_beach_disabled.visible = true;
			map_forest_disabled.visible = true;
			button_forward.visible = true;
		};

		// map_forest_disabled
		const map_forest_disabled = this.add.image(556, 463, "map-forest-disabled");
		map_forest_disabled.scaleX = 0.13;
		map_forest_disabled.scaleY = 0.13;
		map_forest_disabled.setInteractive();
		map_forest_disabled.on("pointerover", () => {
      		map_forest_disabled.scale += 0.02;
    	}).on("pointerout", () => {
			map_forest_disabled.scaleX = 0.13;
			map_forest_disabled.scaleY = 0.13;
		}).on("pointerdown", () => {
			if(localStorage.settingsOptionFX == "true"){
				buttonClicked.play();
			}
			clearSelection();
			next_scene = "Forest";
			map_forest_enabled.visible = true;
			map_forest_disabled.visible = false;
			//this.scene.start("MainMenu");
		});

		// map_icey_disabled
		const map_icey_disabled = this.add.image(239, 463, "map-icey-disabled");
		map_icey_disabled.scaleX = 0.13;
		map_icey_disabled.scaleY = 0.13;
		map_icey_disabled.setInteractive();
		map_icey_disabled.on("pointerover", () => {
      		map_icey_disabled.scale += 0.02;
    	}).on("pointerout", () => {
			map_icey_disabled.scaleX = 0.13;
			map_icey_disabled.scaleY = 0.13;
		}).on("pointerdown", () => {
			if(localStorage.settingsOptionFX == "true"){
				buttonClicked.play();
			}
			clearSelection();
			next_scene = "Icey";
			map_icey_enabled.visible = true;
			map_icey_disabled.visible = false;
			//this.scene.start("MainMenu");
		});

		// map_beach_disabled
		const map_beach_disabled = this.add.image(556, 271, "map-beach-disabled");
		map_beach_disabled.scaleX = 0.13;
		map_beach_disabled.scaleY = 0.13;
		map_beach_disabled.setInteractive();
		map_beach_disabled.on("pointerover", () => {
      		map_beach_disabled.scale += 0.02;
    	}).on("pointerout", () => {
			map_beach_disabled.scaleX = 0.13;
			map_beach_disabled.scaleY = 0.13;
		}).on("pointerdown", () => {
			if(localStorage.settingsOptionFX == "true"){
				buttonClicked.play();
			}
			clearSelection();
			next_scene = "Beach";
			map_beach_enabled.visible = true;
			map_beach_disabled.visible = false;
			//this.scene.start("MainMenu");
		});

		// map_city_disabled
		const map_city_disabled = this.add.image(239, 276, "map-city-disabled");
		map_city_disabled.scaleX = 0.13;
		map_city_disabled.scaleY = 0.13;
		map_city_disabled.setInteractive();
		map_city_disabled.on("pointerover", () => {
      		map_city_disabled.scale += 0.02;
    	}).on("pointerout", () => {
			map_city_disabled.scaleX = 0.13;
			map_city_disabled.scaleY = 0.13;
		}).on("pointerdown", () => {
			if(localStorage.settingsOptionFX == "true"){
				buttonClicked.play();
			}
			clearSelection();
			next_scene = "City";
			map_city_enabled.visible = true;
			map_city_disabled.visible = false;
			//this.scene.start("MainMenu");
		});

		// map_city_enabled
		const map_city_enabled = this.add.image(239, 276, "map-city-enabled");
		map_city_enabled.scaleX = 0.13;
		map_city_enabled.scaleY = 0.13;
		map_city_enabled.setInteractive().on("pointerdown", () => {
			if(localStorage.settingsOptionFX == "true"){
				buttonClicked.play();
			}
		})

		// map_forest_enabled
		const map_forest_enabled = this.add.image(556, 462, "map-forest-enabled");
		map_forest_enabled.scaleX = 0.13;
		map_forest_enabled.scaleY = 0.13;
		map_forest_enabled.setInteractive().on("pointerdown", () => {
			if(localStorage.settingsOptionFX == "true"){
				buttonClicked.play();
			}
		})

		// map_beach_enabled
		const map_beach_enabled = this.add.image(557, 270, "map-beach-enabled");
		map_beach_enabled.scaleX = 0.13;
		map_beach_enabled.scaleY = 0.13;
		map_beach_enabled.setInteractive().on("pointerdown", () => {
			if(localStorage.settingsOptionFX == "true"){
				buttonClicked.play();
			}
		})
		// map_icey_enabled
		const map_icey_enabled = this.add.image(239, 462, "map-icey-enabled");
		map_icey_enabled.scaleX = 0.13;
		map_icey_enabled.scaleY = 0.13;
		map_icey_enabled.setInteractive().on("pointerdown", () => {
			if(localStorage.settingsOptionFX == "true"){
				buttonClicked.play();
			}
		})

		//background music
		var backgroundMusic = this.sound.add("main-menu");
		backgroundMusic.play();
		backgroundMusic.loop = true;

		map_city_enabled.visible = false;
		map_forest_enabled.visible = false;
		map_beach_enabled.visible = false;
		map_icey_enabled.visible = false;

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
