
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// layer_0
		this.add.image(485, 306, "main-menu-environment-sky");
		
		// progress
		const progress = this.add.text(400, 349, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "color": "#f7b20cff", "fontSize": "40px" });

		// lOGO_VERSION5
		this.add.image(392, 183, "logo-version5");

		// progress (components)
		new PreloadText(progress);


		//LOCAL STORAGE
		if(localStorage.getItem("controlsOptionArrows") == null){
			localStorage.setItem("controlsOptionArrows", "true");
		}
		if(localStorage.getItem("settingsOptionFX") == null){
			localStorage.setItem("settingsOptionFX", "true");
		}
		if(localStorage.getItem("settingsOptionMusic") == null){
			localStorage.setItem("settingsOptionMusic" ,"true");
		}
		if(localStorage.getItem("musicVolume") == null){
			localStorage.setItem("musicVolume" , "0.5");
		}
		

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("MainMenu"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
