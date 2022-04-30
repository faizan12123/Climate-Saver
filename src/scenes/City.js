class City extends Phaser.Scene {

	constructor() {
		super("City");
	}

	/** @returns {void} */
	editorCreate() {
		this.displayMap();
		this.displayTrash();
		this.displayPlayer();
		this.setOverlapPrompt();
		this.displayHealthBar(); // there's working updateHealthBar() function
		this.displayScoreBoard();
		this.overlapBool = false;
		
		this.rPress = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
		this.tPress = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);

		//for WASD keys
		this.keys = this.input.keyboard.addKeys({
			a:  Phaser.Input.Keyboard.KeyCodes.A,
			s:  Phaser.Input.Keyboard.KeyCodes.S,
			d:  Phaser.Input.Keyboard.KeyCodes.D,
			w:  Phaser.Input.Keyboard.KeyCodes.W
		});
		
		this.cursors = this.input.keyboard.createCursorKeys();
		
    /*
		//temp button-quiz
		const button_quiz = this.add.image(656,50,"button-quiz");
		button_quiz.setInteractive();
		button_quiz.scaleX = 0.36;
    	button_quiz.scaleY = 0.36;
		button_quiz.on("pointerdown", () =>{
			this.scene.start("Quiz");
		});
    */

		// cGB02_yellow_S_btn
		const cGB02_yellow_S_btn = this.add.image(692, 520, "CGB02-yellow_S_btn");
		cGB02_yellow_S_btn.scaleX = 0.7844121289516808;
		cGB02_yellow_S_btn.scaleY = 0.7403687558671932;

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
		this.player_score = 0;
		const score = this.add.image(400, 35, "Score");
		this.scoreText = this.add.text(420, 20, this.player_score, {
		fontFamily: "Acme",
		fontSize: "24px",
		color: "black",
		fontStyle: "Bold",
		});
		//score_count.setText(player_score+1);
		score.scaleX = 0.5;
		score.scaleY = 0.5;

    //tutorial
    //tutorial button
    let tutorial_active = false;
    const tutorial = this.add.image(120, 44, "button-radio");
    const tutorial_symbol = this.add.text(115, 27, "?", {
      fontFamily: "Acme",
      fontSize: "28px",
      color: "white",
      fontStyle: "bold",
    });
    tutorial.scaleX = 0.7;
    tutorial.scaleY = 0.7;
    tutorial.setInteractive();
    tutorial.on("pointerdown", () => {
      if (!tutorial_active) {
        tutorial_active = true;
        tutorial_desc.visible = true;
        tutorial_label.visible = true;
        details.visible = true;
      } else {
        tutorial_active = false;
        tutorial_desc.visible = false;
        tutorial_label.visible = false;
        details.visible = false;
      }
      console.log("pressed");
    });
    tutorial.on("pointerover", () => {
      tutorial.scale += 0.06;
    });
    tutorial.on("pointerout", () => {
      tutorial.scaleX = 0.7;
      tutorial.scaleY = 0.7;
    });

    const tutorial_desc = this.add.image(394, 231, "base");
    const tutorial_label = this.add.text(305, 51, "How To Play", {
      fontFamily: "Acme",
      fontSize: "36px",
      color: "white",
      fontStyle: "Bold",
    });
    const details = this.add.text(
      303,
      145,
      "Use directional keys to move \naround and follow the prompt \nto recycle/trash the items \nyou encounter.  \n\nChoose an incorrect action and \nyou lose one of your eight lives. \n\nThe game ends after you lose \nall lives or 60 seconds elapsed. \n\n\t\t\t           Happy Recycling!",
      {
        fontFamily: "Acme",
        fontSize: "16px",
        color: "white",
        fontStyle: "Bold",
      }
    );
    details.visible = false;
    tutorial_label.visible = false;
    tutorial_desc.scaleX = 0.26626053769694924;
    tutorial_desc.scaleY = 0.27093994892320916;
    tutorial_desc.visible = false;

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
				this.displayPauseMenu()
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

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.healthBarNumber = 8; // start with 9 bars
		this.gameOverStatus = false;
		this.editorCreate();
		this.physics.add.overlap(this.player, this.trashs, this.displayOverlapPrompt, null, this)
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
		this.worldLayer.setCollisionByProperty({ collides: true });
				//when health reaches 0
		if (this.healthBarNumber == 0){
			this.scoreBoard.visible= true;
			this.menu_check = true;
			this.go_to_quiz_button.visible = true;
			this.end_score.setText(this.player_score);
			this.end_score.visible = true;	
			this.input.keyboard.enabled = false;	
			this.gameOverStatus = true;

			this.trashs.children.entries.forEach((item) => {
				item.visible = false;
			})
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
			this.scoreBoard.visible = true;
			this.menu_check = true;
			this.go_to_quiz_button.visible = true;
			this.end_score.setText(this.player_score);
			this.end_score.visible = true;	
			this.input.keyboard.enabled = false;
			this.gameOverStatus = true;

			this.trashs.children.entries.forEach((item) => {
				item.visible = false;
			})
		}

		if(this.scoreBoard.visible == true)
		{
			this.menu_check = true;
		}

		if ((localStorage.getItem("controlsOptionArrows") == "true" && this.cursors.left.isDown) || (localStorage.getItem("controlsOptionArrows")  == "false" && this.keys.a.isDown))
		{
			this.d_Pad_Left.visible = true;
		} 
		else if ((localStorage.getItem("controlsOptionArrows") == "true" && this.cursors.right.isDown) || (localStorage.getItem("controlsOptionArrows")  == "false" && this.keys.d.isDown))
		{
			this.d_Pad_Right.visible = true;
		}
		else if ((localStorage.getItem("controlsOptionArrows") == "true" &&this.cursors.up.isDown) || (localStorage.getItem("controlsOptionArrows")  == "false" && this.keys.w.isDown))
		{
			this.d_Pad_Up.visible = true;
		} 
		else if ((localStorage.getItem("controlsOptionArrows") == "true" &&this.cursors.down.isDown) || (localStorage.getItem("controlsOptionArrows")  == "false" &&  this.keys.s.isDown))
		{
			this.d_Pad_Down.visible = true;
		}
		else{

		this.d_Pad_Left.visible = false;
		this.d_Pad_Right.visible = false;
		this.d_Pad_Up.visible = false;
		this.d_Pad_Down.visible = false;

		}

		if (!this.overlapBool) {
		this.hideOverlapPrompt();
		}
		if (this.overlapBool) {
			if (Phaser.Input.Keyboard.JustDown(this.rPress)) {
				console.log("r pressed")

				if(this.selectedTrash.name=="recyclable"){
					console.log("it is recyclable")
					this.displayResponse(true);
					this.player_score++
					console.log("score: " + this.player_score)
					this.scoreText.setText(' ' + this.player_score);
				}
				else{
					this.displayResponse(false);
					this.healthBarNumber--
					this.updateHealthBar();
				}
        		this.selectedTrash.destroy();
				this.hideOverlapPrompt();
			} else if(Phaser.Input.Keyboard.JustDown(this.tPress)){
				console.log("t pressed")

				if(this.selectedTrash.name=="trash"){
					console.log("it is trash")
					this.displayResponse(true);
					this.player_score++
					console.log("score: " + this.player_score)
					this.scoreText.setText(' ' + this.player_score);
				}
				else{
					this.displayResponse(false);
					this.healthBarNumber--
					this.updateHealthBar();
				}
        		this.selectedTrash.destroy();
				this.hideOverlapPrompt();
			}
   		}
	}

	displayMap(){
		const cityV2 = this.add.tilemap("cityV2");
		cityV2.addTilesetImage("City", "city-tilesV1");

		const ground_1 = cityV2.createLayer("Ground", ["City"], 4, -97);
		ground_1.scaleX = 1.25;
		ground_1.scaleY = 1.25;

		// world_Layer
		this.worldLayer = cityV2.createLayer("World Layer", ["City"], 4, -97);
		this.worldLayer.scaleX = 1.25;
		this.worldLayer.scaleY = 1.25;

		// lights
		const lights = cityV2.createLayer("Lights", ["City"], 4, -97);
		lights.scaleX = 1.25;
		lights.scaleY = 1.25;

		// windows_and_Doors
		const windows_and_Doors = cityV2.createLayer("Windows and Doors", ["City"], 4, -97);
		windows_and_Doors.scaleX = 1.25;
		windows_and_Doors.scaleY = 1.25;

		this.cityV2 = cityV2;

		//background music
		this.backgroundMusic = this.sound.add("city-bgmusic" , {volume: parseFloat(localStorage.musicVolume)});
		this.backgroundMusic.loop = true;
		if(localStorage.settingsOptionMusic == "true"){
			this.backgroundMusic.play();
		}

  }
  setOverlapPrompt(){
    this.overlapPromptImg = this.add.image(128, 499, "overlapPrompt");
    this.overlapPromptImg.scaleX = 0.2;
    this.overlapPromptImg.scaleY = 0.2;
    this.overlapPromptImg.visible = false;

	//responses

		// check_mark
		this.ResponseCheck = this.add.image(409, 307, "check-mark")
		this.ResponseCheck.visible = false;

		// x_mark
        this.ResponseX =  this.add.image(402, 301, "x-mark");
		this.ResponseX.visible = false
  }
 
  displayResponse(correctBool){
	var buttonRight = this.sound.add("sound-right");
	var buttonWrong = this.sound.add("sound-wrong");
	
	this.ResponseCheck.visible = false;
	this.ResponseX.visible = false;
	if(correctBool){
		if(localStorage.settingsOptionFX == "true"){
			buttonRight.play();
			console.log("play sound")
		}
		else{
			console.log("no sound")
		}

		this.ResponseCheck.visible = true;
		setTimeout(() => {
			this.ResponseCheck.visible = false;
		}, 3000);

	}
	else{
		if(localStorage.settingsOptionFX == "true"){
			buttonWrong.play();
		}
		this.ResponseX.visible = true;
		setTimeout(() => {
			this.ResponseX.visible = false;
		}, 3000);
	}
}
  //scoreboard function
  displayScoreBoard() {
    this.scoreBoard = this.add.image(400, 300, "scoreboard");
    this.go_to_quiz_button = this.add.image(
      410,
      460,
      "continue-to-quiz-button"
    );
    this.go_to_quiz_button.scaleX = 0.08;
    this.go_to_quiz_button.scaleY = 0.08;
    this.go_to_quiz_button.visible = false;

	this.go_to_quiz_button.setInteractive()
			.on("pointerdown", () => {
				if(localStorage.settingsOptionFX == "true"){
						this.buttonClicked.play();
				}
				this.input.keyboard.enabled = true;
				this.scene.start("Quiz");

			})
			.on("pointerover", () => {
      			this.go_to_quiz_button.scale += 0.01;
    		})
			.on("pointerout", () => {
				this.go_to_quiz_button.scaleX = 0.08;
				this.go_to_quiz_button.scaleY = 0.08;
			})

    this.scoreBoard.scaleX = 0.3;
    this.scoreBoard.scaleY = 0.3;
    this.scoreBoard.visible = false;
   
	this.end_score = this.add.text(420, 315, this.player_score, { fontFamily: "Georgia", fontSize: "24px", color: "yellow" });
	this.end_score.setText(this.player_score+1);
	this.end_score.visible = false;
  }

  displayOverlapPrompt(player, trash) {
    this.overlapPromptImg.visible = true;
    this.overlapBool = true;

    this.selectedTrash = trash;
    setTimeout(() => {
      this.overlapBool = false;
    }, 5000);
  }
  hideOverlapPrompt() {
    this.overlapPromptImg.visible = false;
  }

	displayPlayer(){
		// player
		const player = this.add.sprite(489, 348, 'Boy  sheet wlaking and Idle');
		new PhysicsV2(player);
		new MovementV2(player);
		this.player = player;
		//animations + movements
		
		this.player.play("down-idle");
		this.physics.add.collider(this.player, this.worldLayer)
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
				this.backgroundMusic.stop();
				this.input.keyboard.enabled = true;
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
					localStorage.settingsOptionMusic ="true";
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
  displayTrash() {
    // trashs
    this.trashs = this.physics.add.group();
    this.trashs.enableBody = true;

    if(!this.gameOverStatus){
		setTimeout(() => {
			if(!this.gameOverStatus){
				const apple_charger = this.trashs.create(125, 433, "apple-charger");
				apple_charger.scaleX = 0.15;
				apple_charger.scaleY = 0.15;
				apple_charger.name = "recyclable"
			}
		}, 500);
	}

    if(!this.gameOverStatus){
		setTimeout(() => {
			if(!this.gameOverStatus){
				const battery = this.trashs.create(110 + 300, 253, "battery");
				battery.scaleX = 0.5;
				battery.scaleY = 0.5;
				battery.name = "recyclable"
			}
    	}, 4500);
	}
	if(!this.gameOverStatus){
		setTimeout(() => {
			if(!this.gameOverStatus){
				const books = this.trashs.create(359 + 300, 433, "books");
				books.scaleX = 0.15;
				books.scaleY = 0.15;
				books.name = "recyclable"
			}
		}, 8500);
	}
    
    if(!this.gameOverStatus){
		setTimeout(() => {
			if(!this.gameOverStatus){
				const glasses = this.trashs.create(411 + 300, 366, "glasses");
				glasses.scaleX = 0.20;
				glasses.scaleY = 0.20;
				glasses.name = "recyclable"
			}
		}, 12500);
	}
    
  

	if(!this.gameOverStatus){
		setTimeout(() => {
			if(!this.gameOverStatus){
				const ipod = this.trashs.create(179 + 200, 80, "ipod");
				ipod.scaleX = 0.205;
				ipod.scaleY = 0.205;
				ipod.name = "recyclable"
			}
		}, 16500);
	}

    if(!this.gameOverStatus){
		setTimeout(() => {
			if(!this.gameOverStatus){
				const paint = this.trashs.create(110 , 353, "paint");
				paint.scaleX = 0.15;
				paint.scaleY = 0.15;
				paint.name = "recyclable"
			}
		}, 20500);
	}
    
	if(!this.gameOverStatus){
		setTimeout(() => {
			if(!this.gameOverStatus){
				const plastic_bag = this.trashs.create(300, 400, "plastic-bag");
				plastic_bag.scaleX = 0.15;
				plastic_bag.scaleY = 0.15;
				plastic_bag.name = "recyclable"
			}

    	}, 24500);
	}    
    
	if(!this.gameOverStatus){
		setTimeout(() => {
			if(!this.gameOverStatus){
				const plastic_utensiils = this.trashs.create(520, 426, "plastic-utensiils");
				plastic_utensiils.scaleX = 0.15;
				plastic_utensiils.scaleY = 0.15;
				plastic_utensiils.name = "trash"
			}
		}, 28500);
	}
    if(!this.gameOverStatus){
		setTimeout(() => {
			if(!this.gameOverStatus){
				const television = this.trashs.create(179 + 300, 550, "television");
				television.scaleX = 0.35;
				television.scaleY = 0.35;
				television.name="recyclable";
			}
		}, 32500);
	}
    /*
    const orangeJuice = this.trashs.create(300, 187, "orangeJuice");
    orangeJuice.scaleX = 0.17;
    orangeJuice.scaleY = 0.17;
    */
	if(!this.gameOverStatus){
		setTimeout(() => {
			if(!this.gameOverStatus){
				const togo_container = this.trashs.create( 50, 550, "togo-container");
				togo_container.scaleX = 0.15;
				togo_container.scaleY = 0.15;
				togo_container.name="trash"
			}
		}, 36500);
	}
    
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
