
// You can write more code here

/* START OF COMPILED CODE */

class City extends Phaser.Scene {

	constructor() {
		super("City");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		function formatTime(seconds){
    		// Minutes
    		var minutes = Math.floor(seconds/60);
    		// Seconds
    		var partInSeconds = seconds%60;
    		// Adds left zeros to seconds
    		partInSeconds = partInSeconds.toString().padStart(2,'0');
    		// Returns formated time
    		return `${partInSeconds}`;
		}

		var timer = 60;
		var score = 0;
		var timedEvent;

		this.initialTime = 60;
		// cityV2
		const cityV2 = this.add.tilemap("cityV2");
		cityV2.addTilesetImage("City", "city-tilesV1");

		function onEvent ()
		{
    		this.initialTime -= 1; // One second
    		text.setText('Countdown: ' + formatTime(this.initialTime));
		}	
		// ground_1
		const ground_1 = cityV2.createLayer("Ground", ["City"], 4, -97);
		ground_1.scaleX = 1.25;
		ground_1.scaleY = 1.25;

		// world_Layer
		const world_Layer = cityV2.createLayer("World Layer", ["City"], 4, -97);
		world_Layer.scaleX = 1.25;
		world_Layer.scaleY = 1.25;

		// lights
		const lights = cityV2.createLayer("Lights", ["City"], 4, -97);
		lights.scaleX = 1.25;
		lights.scaleY = 1.25;

		// windows_and_Doors
		const windows_and_Doors = cityV2.createLayer("Windows and Doors", ["City"], 4, -97);
		windows_and_Doors.scaleX = 1.25;
		windows_and_Doors.scaleY = 1.25;

		this.cityV2 = cityV2;
		
		//temp button-quiz
		const button_quiz = this.add.image(656,50,"button-quiz");
		button_quiz.setInteractive();
		button_quiz.scaleX = 0.36;
    	button_quiz.scaleY = 0.36;
		button_quiz.on("pointerdown", () =>{
			backgroundMusic.stop();
			this.scene.start("Quiz");
		});

		const main_menu_button_start = this.add.image(
      	656,
      	130,
      	"main-menu-button-start"
    	);
		main_menu_button_start.setInteractive();
		main_menu_button_start.scaleX = 0.36;
    	main_menu_button_start.scaleY = 0.36;
		main_menu_button_start.on("pointerdown", () => {
			timer-=1;
			console.log("start pressed");
    		timeText.setText('Time Remaining: ' + timer);    });

			var timeText = this.add.text(16, 16, 'Time Remaining: 60', { fontSize: '32px', fill: '#fff' });
			var scoreText = this.add.text(16, 40, 'Score: 0', { fontSize: '32px', fill: '#fff' });
		    var text = this.add.text(62, 62, 'Countdown: ' + formatTime(this.initialTime));
			this.initialTime -= 1; // One second
    		text.setText('Countdown: ' + formatTime(this.initialTime));
			timedEvent = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });

		var backgroundMusic = this.sound.add("city-bgmusic" , {volume: parseFloat(localStorage.musicVolume)});
		backgroundMusic.loop = true;
		if(localStorage.settingsOptionMusic == "true"){
			backgroundMusic.play();
		}

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here