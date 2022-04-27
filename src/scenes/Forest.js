class Forest extends Phaser.Scene {

	constructor() {
		super("Forest");
	}

	/** @returns {void} */
	editorCreate() {
		this.displayMap();
		this.displayTrash();
		this.displayPlayer();
		this.displayHealthBar(); // there's working updateHealthBar() function
		//this.displayScoreBoard();
		//this.overlapBool = false;
		
		this.cursors = this.input.keyboard.createCursorKeys()

		// cGB02_yellow_S_btn
		const cGB02_yellow_S_btn = this.add.image(692, 520, "CGB02-yellow_S_btn");
		cGB02_yellow_S_btn.scaleX = 0.7844121289516808;
		cGB02_yellow_S_btn.scaleY = 0.7403687558671932;

		this.rPress = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
		this.tPress = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
		this.cursors = this.input.keyboard.createCursorKeys();

		// directionpad
		this.add.image(692, 520, "D-Pad");

		// cGB02_yellow_M_btn
		const cGB02_yellow_M_btn = this.add.image(400, 55, "CGB02-yellow_M_btn");
		cGB02_yellow_M_btn.scaleX = 0.5662629604736447;
		cGB02_yellow_M_btn.scaleY = 0.5656239889282708;

		// cGB02_yellow_L_btn
		const cGB02_yellow_L_btn = this.add.image(399, 35, "CGB02-yellow_L_btn");
		cGB02_yellow_L_btn.scaleX = 0.4516785708514984;
		cGB02_yellow_L_btn.scaleY = 0.30253966546224487;

		// d_Pad_Down
		this.d_Pad_Down = this.add.image(692, 520, "D-Pad Down");
		this.d_Pad_Down.visible = false;

		// d_Pad_Left
		this.d_Pad_Left = this.add.image(692, 520, "D-Pad Left");
		this.d_Pad_Left.visible = false;

		// d_Pad_Right
		this.d_Pad_Right = this.add.image(692, 520, "D-Pad Right");
		this.d_Pad_Right.visible = false;

		// d_Pad_Up
		this.d_Pad_Up = this.add.image(692, 520, "D-Pad Up");
		this.d_Pad_Up.visible = false;

		//Pause Menu Checker
		this.menu_check = false;


		// score
		var player_score = 0;
		const score = this.add.image(400, 35, "Score");
		const score_count = this.add.text(420, 20, player_score, { fontFamily: "Georgia", fontSize: "24px", color: "black" });
		score_count.setText(player_score+1);

		score.scaleX = 0.5;
		score.scaleY = 0.5;

		// pause_menu
		const pause_menu = this.add.image(394, 281, "pause-menuV2");
		pause_menu.scaleX = 0.26626053769694924;
		pause_menu.scaleY = 0.27093994892320916;
		pause_menu.visible = false;

		//Button Sound
		this.buttonClicked = this.sound.add("buttonOnClick");

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
		this.player.play("down-idle");
		//creating timer
		this.timeInSeconds = 30;
		this.shouldSubtractSecond = 0;
		this.timeText = this.add.text(380, 55, '0:00', { font: '20px Georgia', fill: '#000' });

		//function for when timer's number is less than 10 and adds a zero before number
		this.addZeros = function(num){
			if(num < 10){
				num = "0" + num;
			}
			return num;
		};
	}
	update(){

			if (this.healthBarNumber == 0){
			/*this.scoreBoard.visible= true;
			this.menu_check = true;
			this.go_to_quiz_button.visible = true;
			this.end_score.setText(this.player_score);
			this.end_score.visible = true;	*/		
			
		}
			if(this.menu_check == false)
		{
			//start of timer code
			this.shouldSubtractSecond++;
			if(this.shouldSubtractSecond == 120)
			{
				this.timeInSeconds--;
				this.shouldSubtractSecond = 0;
			}
		}
		
		//timer calculator
		var minutes = Math.floor(this.timeInSeconds / 60);
		var seconds = this.timeInSeconds - (minutes * 60);
		var timeString = this.addZeros(minutes) + ":" + this.addZeros(seconds);
		this.timeText.text = timeString;

		//when timer reaches 0
		if (this.timeInSeconds == 0) {
			/*this.scoreBoard.visible = true;
			this.menu_check = true;
			this.go_to_quiz_button.visible = true;
			this.end_score.setText(this.player_score);
			this.end_score.visible = true;	*/
		}

		/*if(this.scoreBoard.visible == true)
		{
			this.menu_check = true;
		}*/

		if (this.cursors.left.isDown)
		{
			this.d_Pad_Left.visible = true;
		} 
		else if (this.cursors.right.isDown) 
		{
			this.d_Pad_Right.visible = true;
		}
		else if (this.cursors.up.isDown) 
		{
			this.d_Pad_Up.visible = true;
		} 
		else if (this.cursors.down.isDown) 
		{
			this.d_Pad_Down.visible = true;
		}
		else{

		this.d_Pad_Left.visible = false;
		this.d_Pad_Right.visible = false;
		this.d_Pad_Up.visible = false;
		this.d_Pad_Down.visible = false;

		}

	}

	displayMap(){
		// forestMap
		const forestMap = this.add.tilemap("forestMap");
		forestMap.addTilesetImage("forestTitle", "forestTile");

		// groundLayer_1
		const groundLayer_1 = forestMap.createLayer("groundLayer", ["forestTitle"], 0, -201);
		groundLayer_1.scaleX = 1.3;
		groundLayer_1.scaleY = 1.3;

		// treeLayer
		const treeLayer = forestMap.createLayer("treeLayer", ["forestTitle"], 0, -201);
		treeLayer.scaleX = 1.3;
		treeLayer.scaleY = 1.3;

		// buildingLayer
		const buildingLayer = forestMap.createLayer("buildingLayer", ["forestTitle"], 0, -201);
		buildingLayer.scaleX = 1.3;
		buildingLayer.scaleY = 1.3;

		//load music
		this.backgroundMusic = this.sound.add("forest-bgmusic" , {volume: parseFloat(localStorage.musicVolume)});
		this.backgroundMusic.loop = true;
		if(localStorage.settingsOptionMusic == "true"){
			this.backgroundMusic.play();
		}

		this.forestMap = forestMap;
		this.overlapPromptImg = this.add.image(128, 499, "overlapPrompt");
		this.overlapPromptImg.scaleX = 0.2;
		this.overlapPromptImg.scaleY = 0.2;
		this.overlapPromptImg.visible = false;
	}
	displayPlayer(){
		// player
		const player = this.add.sprite(489, 348, "1_1");
		new PhysicsV2(player);
		new MovementV2(player);
		this.player = player;

		//animations + movements
		this.player.play("down-idle");
	}
	displayTrash(){
		 // trashs
		 this.trashs = this.physics.add.group();
		 this.trashs.enableBody = true;
		 
		// camping_light
		const camping_light = this.trashs.create(54, 276, "camping-light");
		camping_light.scaleX = 0.2;
		camping_light.scaleY = 0.2;
		camping_light.visible = false;
		setTimeout(() => {
			camping_light.visible = true;
		}, 1000);

		// chips_bag
		const chips_bag = this.trashs.create(426, 370, "chips-bag");
		chips_bag.scaleX = 0.3;
		chips_bag.scaleY = 0.3;
		chips_bag.visible = false
		setTimeout(() => {
			chips_bag.visible = true;
		}, 7000);

		// deoderant
		const deoderant = this.trashs.create(712, 499, "deoderant");
		deoderant.scaleX = 0.3;
		deoderant.scaleY = 0.3;
		deoderant.visible = false;
		setTimeout(() => {
			deoderant.visible = true;
		}, 13000);

		// juicebox
		const juicebox = this.trashs.create(139, 507, "juicebox");
		juicebox.scaleX = 0.17;
		juicebox.scaleY = 0.17;
		juicebox.visible = false;
		setTimeout(() => {
			juicebox.visible = true;
		}, 20000);

		// plastic_straws
		const plastic_straws = this.trashs.create(707, 318, "plastic-straws");
		plastic_straws.scaleX = 0.2;
		plastic_straws.scaleY = 0.2;
		plastic_straws.visible = false;
		setTimeout(() => {
			plastic_straws.visible = true;
		}, 25000);

		// smartphone
		const smartphone = this.trashs.create(459, 215, "smartphone");
		smartphone.scaleX = 0.15;
		smartphone.scaleY = 0.15;
		smartphone.visible = false;
		setTimeout(() => {
			smartphone.visible = true;
		}, 32000);

		// soda_can
		const soda_can = this.trashs.create(752, 179, "soda-can");
		soda_can.scaleX = 1;
		soda_can.scaleY = 1;
		soda_can.visible = false;
		setTimeout(() => {
			soda_can.visible = true;
		}, 37000);

		// rope
		const rope = this.trashs.create(201, 149, "rope");
		rope.scaleX = 0.25;
		rope.scaleY = 0.25;
		rope.visible = false;
		setTimeout(() => {
			rope.visible = true;
		}, 45000);

		// skateboard
		const skateboard = this.trashs.create(550, 116, "skateboard");
		skateboard.scaleX = 0.15;
		skateboard.scaleY = 0.15;
		skateboard.visible = false
		setTimeout(() => {
			skateboard.visible = true;
		}, 51000);

		// soda_bottle
		const soda_bottle = this.trashs.create(261, 391, "soda-bottle");
		soda_bottle.scaleX = 0.1;
		soda_bottle.scaleY = 0.1;
		soda_bottle.visible = false;
		setTimeout(() => {
			soda_bottle.visible = true;
		}, 57000);

		// soda_can_1
		const soda_can_1 = this.trashs.create(592, 445, "soda-can_1");
		soda_can_1.scaleX = 0.25;
		soda_can_1.scaleY = 0.25;
		soda_can_1.visible = false;
		setTimeout(() => {
			soda_can_1.visible = true;
		}, 62000);

		// ziploc_bag
		const ziploc_bag = this.trashs.create(458, 513, "ziploc-bag");
		ziploc_bag.scaleX = 0.2;
		ziploc_bag.scaleY = 0.2;
		ziploc_bag.visible = false;
		setTimeout(() => {
			ziploc_bag.visible = true;
		}, 68000);
	}
	displayPauseMenu(){
		// pause_menu
		const pause_menu = this.add.image(394, 281, "pause-menuV2");
		pause_menu.scaleX = 0.26626053769694924;
		pause_menu.scaleY = 0.27093994892320916;
		//comment pause_menu.visible = false;
		this.menu_check = true;

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
				this.menu_check = false;
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


		this.healthBars = this.add.image(713, 44, "Life-Bar-"+this.healthBarNumber);
		this.healthBars.scaleX = 1.801947436688974;
		this.healthBars.scaleY = 1.801947436688974;
	}
	updateHealthBar(){
		this.healthBars.destroy();
		if(this.healthBarNumber<0){
			this.healthBarNumber = 0;
		}
		this.healthBars = this.add.image(713, 44, "Life-Bar-"+this.healthBarNumber);
		this.healthBars.scaleX = 1.801947436688974;
		this.healthBars.scaleY = 1.801947436688974;
		
	}
}

