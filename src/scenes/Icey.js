
// You can write more code here

/* START OF COMPILED CODE */

class Icey extends Phaser.Scene {

	constructor() {
		super("Icey")
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// loading_graphic
		this.add.image(377, 239, "loading-graphic");

		
		var backgroundMusic = this.sound.add("tundra-bgmusic" , {volume: parseFloat(localStorage.musicVolume)});
		backgroundMusic.loop = true;
		if(localStorage.settingsOptionMusic == "true"){
			backgroundMusic.play();
		}


		// cGB02_yellow_M_btn
		const cGB02_yellow_M_btn = this.add.image(400, 55, "CGB02-yellow_M_btn");
		cGB02_yellow_M_btn.scaleX = 0.5662629604736447;
		cGB02_yellow_M_btn.scaleY = 0.5656239889282708;

		// cGB02_yellow_L_btn
		const cGB02_yellow_L_btn = this.add.image(399, 35, "CGB02-yellow_L_btn");
		cGB02_yellow_L_btn.scaleX = 0.4516785708514984;
		cGB02_yellow_L_btn.scaleY = 0.30253966546224487;

		// health_bar_decoration
		const health_bar_decoration = this.add.image(691, 44, "health_bar_decoration");
		health_bar_decoration.scaleX = 2.876226221353047;
		health_bar_decoration.scaleY = 2.876226221353047;

			// life_Bar_Animated_9
		this.life_Bar_Animated_9 = this.add.image(713, 44, "Life Bar Animated 9");
		this.life_Bar_Animated_9.scaleX = 1.801947436688974;
		this.life_Bar_Animated_9.scaleY = 1.801947436688974;

		// life_Bar_Animated_8
		this.life_Bar_Animated_8 = this.add.image(713, 44, "Life Bar Animated 8");
		this.life_Bar_Animated_8.scaleX = 1.801947436688974;
		this.life_Bar_Animated_8.scaleY = 1.801947436688974;

		// life_Bar_Animated_7
		this.life_Bar_Animated_7 = this.add.image(713, 44, "Life Bar Animated 7");
		this.life_Bar_Animated_7.scaleX = 1.801947436688974;
		this.life_Bar_Animated_7.scaleY = 1.801947436688974;

		// life_Bar_Animated_6
		this.life_Bar_Animated_6 = this.add.image(713, 44, "Life Bar Animated 6");
		this.life_Bar_Animated_6.scaleX = 1.801947436688974;
		this.life_Bar_Animated_6.scaleY = 1.801947436688974;

		// life_Bar_Animated_5
		this.life_Bar_Animated_5 = this.add.image(713, 44, "Life Bar Animated 5");
		this.life_Bar_Animated_5.scaleX = 1.801947436688974;
		this.life_Bar_Animated_5.scaleY = 1.801947436688974;

		// life_Bar_Animated_4
		this.life_Bar_Animated_4 = this.add.image(713, 44, "Life Bar Animated 4");
		this.life_Bar_Animated_4.scaleX = 1.801947436688974;
		this.life_Bar_Animated_4.scaleY = 1.801947436688974;

		// life_Bar_Animated_3
		this.life_Bar_Animated_3 = this.add.image(713, 44, "Life Bar Animated 3");
		this.life_Bar_Animated_3.scaleX = 1.801947436688974;
		this.life_Bar_Animated_3.scaleY = 1.801947436688974;

		// life_Bar_Animated_2
		this.life_Bar_Animated_2 = this.add.image(713, 44, "Life Bar Animated 2");
		this.life_Bar_Animated_2.scaleX = 1.801947436688974;
		this.life_Bar_Animated_2.scaleY = 1.801947436688974;

		// life_Bar_Animated_1
		this.life_Bar_Animated_1 = this.add.image(713, 44, "Life Bar Animated 1");
		this.life_Bar_Animated_1.scaleX = 1.801947436688974;
		this.life_Bar_Animated_1.scaleY = 1.801947436688974;

		// cGB02_yellow_S_btn
		const cGB02_yellow_S_btn = this.add.image(692, 520, "CGB02-yellow_S_btn");
		cGB02_yellow_S_btn.scaleX = 0.7844121289516808;
		cGB02_yellow_S_btn.scaleY = 0.7403687558671932;

		// directionpad
		this.add.image(692, 520, "D-Pad");

		// score
		const score = this.add.image(400, 34, "Score");
		score.scaleX = 0.5332474691460656;
		score.scaleY = 0.4992280777321614;

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
			music_tick.visible = false;
			fx_tick.visible = false;
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
			buttonClicked.play();
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
            buttonClicked.play();
			this.lifecounter+=1;
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

		//life counter
		this.lifecounter = 0;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write more your code here
	create() {

		this.editorCreate();
		this.cursors = this.input.keyboard.createCursorKeys();
		console.log(this.cursors);

		//creating score/score text updates
		var score = 0;
		var scoreText;
		scoreText = this.add.text(420, 23, '0', { fontSize: '25px', fill: '#000' });
	}

	update() {


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

		if(this.lifecounter == 1)
		{
			this.life_Bar_Animated_1.visible = false;
		}
		if(this.lifecounter == 2)
		{

			this.life_Bar_Animated_2.visible = false;
			console.log(this.lifecounter);
		}
		if(this.lifecounter == 3)
		{

			this.life_Bar_Animated_3.visible = false;
			console.log(this.lifecounter);
		}
		if(this.lifecounter == 4)
		{
			this.life_Bar_Animated_4.visible = false;
			console.log(this.lifecounter);
		}
		if(this.lifecounter == 5)
		{
			this.life_Bar_Animated_5.visible = false;
			console.log(this.lifecounter);
		}
		if(this.lifecounter == 6)
		{
			this.life_Bar_Animated_6.visible = false;
			console.log(this.lifecounter);
		}
		if(this.lifecounter == 7)
		{
			this.life_Bar_Animated_7.visible = false;
			console.log(this.lifecounter);
		}
		if(this.lifecounter == 8)
		{
			this.life_Bar_Animated_8.visible = false;
			console.log(this.lifecounter);
		}

		function collectStar (player, star)
		{
   			 star.disableBody(true, true);

   			 score += 10;
    		scoreText.setText(' ' + score);
		}


	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
