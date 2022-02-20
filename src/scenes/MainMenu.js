// You can write more code here

/* START OF COMPILED CODE */

class MainMenu extends Phaser.Scene {
  constructor() {
    super("MainMenu");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /** @returns {void} */
  editorCreate() {
    // main-menu-background
    const main_menu_background = this.add.container(407, 309);

    // layer_0
    const layer_0 = this.add.tileSprite(
      -6,
      -4,
      4320,
      2160,
      "main-menu-environment-sky"
    );
    layer_0.scaleX = 0.19;
    layer_0.scaleY = 0.28;
    main_menu_background.add(layer_0);

    // layer_1
    const layer_1 = this.add.tileSprite(
      -6,
      -98,
      4320,
      2160,
      "main-menu-environment-cloud"
    );
    layer_1.scaleX = 0.2;
    layer_1.scaleY = 0.2;
    main_menu_background.add(layer_1);

    // layer_2
    const layer_2 = this.add.tileSprite(
      5,
      11,
      4320,
      2160,
      "main-menu-environment-tree1"
    );
    layer_2.scaleX = 0.2;
    layer_2.scaleY = 0.2;
    main_menu_background.add(layer_2);

    // layer_3
    const layer_3 = this.add.tileSprite(
      0,
      59,
      4320,
      2160,
      "main-menu-environment-tree2"
    );
    layer_3.scaleX = 0.19;
    layer_3.scaleY = 0.17;
    main_menu_background.add(layer_3);

    // layer_4
    const layer_4 = this.add.tileSprite(
      -4,
      112,
      4320,
      2160,
      "main-menu-environment-tree"
    );
    layer_4.scaleX = 0.19;
    layer_4.scaleY = 0.17;
    main_menu_background.add(layer_4);

    // lOGO_VERSION5
    const lOGO_VERSION5 = this.add.image(290, 247, "logo-version5");
    lOGO_VERSION5.scaleX = 0.7;
    lOGO_VERSION5.scaleY = 0.7;

    // main_menu_button_start
    const main_menu_button_start = this.add.image(
      656,
      131,
      "main-menu-button-start"
    );
    main_menu_button_start.scaleX = 0.36;
    main_menu_button_start.scaleY = 0.36;
    main_menu_button_start.setInteractive();
    main_menu_button_start.on("pointerdown", () => {
      this.scene.start("Start");
    });
    main_menu_button_start.on("pointerover", () => {
      main_menu_button_start.scale += 0.05;
    });
    main_menu_button_start.on("pointerout", () => {
      main_menu_button_start.scaleX = 0.36;
      main_menu_button_start.scaleY = 0.36;
    });

    // main_menu_button_tutorial
    const main_menu_button_tutorial = this.add.image(
      656,
      222,
      "main-menu-button-tutorial"
    );
    main_menu_button_tutorial.scaleX = 0.36;
    main_menu_button_tutorial.scaleY = 0.36;
    main_menu_button_tutorial.setInteractive();
    main_menu_button_tutorial.on("pointerdown", () => {
      this.scene.start("Tutorial");
    });
    main_menu_button_tutorial.on("pointerover", () => {
      main_menu_button_tutorial.scale += 0.05;
    });
    main_menu_button_tutorial.on("pointerout", () => {
      main_menu_button_tutorial.scaleX = 0.36;
      main_menu_button_tutorial.scaleY = 0.36;
    });

    // main_menu_button_controls
    const main_menu_button_controls = this.add.image(
      655,
      311,
      "main-menu-button-controls"
    );
    main_menu_button_controls.scaleX = 0.36;
    main_menu_button_controls.scaleY = 0.36;
    main_menu_button_controls.setInteractive();
    main_menu_button_controls.on("pointerdown", () => {
      this.scene.start("Controls");
    });
    main_menu_button_controls.on("pointerover", () => {
      main_menu_button_controls.scale += 0.05;
    });
    main_menu_button_controls.on("pointerout", () => {
      main_menu_button_controls.scaleX = 0.36;
      main_menu_button_controls.scaleY = 0.36;
    });

    // main_menu_button_settings
    const main_menu_button_settings = this.add.image(
      656,
      401,
      "main-menu-button-settings"
    );
    main_menu_button_settings.scaleX = 0.36;
    main_menu_button_settings.scaleY = 0.36;
    main_menu_button_settings.setInteractive();
    main_menu_button_settings.on("pointerdown", () => {
      this.scene.start("Settings");
    });
    main_menu_button_settings.on("pointerover", () => {
      main_menu_button_settings.scale += 0.05;
    });
    main_menu_button_settings.on("pointerout", () => {
      main_menu_button_settings.scaleX = 0.36;
      main_menu_button_settings.scaleY = 0.36;
    });

    // main_menu_button_credits
    const main_menu_button_credits = this.add.image(
      655,
      493,
      "main-menu-button-credits"
    );
    main_menu_button_credits.scaleX = 0.36;
    main_menu_button_credits.scaleY = 0.36;
    main_menu_button_credits.setInteractive();
    main_menu_button_credits.on("pointerdown", () => {
      this.scene.start("Credits");
    });
    main_menu_button_credits.on("pointerover", () => {
      main_menu_button_credits.scale += 0.05;
    });
    main_menu_button_credits.on("pointerout", () => {
      main_menu_button_credits.scaleX = 0.36;
      main_menu_button_credits.scaleY = 0.36;
    });


  /** @type {Phaser.GameObjects.TileSprite} */
  this.layer_0 =layer_0;
  /** @type {Phaser.GameObjects.TileSprite} */
  this.layer_1 = layer_1
  /** @type {Phaser.GameObjects.TileSprite} */
  this.layer_2 = layer_2;
  /** @type {Phaser.GameObjects.TileSprite} */
  this.layer_3 = layer_3;
  /** @type {Phaser.GameObjects.TileSprite} */
  this.layer_4 = layer_4;

  this.events.emit("scene-awake");
  }
  /* START-USER-CODE */

  // Write more your code here

  create() {
    this.editorCreate();
  }
  update() {
    this.layer_1.tilePositionX += 1;
    this.layer_2.tilePositionX += 0.4;
    this.layer_3.tilePositionX += 0.6;
    this.layer_4.tilePositionX += 4.5;
    
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
