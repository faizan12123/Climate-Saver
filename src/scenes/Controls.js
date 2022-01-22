// You can write more code here

/* START OF COMPILED CODE */

class Controls extends Phaser.Scene {
  constructor() {
    super("Controls");

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

    this.events.emit("scene-awake");

    const helloButton = this.add.text(
      100,
      100,
      "controls scene --- click to return to main menu",
      {
        fill: "#000000",
      }
    );
    helloButton.setInteractive();

    helloButton.on("pointerdown", () => {
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
