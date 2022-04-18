class Beach extends Phaser.Scene {

	trashs;
	beachV1;
	healthBarNumber; // start with 9 bars

	constructor() {
		super("Beach");
	}

	/** @returns {void} */
	editorCreate() {
		this.displayMap();
		this.displayTrash();
		this.displayPlayer();
		this.displayHealthBar(); // there's working updateHealthBar() function
		this.overlapBool = false;

		// directionpad
		this.add.image(692, 520, "D-Pad");

		// score
		var player_score = 0;
		const score = this.add.image(384, 44, "Score");
		const score_count = this.add.text(420, 30, "Resume", {
		fontFamily: "Acme",
		fontSize: "24px",
		color: "yellow",
		fontStyle: "Bold",
		});
		//score_count.setText(player_score+1);
		score.scaleX = 0.62297233942359;
		score.scaleY = 0.62297233942359;

		//this.buttonClicked = this.sound.add("buttonOnClick")
		const tut_resume = this.add.image(401, 323, "pause-menu-button-resume");
		tut_resume.scaleX = 0.27701381259992647;
		tut_resume.scaleY = 0.27701381259992647;
		tut_resume.setInteractive()
			.on("pointerdown", () => {
				if(localStorage.settingsOptionFX == "true"){
						this.buttonClicked.play();
				}
				pause_menu.visible = true;
				btn_quit.visible = true;
				tut_resume.visible = true;
				button_sound.visible = true;
				button_music.visible = true;
				fx_tick.visible = true;
				music_tick.visible = true;
				this.input.keyboard.enabled = true;
			})
			.on("pointerover", () => {
      			tut_resume.scale += 0.05;
    		})
			.on("pointerout", () => {
				tut_resume.scaleX = 0.27701381259992647;
				tut_resume.scaleY = 0.27701381259992647;
			})
		tut_resume.visible = false;


		//tutorial button
		const tutorial = this.add.image(120, 44, "button-radio");
		const tutorial_symbol = this.add.text(111, 30, "?", {
		fontFamily: "Acme",
		fontSize: "28px",
		color: "white",
		fontStyle: "Bold",
		});
		tutorial.scaleX = 0.7;
		tutorial.scaleY = 0.7;
		tutorial.setInteractive();
		tutorial.on("pointerdown", () => {
		console.log("pressed");
		tutorial_desc.visible = true;
		tutorial_label.visible = true;
		tut_resume.visible = true;
		details.visible = true;
		});
		tutorial.on("pointerover", () => {
		tutorial.scale += 0.06;
		});
		tutorial.on("pointerout", () => {
		tutorial.scaleX = 0.7;
		tutorial.scaleY = 0.7;
		});

		

		const tutorial_desc = this.add.image(394, 231, "base");
		const tutorial_label = this.add.text(280, 51, "How To Play", {
		fontFamily: "Acme",
		fontSize: "36px",
		color: "white",
		fontStyle: "Bold",
		});
		const details = this.add.text(300, 145, "Use directional keys to ", {
		fontFamily: "Acme",
		fontSize: "16px",
		color: "white",
		fontStyle: "Bold",
		});
		details.visible = false;
		tutorial_label.visible = false;
		tutorial_desc.scaleX = 0.26626053769694924;
		tutorial_desc.scaleY = 0.27093994892320916;
		tutorial_desc.visible = false;


		
		this.buttonClicked = this.sound.add("buttonOnClick")
		
		// button_pause
		const button_pause = this.add.image(49, 41, "button-pause");
		button_pause.scaleX = 0.16010465842344668;
		button_pause.scaleY = 0.1577276264549412;
		button_pause.setInteractive()
			.on("pointerdown", () => {
				if(localStorage.settingsOptionFX=="true"){
					this.buttonClicked.play()
				}
				this.displayPauseMenu();

			})
			.on("pointerover", () => {
      			button_pause.scale += 0.02;
    		})
			.on("pointerout", () => {
				button_pause.scaleX = 0.16010465842344668;
				button_pause.scaleY = 0.1577276264549412;
			});

		this.events.emit("scene-awake");
	}


	create() {
		this.healthBarNumber = 8; // start with 9 bars
		this.editorCreate();
		this.physics.add.overlap(this.player, this.trashs, this.displayOverlapPrompt, null, this)
	}
	update(){
		
		this.waterLayer.setCollisionByProperty({ collides: true });
		this.objectsLayer.setCollisionByProperty({ collides: true });
		// if (this.cursors.left.isDown)
        // {
        //     this.player.setVelocityX(-160);

        //     this.player.anims.play('left', true);
        // }
        // else if (this.cursors.right.isDown)
        // {
        //     this.player.setVelocityX(160);

        //     this.player.anims.play('right', true);
        // }
        // else if (this.cursors.up.isDown)
        // {
        //     this.player.setVelocityY(-160);

        //     this.player.anims.play('up', true);
        // }
        // else if (this.cursors.down.isDown)
        // {
        //     this.player.setVelocityY(160);

        //     this.player.anims.play('down', true);
        // }
        // else
        // {
        //     this.player.setVelocityX(0);

        //     this.player.anims.play('turn');
        // }

        // if (this.cursors.up.isDown && this.player.body.touching.down)
        // {
        //     player.setVelocityY(-330);
        // }

		if(!this.overlapBool){
			this.hideOverlapPrompt();
		}
  
	}

	displayMap(){
		// beachV1
		const beachV1 = this.add.tilemap("beachV1");
		beachV1.addTilesetImage("beach", "beach-tilesV1");
		this.waterLayer = beachV1.createLayer("Water", ["beach"], 1, 0);
		beachV1.createLayer("Dock", ["beach"], 11, 0);
		beachV1.createLayer("Sand", ["beach"], 14, -1);
		this.objectsLayer = beachV1.createLayer("Objects", ["beach"], 3, 2);
		this.beachV1 = beachV1;


		//background music
		this.backgroundMusic = this.sound.add("beach" , {volume: parseFloat(localStorage.musicVolume)});
		this.backgroundMusic.loop = true;
		if(localStorage.settingsOptionMusic == "true"){
			this.backgroundMusic.play();
		}

		this.overlapPromptImg = this.add.image(128,499, "overlapPrompt");
		this.overlapPromptImg.scaleX = 0.2;
		this.overlapPromptImg.scaleY = 0.2;
		this.overlapPromptImg.visible =false;
	}
	displayOverlapPrompt(){
		this.overlapPromptImg.visible = true;
		this.overlapBool = true;
		setTimeout(()=>{
			this.overlapBool = false;
		}, 5000);
	}
	hideOverlapPrompt(){
		this.overlapPromptImg.visible = false;
	}

	displayPlayer(){
		// player
		const player = this.add.sprite(419, 348, 'Boy  sheet wlaking and Idle');
		this.player = player;

		

		//animations + movements
		new PhysicsV2(player);
		new MovementV2(player);
		this.player.play("down-idle");
		this.physics.add.collider(this.player, this.waterLayer)
		this.physics.add.collider(this.player, this.objectsLayer)
	}
// 	displayCharacter(){
// 	let player;
//     let cursors;
//     player = this.physics.add.sprite(489, 348, 'character');

//         player.setBounce(0.2);
//         player.setCollideWorldBounds(true);

//         this.anims.create({
//             key: 'left',
//             frames: this.anims.generateFrameNumbers('character', { start: 26, end: 26 }),
//             frameRate: 10,
//             repeat: -1
//         });

//         this.anims.create({
//             key: 'turn',
//             frames: [ { key: 'character', frame: 2 } ],
//             frameRate: 20
//         });

//         this.anims.create({
//             key: 'right',
//             frames: this.anims.generateFrameNumbers('character', { start: 10, end: 10 }),
//             frameRate: 10,
//             repeat: -1
//         });

//         this.anims.create({
//             key: 'down',
//             frames: this.anims.generateFrameNumbers('character', { start: 4, end: 4 }),
//             frameRate: 10,
//             repeat: -1
//         });
//         this.anims.create({
//             key: 'up',
//             frames: this.anims.generateFrameNumbers('character', { start: 18, end: 18 }),
//             frameRate: 10,
//             repeat: -1
//         });

//         cursors = this.input.keyboard.createCursorKeys();
// 		this.player = player
//   		this.cursors = cursors

// 		this.physics.add.collider(this.player, this.waterLayer)
// 		this.physics.add.collider(this.player, this.objectsLayer)
//   }
	
	displayTrash(){
		// trashs
		this.trashs = this.physics.add.group();
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
		const spray_can = this.trashs.create(86+300, 388, "spray-can");
	}

	displayPauseMenu(){
		// pause_menu
		const pause_menu = this.add.image(394, 281, "pause-menuV2");
		pause_menu.scaleX = 0.26626053769694924;
		pause_menu.scaleY = 0.27093994892320916;
		//comment pause_menu.visible = false;

		// btn_quit
		const btn_quit = this.add.image(401, 409, "pause-menu-button-quit");
		btn_quit.scaleX = 0.27701381259992647;
		btn_quit.scaleY = 0.27701381259992647;
		btn_quit
			.setInteractive()
			.on("pointerdown", () => {
				if(localStorage.settingsOptionFX == "true"){
            		this.buttonClicked.play();
          		}
				  this.input.keyboard.enabled = true;
				this.backgroundMusic.stop();
				this.scene.start("MainMenu");
			})
			.on("pointerover", () => {
      			btn_quit.scale += 0.05;
    		})
			.on("pointerout", () => {
				btn_quit.scaleX = 0.27701381259992647;
				btn_quit.scaleY = 0.27701381259992647;
			})
			//comment.visible = false;

		//btn_resume
		const btn_resume = this.add.image(401, 323, "pause-menu-button-resume");
		btn_resume.scaleX = 0.27701381259992647;
		btn_resume.scaleY = 0.27701381259992647;
		btn_resume.setInteractive()
			.on("pointerdown", () => {
				if(localStorage.settingsOptionFX == "true"){
						this.buttonClicked.play();
				}
				pause_menu.visible = false;
				btn_quit.visible = false;
				btn_resume.visible = false;
				button_sound.visible = false;
				button_music.visible = false;
				fx_tick.visible = false;
				music_tick.visible = false;
				this.input.keyboard.enabled = true;
			})
			.on("pointerover", () => {
      			btn_resume.scale += 0.05;
    		})
			.on("pointerout", () => {
				btn_resume.scaleX = 0.27701381259992647;
				btn_resume.scaleY = 0.27701381259992647;
			})
			//comment.visible = false;

		// button_sound
		const button_sound = this.add.image(352, 229, "button-sound");
		button_sound.scaleX = 0.16344056315099267;
		button_sound.scaleY = 0.16344056315099267;
		button_sound
			.setInteractive()
			.on("pointerdown", () => {
				if(localStorage.settingsOptionFX == "true"){
					this.buttonClicked.play();
				}
				if(fx_tick.visible){
					fx_tick.visible = false;
					localStorage.settingsOptionFX = "true";
				}
				else{
					fx_tick.visible = true;
					localStorage.settingsOptionFX = "false";
				}
			})
			.on("pointerover", () => {
      			button_sound.scale += 0.05;
    		})
			.on("pointerout", () => {
				button_sound.scaleX = 0.16344056315099267;
				button_sound.scaleY = 0.16344056315099267;
			})
			//comment.visible = false;

		// button_music
		const button_music = this.add.image(446, 229, "button-music");
		button_music.scaleX = 0.16344056315099267;
		button_music.scaleY = 0.16344056315099267;
		button_music.setInteractive()
			.on("pointerdown", () => {
				if(localStorage.settingsOptionFX=="true"){
					this.buttonClicked.play()
				}
				if(music_tick.visible){
					music_tick.visible = false;
					localStorage.settingsOptionMusic = "true";
					this.backgroundMusic.play();
				}
				else{
					music_tick.visible = true;
					localStorage.settingsOptionMusic ="false";
					this.backgroundMusic.stop();
				}
			})
			.on("pointerover", () => {
      			button_music.scale += 0.05;
    		})
			.on("pointerout", () => {
				button_music.scaleX = 0.16344056315099267;
				button_music.scaleY = 0.16344056315099267;
			})
			//comment.visible = false;

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

			if(localStorage.settingsOptionFX=="false"){
				fx_tick.visible = true;
			}
			if(localStorage.settingsOptionMusic=="false"){
				music_tick.visible = true;
			}

			//Block Character Movement on Pause
			this.input.keyboard.enabled = false;
	}
	displayHealthBar(){
		// health_bar_decoration
		const health_bar_decoration = this.add.image(691, 44, "health_bar_decoration");
		health_bar_decoration.scaleX = 2.876226221353047;
		health_bar_decoration.scaleY = 2.876226221353047;

		// life_Bar_Animated_1
		this.healthBars = this.add.image(713, 44, "Life-Bar-"+this.healthBarNumber);
		this.healthBars.scaleX = 1.801947436688974;
		this.healthBars.scaleY = 1.801947436688974;
	}
	updateHealthBar(){
		this.healthBarNumber--;
		this.healthBars.destroy();
		if(this.healthBarNumber<0){
			this.healthBarNumber = 0;
		}
		this.healthBars = this.add.image(713, 44, "Life-Bar-"+this.healthBarNumber);
		this.healthBars.scaleX = 1.801947436688974;
		this.healthBars.scaleY = 1.801947436688974;
	}

}