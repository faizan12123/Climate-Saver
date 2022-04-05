
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

		// trashs
		this.trashs = this.add.group();
		this.trashs.enableBody = true;

		// box
		const box = this.trashs.create(405+300, 187, "box");
		const ceramic_cup = this.trashs.create(110+300, 253, "ceramic-cup");
		const can2 = this.trashs.create(359+300, 433, "can2");
		const can = this.trashs.create(411+300, 266, "can");
		const glass_bottle = this.trashs.create(179+300, 100, "glass-bottle");
		const detergent_bottle = this.trashs.create(422+300, 521, "detergent-bottle");
		const glass_bottle2 = this.trashs.create(251+300, 534, "glass-bottle2");
		const glass_jar = this.trashs.create(189+300, 358, "glass-jar");
		const milk_carton = this.trashs.create(264+300, 186, "milk-carton");
		const paperbag = this.trashs.create(455+300, 368, "paperbag");
		const newspaper = this.trashs.create(303+300, 289, "newspaper");
		const pizza_box = this.trashs.create(0+300, 258, "pizza-box");
		const soda_can = this.trashs.create(416+300, 62, "soda-can");
		const spray_can = this.trashs.create(86+300, 118, "spray-can");

		this.player = player;
		this.beachV1 = beachV1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	player;
	trashs;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.player.play("down-idle");
	}
	update(){/*
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
		}*/

		this.physics.add.overlap(this.player, this.trashs, ()=> {console.log("overlap"), null, this})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
