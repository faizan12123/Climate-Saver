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
		this.displayScoreBoard();

		// directionpad
		this.add.image(692, 520, "D-Pad");

		// score
		var player_score = 0;
		const score = this.add.image(384, 44, "Score");
		const score_count = this.add.text(420, 30, player_score, { fontFamily: "Georgia", fontSize: "24px", color: "yellow" });
		score_count.setText(player_score+1);

		score.scaleX = 0.62297233942359;
		score.scaleY = 0.62297233942359;

		

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
	}
	update(){
		this.physics.add.overlap(this.player, this.trashs, ()=> {console.log("overlap"), null, this})
		this.waterLayer.setCollisionByProperty({ collides: true });
		this.objectsLayer.setCollisionByProperty({ collides: true });
		if (this.healthBarNumber == 0){
			this.scoreBoard.visible = true
		}
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
	}

	//scoreboard function
	displayScoreBoard(){
		
		const scoreBoard = this.add.image(400, 300, "scoreboard")
		
		scoreBoard.visible= false;
		scoreBoard.scaleX = 0.3;
		scoreBoard.scaleY = 0.3;
		const end_score = this.add.text(400, 300, this.player_score, { fontFamily: "Georgia", fontSize: "24px", color: "yellow" });
		end_score.setText(this.player_score+1);
	}


	displayPlayer(){
		// player
		const player = this.add.sprite(489, 348, 'Boy  sheet wlaking and Idle');
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