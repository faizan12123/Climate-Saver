class City extends Phaser.Scene {
  constructor() {
    super("City");
  }

  /** @returns {void} */
  editorCreate() {
    this.displayMap();
    this.displayPlayer();
    this.displayHealthBar(); // there's working updateHealthBar() function
    this.displayTrash();

    function formatTime(seconds) {
      // Minutes
      var minutes = Math.floor(seconds / 60);
      // Seconds
      var partInSeconds = seconds % 60;
      // Adds left zeros to seconds
      partInSeconds = partInSeconds.toString().padStart(2, "0");
      // Returns formated time
      return `${partInSeconds}`;
    }

    this.initialTime = 60;
    //temp button-quiz
    const button_quiz = this.add.image(656, 50, "button-quiz");
    button_quiz.setInteractive();
    button_quiz.scaleX = 0.36;
    button_quiz.scaleY = 0.36;
    button_quiz.on("pointerdown", () => {
      backgroundMusic.stop();
      this.scene.start("Quiz");
    });

    // directionpad
    this.add.image(692, 520, "D-Pad");

    // score
    var player_score = 0;
    const score = this.add.image(384, 44, "Score");
    const score_count = this.add.text(420, 30, player_score, {
      fontFamily: "Georgia",
      fontSize: "24px",
      color: "yellow",
    });
    score_count.setText(player_score + 1);

    score.scaleX = 0.62297233942359;
    score.scaleY = 0.62297233942359;

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
    button_pause
      .setInteractive()
      .on("pointerdown", () => {
        if (localStorage.settingsOptionFX == "true") {
          this.buttonClicked.play();
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

    /*--------------GAMEPLAY THINGS--------------- */
    this.add.text(20, 0, "Space Bar to hit things. Arrows to move", {
      fontFamily: "Georgia",
      fontSize: "40px",
      color: "yellow",
    });

    this.events.emit("scene-awake");
  }

  /* START-USER-CODE */

  // Write your code here

  create() {
    this.healthBarNumber = 8;
    this.editorCreate();
  }
  update() {
    this.worldLayer.setCollisionByProperty({ collides: true });
  }

  displayMap() {
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
    const windows_and_Doors = cityV2.createLayer(
      "Windows and Doors",
      ["City"],
      4,
      -97
    );
    windows_and_Doors.scaleX = 1.25;
    windows_and_Doors.scaleY = 1.25;

    this.cityV2 = cityV2;

    //background music
    this.backgroundMusic = this.sound.add("city-bgmusic", {
      volume: parseFloat(localStorage.musicVolume),
    });
    this.backgroundMusic.loop = true;
    if (localStorage.settingsOptionMusic == "true") {
      this.backgroundMusic.play();
    }
  }

  displayPlayer() {
    // player
    const player = this.add.sprite(489, 348, "Boy  sheet wlaking and Idle");
    new PhysicsV2(player);
    new MovementV2(player);
    this.player = player;
    //animations + movements

    this.player.play("down-idle");
    this.physics.add.collider(this.player, this.worldLayer);
  }
  displayPauseMenu() {
    // pause_menu
    const pause_menu = this.add.image(394, 281, "pause-menuV2");
    pause_menu.scaleX = 0.26626053769694924;
    pause_menu.scaleY = 0.27093994892320916;
    //comment pause_menu.visible = false;

    // btn_quit
    const btn_quit = this.add.image(401, 409, "pause-menu-button-quit");
    btn_quit.scaleX = 0.27701381259992647;
    btn_quit.scaleY = 0.27701381259992647;
    btn_quit
      .setInteractive()
      .on("pointerdown", () => {
        if (localStorage.settingsOptionFX == "true") {
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
      });
    //comment.visible = false;

    //btn_resume
    const btn_resume = this.add.image(401, 323, "pause-menu-button-resume");
    btn_resume.scaleX = 0.27701381259992647;
    btn_resume.scaleY = 0.27701381259992647;
    btn_resume
      .setInteractive()
      .on("pointerdown", () => {
        if (localStorage.settingsOptionFX == "true") {
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
      })
      .on("pointerover", () => {
        btn_resume.scale += 0.05;
      })
      .on("pointerout", () => {
        btn_resume.scaleX = 0.27701381259992647;
        btn_resume.scaleY = 0.27701381259992647;
      });
    //comment.visible = false;

    // button_sound
    const button_sound = this.add.image(352, 229, "button-sound");
    button_sound.scaleX = 0.16344056315099267;
    button_sound.scaleY = 0.16344056315099267;
    button_sound
      .setInteractive()
      .on("pointerdown", () => {
        if (localStorage.settingsOptionFX == "true") {
          this.buttonClicked.play();
        }
        if (fx_tick.visible) {
          fx_tick.visible = false;
          localStorage.settingsOptionFX = "true";
        } else {
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
      });
    //comment.visible = false;

    // button_music
    const button_music = this.add.image(446, 229, "button-music");
    button_music.scaleX = 0.16344056315099267;
    button_music.scaleY = 0.16344056315099267;
    button_music
      .setInteractive()
      .on("pointerdown", () => {
        if (localStorage.settingsOptionFX == "true") {
          this.buttonClicked.play();
        }
        if (music_tick.visible) {
          music_tick.visible = false;
          localStorage.settingsOptionMusic = "true";
          this.backgroundMusic.play();
        } else {
          music_tick.visible = true;
          localStorage.settingsOptionMusic = "false";
          this.backgroundMusic.stop();
        }
      })
      .on("pointerover", () => {
        button_music.scale += 0.05;
      })
      .on("pointerout", () => {
        button_music.scaleX = 0.16344056315099267;
        button_music.scaleY = 0.16344056315099267;
      });
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

    if (localStorage.settingsOptionFX == "false") {
      fx_tick.visible = true;
    }
    if (localStorage.settingsOptionMusic == "false") {
      music_tick.visible = true;
    }

    //Block Character Movement on Pause
    this.input.keyboard.enabled = false;
  }

  displayTrash() {
    // trashs
    this.trashs = this.physics.add.group();
    this.trashs.enableBody = true;

    const apple_charger = this.trashs.create(405 + 300, 187, "apple-charger");
    apple_charger.scaleX = 0.15;
    apple_charger.scaleY = 0.15;

    const battery = this.trashs.create(110 + 300, 253, "battery");
    battery.scaleX = 0.5;
    battery.scaleY = 0.5;

    const books = this.trashs.create(359 + 300, 433, "books");
    books.scaleX = 0.15;
    books.scaleY = 0.15;

    const glasses = this.trashs.create(411 + 300, 266, "glasses");
    glasses.scaleX = 0.20;
    glasses.scaleY = 0.20;

    const ipod = this.trashs.create(179 + 300, 50, "ipod");
    ipod.scaleX = 0.15;
    ipod.scaleY = 0.15;

    const orangeJuice = this.trashs.create(405 + 300, 187, "orangeJuice");
    
    /*    
    
    const paint = this.trashs.create(110 + 300, 253, "paint");
    const plastic_bag = this.trashs.create(359 + 300, 433, "plastic-bag");
    const plastic_utensiils = this.trashs.create(411 + 300, 266, "plastic-utensiils");
    const television = this.trashs.create(179 + 300, 50, "television");
    const togo_container = this.trashs.create(179 + 300, 50, "togo-container");
    */
  }
  displayHealthBar() {
    // health_bar_decoration
    const health_bar_decoration = this.add.image(
      691,
      44,
      "health_bar_decoration"
    );
    health_bar_decoration.scaleX = 2.876226221353047;
    health_bar_decoration.scaleY = 2.876226221353047;

    // life_Bar_Animated_1
    this.healthBars = this.add.image(
      713,
      44,
      "Life-Bar-" + this.healthBarNumber
    );
    this.healthBars.scaleX = 1.801947436688974;
    this.healthBars.scaleY = 1.801947436688974;
  }
  updateHealthBar() {
    this.healthBarNumber--;
    this.healthBars.destroy();
    if (this.healthBarNumber < 0) {
      this.healthBarNumber = 0;
    }
    this.healthBars = this.add.image(
      713,
      44,
      "Life-Bar-" + this.healthBarNumber
    );
    this.healthBars.scaleX = 1.801947436688974;
    this.healthBars.scaleY = 1.801947436688974;
  }
}
