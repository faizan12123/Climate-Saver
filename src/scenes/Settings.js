/*
	ARCHIVED, FULLY FUNCTIONAL, NO LONGER IMPLEMENTED IN GAME
*/

class Settings extends Phaser.Scene {

	constructor() {
		super("Settings");
	}

	/** @returns {void} */
	editorCreate() {
		var loadingMusic = this.sound.add("loading-sound", {volume: 0.2});
        loadingMusic.play();
        loadingMusic.loop = true;

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
            loading_graphic.visible = true;
            buttonClicked.play();
            setTimeout(() => {this.scene.start("MainMenu")}, 20);
			backgroundMusic.stop();
        }).on("pointerover", () => {
              button_back.scale += 0.05;
        }).on("pointerout", () => {
            button_back.scaleX = 0.15;
            button_back.scaleY = 0.15;
        });

		// settings_container
		const settings_container = this.add.image(407, 309, "settings-container");
		settings_container.scaleX = 0.35;
		settings_container.scaleY = 0.35;

		// FX_toggle
		const fX_toggle = this.add.image(417, 305, "button-toggle");
		fX_toggle.scaleX = 0.3;
		fX_toggle.scaleY = 0.3;
		fX_toggle.setInteractive();
		fX_toggle.on("pointerdown", () => {
            buttonClicked.play();
            if(fx_tick.visible){
				fx_tick.visible = false;
				button_volumeDown.visible = true;
				buttom_volumeUp.visible = true;
			}
			else{
				fx_tick.visible = true;
				button_volumeDown.visible = false;
				buttom_volumeUp.visible = false;
			}
        }).on("pointerover", () => {
             fX_toggle.scale += 0.05;
        }).on("pointerout", () => {
            fX_toggle.scaleX = 0.3;
            fX_toggle.scaleY = 0.3;
        });

		// music_toggle
		const music_toggle = this.add.image(417, 374, "button-toggle");
		music_toggle.scaleX = 0.3;
		music_toggle.scaleY = 0.3;
		music_toggle.setInteractive();
		music_toggle.on("pointerdown", () => {
            buttonClicked.play();
            if(music_tick.visible){
				music_tick.visible = false;
				button_volumeDown_1.visible = true;
				buttom_volumeUp_1.visible = true;
			}
			else{
				music_tick.visible = true;
				button_volumeDown_1.visible = false;
				buttom_volumeUp_1.visible = false;
			}
        }).on("pointerover", () => {
             music_toggle.scale += 0.05;
        }).on("pointerout", () => {
            music_toggle.scaleX = 0.3;
            music_toggle.scaleY = 0.3;
        });

		// button_volumeDown
		const button_volumeDown = this.add.image(510, 308, "button-volumeDown");
		button_volumeDown.scaleX = 0.1;
		button_volumeDown.scaleY = 0.1;
		button_volumeDown.setInteractive();
		button_volumeDown.on("pointerdown", () => {
            buttonClicked.play()
		}).on("pointerover", () => {
              button_volumeDown.scale += 0.05;
        }).on("pointerout", () => {
            button_volumeDown.scaleX = 0.1;
            button_volumeDown.scaleY = 0.1;
        });


		// button_volumeDown_1
		const button_volumeDown_1 = this.add.image(510, 369, "button-volumeDown");
		button_volumeDown_1.scaleX = 0.1;
		button_volumeDown_1.scaleY = 0.1;
		button_volumeDown_1.setInteractive();
		button_volumeDown_1.on("pointerdown", () => {
            buttonClicked.play()
		}).on("pointerover", () => {
              button_volumeDown_1.scale += 0.05;
        }).on("pointerout", () => {
            button_volumeDown_1.scaleX = 0.1;
            button_volumeDown_1.scaleY = 0.1;
        });

		// buttom_volumeUp
		const buttom_volumeUp = this.add.image(574, 308, "buttom-volumeUp");
		buttom_volumeUp.scaleX = 0.1;
		buttom_volumeUp.scaleY = 0.1;
		buttom_volumeUp.setInteractive();
		buttom_volumeUp.on("pointerdown", () => {
            buttonClicked.play()
		}).on("pointerover", () => {
              buttom_volumeUp.scale += 0.05;
        }).on("pointerout", () => {
            buttom_volumeUp.scaleX = 0.1;
            buttom_volumeUp.scaleY = 0.1;
        });

		// buttom_volumeUp_1
		const buttom_volumeUp_1 = this.add.image(574, 369, "buttom-volumeUp");
		buttom_volumeUp_1.scaleX = 0.1;
		buttom_volumeUp_1.scaleY = 0.1;
		buttom_volumeUp_1.setInteractive();
		buttom_volumeUp_1.on("pointerdown", () => {
            buttonClicked.play()
		}).on("pointerover", () => {
              buttom_volumeUp_1.scale += 0.05;
        }).on("pointerout", () => {
            buttom_volumeUp_1.scaleX = 0.1;
            buttom_volumeUp_1.scaleY = 0.1;
        });

		// fx_tick
		const fx_tick = this.add.image(417, 303, "button-tick");
		fx_tick.scaleX = 0.1;
		fx_tick.scaleY = 0.1;
		fx_tick.visible = false;

		// music_tick
		const music_tick = this.add.image(417, 372, "button-tick");
		music_tick.scaleX = 0.1;
		music_tick.scaleY = 0.1;
		music_tick.visible = false;

		//background music
        var backgroundMusic = this.sound.add("main-menu");
		loadingMusic.stop();
        backgroundMusic.play();
        backgroundMusic.loop = true;

		// loading_graphic
		const loading_graphic = this.add.image(404, 309, "loading-graphic");
		loading_graphic.scaleX = 1.1;
		loading_graphic.scaleY = 1.1;
		loading_graphic.visible = false;

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
