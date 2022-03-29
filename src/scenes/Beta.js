
// You can write more code here

/* START OF COMPILED CODE */

class Beta extends Phaser.Scene {

	constructor() {
		super("Beta");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// beachV1
		const beachV1 = this.add.tilemap("beachV1");
		beachV1.addTilesetImage("beach", "beach-tilesV1");

		// player
		const player = this.add.sprite(490, 348, "1_1");

		// water_1
		beachV1.createLayer("Water", ["beach"], 1, 0);

		// dock
		beachV1.createLayer("Dock", ["beach"], 11, 0);

		// sand
		beachV1.createLayer("Sand", ["beach"], 14, -1);

		// objects
		beachV1.createLayer("Objects", ["beach"], 3, 2);

		this.player = player;
		this.beachV1 = beachV1;

		this.keys = this.input.keyboard.addKeys({
			a:  Phaser.Input.Keyboard.KeyCodes.A,
			s:  Phaser.Input.Keyboard.KeyCodes.S,
			d:  Phaser.Input.Keyboard.KeyCodes.D,
			w:  Phaser.Input.Keyboard.KeyCodes.W
		});
		this.cursors = this.input.keyboard.createCursorKeys();

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	player;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.player.play("down-idle");
	}
	update(){
		if (this.cursors.left.isDown)
			console.log("left by arrow");

		else if(this.cursors.right.isDown){
			console.log("right by arrow");
		}
		else if(this.cursors.up.isDown){
			console.log("up by arrow");
		}
		else if(this.cursors.down.isDown){
			console.log("down by s");
		}
		else if(this.keys.d.isDown){
			console.log("right by d");
		}
		else if(this.keys.w.isDown){
			console.log("up by w");
		}
		else if(this.keys.s.isDown){
			console.log("down by s");
		}
		else if(this.keys.a.isDown){
			console.log("left by a");
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
