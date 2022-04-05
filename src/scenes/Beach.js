
// You can write more code here

/* START OF COMPILED CODE */

class Beach extends Phaser.Scene {

	constructor() {
		super("Beach");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {
		this.displayMap();
		this.displayTrash();
		this.displayPlayer();
		var backgroundMusic = this.sound.add("beach" , {volume: parseFloat(localStorage.musicVolume)});
		backgroundMusic.loop = true;
		if(localStorage.settingsOptionMusic == "true"){
			backgroundMusic.play();
		}

		// health_bar_decoration
		const health_bar_decoration = this.add.image(691, 44, "health_bar_decoration");
		health_bar_decoration.scaleX = 2.876226221353047;
		health_bar_decoration.scaleY = 2.876226221353047;

		// life_Bar_Animated_1
		const life_Bar_Animated_1 = this.add.image(713, 44, "Life Bar Animated 1");
		life_Bar_Animated_1.scaleX = 1.801947436688974;
		life_Bar_Animated_1.scaleY = 1.801947436688974;

		// directionpad
		this.add.image(692, 520, "D-Pad");

		// score
		const score = this.add.image(384, 44, "Score");
		score.scaleX = 0.62297233942359;
		score.scaleY = 0.62297233942359;

		// pause_menu
		const pause_menu = this.add.image(394, 281, "pause-menuV2");
		pause_menu.scaleX = 0.26626053769694924;
		pause_menu.scaleY = 0.27093994892320916;
		pause_menu.visible = false;

		//Button Sound
		var buttonClicked = this.sound.add("buttonOnClick");

		// button_yes
		const button_yes = this.add.image(401, 409, "pause-menu-button-quit");
		button_yes.scaleX = 0.27701381259992647;
		button_yes.scaleY = 0.27701381259992647;
		button_yes.setInteractive();
		button_yes.on("pointerdown", () => {
		buttonClicked.play();
		this.scene.start("MainMenu");
		backgroundMusic.stop();
		});
		button_yes.on("pointerover", () => {
      	button_yes.scale += 0.05;
    	});
		button_yes.on("pointerout", () => {
		button_yes.scaleX = 0.27701381259992647;
		button_yes.scaleY = 0.27701381259992647;
		});
		button_yes.visible = false;

		// button_no
		const button_no = this.add.image(401, 323, "pause-menu-button-resume");
		button_no.scaleX = 0.27701381259992647;
		button_no.scaleY = 0.27701381259992647;
		button_no.setInteractive();
		button_no.on("pointerdown", () => {
			buttonClicked.play();
			pause_menu.visible = false;
			button_yes.visible = false;
			button_no.visible = false;
			button_sound.visible = false;
			button_music.visible = false;
		});
		button_no.on("pointerover", () => {
      		button_no.scale += 0.05;
    	});
		button_no.on("pointerout", () => {
			button_no.scaleX = 0.27701381259992647;
			button_no.scaleY = 0.27701381259992647;
		});
		button_no.visible = false;

		// button_sound
		const button_sound = this.add.image(352, 229, "button-sound");
		button_sound.scaleX = 0.16344056315099267;
		button_sound.scaleY = 0.16344056315099267;
		button_sound.setInteractive();
		button_sound.on("pointerdown", () => {
			buttonClicked.play();
			if(fx_tick.visible){
				fx_tick.visible = false;
			}
			else{
				fx_tick.visible = true;
			}
		});
		button_sound.on("pointerover", () => {
      		button_sound.scale += 0.05;
    	});
		button_sound.on("pointerout", () => {
			button_sound.scaleX = 0.16344056315099267;
			button_sound.scaleY = 0.16344056315099267;
		});
		button_sound.visible = false;

		// button_music
		const button_music = this.add.image(446, 229, "button-music");
		button_music.scaleX = 0.16344056315099267;
		button_music.scaleY = 0.16344056315099267;
		button_music.setInteractive();
		button_music.on("pointerdown", () => {
			if(localStorage.settingsOptionFX=="true")
				{buttonClicked.play()}
			if(music_tick.visible){
				music_tick.visible = false;
				backgroundMusic.play();
			}
			else{
				music_tick.visible = true;
				backgroundMusic.stop();
			}
		});
		button_music.on("pointerover", () => {
      		button_music.scale += 0.05;
    	});
		button_music.on("pointerout", () => {
			button_music.scaleX = 0.16344056315099267;
			button_music.scaleY = 0.16344056315099267;
		});
		button_music.visible = false;

		// button_pause
		const button_pause = this.add.image(49, 41, "button-pause");
		button_pause.scaleX = 0.16010465842344668;
		button_pause.scaleY = 0.1577276264549412;
		button_pause.setInteractive();
		button_pause.on("pointerdown", () => {
			pause_menu.visible = true;
			button_yes.visible = true;
			button_no.visible = true;
			button_sound.visible = true;
			button_music.visible = true;
            if(localStorage.settingsOptionFX=="true")
				{
						buttonClicked.play()
				}
			});
		button_pause.on("pointerover", () => {
      		button_pause.scale += 0.02;
    		});
		button_pause.on("pointerout", () => {
			button_pause.scaleX = 0.16010465842344668;
			button_pause.scaleY = 0.1577276264549412;
			});

		// music_tick
		const music_tick = this.add.image(448, 225, "button-tick");
		music_tick.scaleX = 0.14004985687875723;
		music_tick.scaleY = 0.14004985687875723;
		music_tick.visible = false;

		// fx_tick
		const fx_tick = this.add.image(353, 225, "button-tick");
		fx_tick.scaleX = 0.14004985687875723;
		fx_tick.scaleY = 0.14004985687875723;
		fx_tick.visible = false;

		const player = this.add.sprite(489, 348, "1_1");
		new PhysicsV2(player);
		new MovementV2(player);
		this.player = player;

		this.events.emit("scene-awake");
	}

	displayTrash(){
		// trashs
		this.trashs = this.add.group();
		this.trashs.enableBody = true;

		// box
		const box = this.trashs.create(405+300, 187, "box");
		const ceramic_cup = this.trashs.create(110+300, 253, "ceramic-cup");
		const can2 = this.trashs.create(359+300, 433, "can2");
		const can = this.trashs.create(411+300, 266, "can");
		const glass_bottle = this.trashs.create(179+300, 50, "glass-bottle");
		const detergent_bottle = this.trashs.create(422+300, 521, "detergent-bottle");
		const glass_bottle2 = this.trashs.create(251+300, 534, "glass-bottle2");
		const glass_jar = this.trashs.create(189+300, 358, "glass-jar");
		const milk_carton = this.trashs.create(264+300, 186, "milk-carton");
		const paperbag = this.trashs.create(455+300, 368, "paperbag");
		const newspaper = this.trashs.create(303+300, 289, "newspaper");
		const pizza_box = this.trashs.create(0+300, 258, "pizza-box");
		const soda_can = this.trashs.create(416+300, 62, "soda-can");
		const spray_can = this.trashs.create(86+300, 118, "spray-can");
	}

	displayMap(){
		// beachV1
		const beachV1 = this.add.tilemap("beachV1");
		beachV1.addTilesetImage("beach", "beach-tilesV1");

		// water_1
		this.waterLayer = beachV1.createLayer("Water", ["beach"], 1, 0);

		// dock
		beachV1.createLayer("Dock", ["beach"], 11, 0);

		// sand
		beachV1.createLayer("Sand", ["beach"], 14, -1);

		// objects
		beachV1.createLayer("Objects", ["beach"], 3, 2);

		this.beachV1 = beachV1;
	}
	displayPlayer(){
		// player
		
	}

	/* START-USER-CODE */
	trashs;
	beachV1;
	// Write more your code here

	create() {

		this.editorCreate();
		this.player.play("down-idle");
		
	}
	update(){
		this.physics.add.overlap(this.player, this.trashs, ()=> {console.log("overlap"), null, this})
		this.physics.add.collider(this.player,this.waterLayer);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here