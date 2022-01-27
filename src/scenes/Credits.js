// You can write more code here

/* START OF COMPILED CODE */

class Credits extends Phaser.Scene {

	constructor() {
		super("Credits");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// main-menu-background
		const main_menu_background = this.add.container(407, 309);

		// layer_0
		const layer_0 = this.add.image(-6, -4, "main-menu-environment-sky");
		layer_0.scaleX = 0.19;
		layer_0.scaleY = 0.28;
		main_menu_background.add(layer_0);

		// layer_1
		const layer_1 = this.add.image(-6, -98, "main-menu-environment-cloud");
		layer_1.scaleX = 0.2;
		layer_1.scaleY = 0.2;
		main_menu_background.add(layer_1);

		// layer_2
		const layer_2 = this.add.image(-3, 122, "main-menu-environment-tree1");
		layer_2.scaleX = 0.19;
		layer_2.scaleY = 0.17;
		main_menu_background.add(layer_2);

		// layer_3
		const layer_3 = this.add.image(-9, 107, "main-menu-environment-tree2");
		layer_3.scaleX = 0.19;
		layer_3.scaleY = 0.17;
		main_menu_background.add(layer_3);

		// layer_4
		const layer_4 = this.add.image(-4, 112, "main-menu-environment-tree");
		layer_4.scaleX = 0.19;
		layer_4.scaleY = 0.17;
		main_menu_background.add(layer_4);

		// main_menu_button_back
		const main_menu_button_back = this.add.image(403, 533, "main-menu-button-back");
		main_menu_button_back.scaleX = 0.34712841975780406;
		main_menu_button_back.scaleY = 0.35863191626178187;

		// credits
		const credits = this.add.image(411, 265, "Credits");
		credits.scaleX = 0.31857946180425406;
		credits.scaleY = 0.2704294276483665;

		this.events.emit("scene-awake");

    main_menu_button_back.setInteractive();

    main_menu_button_back.on("pointerdown", () => {
      this.scene.start("MainMenu");
    });
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
