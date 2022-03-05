class MainMenu extends Phaser.Scene {

	constructor() {
		super("MainMenu");
	}

	editorCreate() {
    //loading music
		var loadingMusic = this.sound.add("loading-sound", {volume: 0.2});
    loadingMusic.play();
    loadingMusic.loop = true;

    // main-menu-background
    const main_menu_background = this.add.container(407, 309);

    // layer_0
    const layer_0 = this.add.tileSprite(-6,-4,4320,2160,"main-menu-environment-sky");
    layer_0.scaleX = 0.19;
    layer_0.scaleY = 0.28;
    main_menu_background.add(layer_0);

    // layer_1
    const layer_1 = this.add.tileSprite(-6,-98,4320,2160,"main-menu-environment-cloud");
    layer_1.scaleX = 0.2;
    layer_1.scaleY = 0.2;
    main_menu_background.add(layer_1);

    // layer_2
    const layer_2 = this.add.tileSprite(5,11,4320,2160,"main-menu-environment-tree1");
    layer_2.scaleX = 0.2;
    layer_2.scaleY = 0.2;
    main_menu_background.add(layer_2);

    // layer_3
    const layer_3 = this.add.tileSprite(0,59,4320,2160,"main-menu-environment-tree2");
    layer_3.scaleX = 0.19;
    layer_3.scaleY = 0.17;
    main_menu_background.add(layer_3);

    // layer_4
    const layer_4 = this.add.tileSprite(-4,112,4320,2160, "main-menu-environment-tree");
    layer_4.scaleX = 0.19;
    layer_4.scaleY = 0.17;
    main_menu_background.add(layer_4);

    // lOGO_VERSION5
    const lOGO_VERSION5 = this.add.image(290, 247, "logo-version5");
    lOGO_VERSION5.scaleX = 0.7;
    lOGO_VERSION5.scaleY = 0.7;

    // Button Sounds
    var buttonClicked = this.sound.add("buttonOnClick",  {volume: parseFloat(localStorage.fxVolume)});
    

    //FUNCTIONS
    const playButtonFX = () => {
      if(localStorage.settingsOptionFX == "true")
          buttonClicked.play();
    }
    const hideMainMenu = () => {
      main_menu_button_credits.visible = false;
      main_menu_button_start.visible = false;
      main_menu_button_controls.visible = false;
      main_menu_button_settings.visible = false;
      lOGO_VERSION5.visible = false;
      button_back.visible =  true;
    }
    const setMainMenu = () => {
      main_menu_button_credits.visible = true;
      main_menu_button_start.visible = true;
      main_menu_button_controls.visible = true;
      main_menu_button_settings.visible = true;
      lOGO_VERSION5.visible = true;
      button_back.visible =  false;
    }
    // main_menu_button_start
    const main_menu_button_start = this.add.image(656, 130,"main-menu-button-start");
    main_menu_button_start.scaleX = 0.36;
    main_menu_button_start.scaleY = 0.36;
    main_menu_button_start.setInteractive().on("pointerdown", () => {
        playButtonFX();
    }).on("pointerover", () => {
      main_menu_button_start.scale += 0.05;
    }).on("pointerout", () => {
      main_menu_button_start.scaleX = 0.36;
      main_menu_button_start.scaleY = 0.36;
    });

    // main_menu_button_controls
    const main_menu_button_controls = this.add.image(653, 240, "main-menu-button-controls");
    main_menu_button_controls.scaleX = 0.36;
    main_menu_button_controls.scaleY = 0.36;
    main_menu_button_controls.setInteractive().on("pointerover", () => {
      main_menu_button_controls.scale += 0.05;
    }).on("pointerout", () => {
      main_menu_button_controls.scaleX = 0.36;
      main_menu_button_controls.scaleY = 0.36;
    }).on("pointerdown", () => {
      playButtonFX();
      hideMainMenu();
       

      //BACK BUTTON
        button_back.on("pointerdown", () => {
              playButtonFX();
              setMainMenu();
              aRROW_radio.visible = false;
              controlsOF.visible = false;
              wASD_radio.visible = false;
              aRROW_tick.visible = false;
              wASD_tick.visible= false;
          })

        // controlsOF
        const controlsOF = this.add.image(405, 345, "controlsOF");
        controlsOF.scaleX = 0.39;
        controlsOF.scaleY = 0.39;

        // ARROW_radio
        const aRROW_radio = this.add.image(217, 320, "button-radio");
        aRROW_radio.scaleX = 0.5;
        aRROW_radio.scaleY = 0.5;
        aRROW_radio.setInteractive();
        aRROW_radio.on("pointerdown", () => {
          playButtonFX();
         
          if(!aRROW_tick.visible){
            aRROW_tick.visible = true;
            localStorage.controlsOptionArrows = "true";
            wASD_tick.visible = false;
          }
        }).on("pointerover", () => {
              aRROW_radio.scale += 0.15;
        }).on("pointerout", () => {
            aRROW_radio.scaleX = 0.5;
            aRROW_radio.scaleY = 0.5;
        });

        // WASD_radio
        const wASD_radio = this.add.image(217, 410, "button-radio");
        wASD_radio.scaleX = 0.5;
        wASD_radio.scaleY = 0.5;
        wASD_radio.setInteractive();
        wASD_radio.on("pointerdown", () => {
          playButtonFX();
          if(!wASD_tick.visible){
            wASD_tick.visible = true;
            localStorage.controlsOptionArrows = "false";
            aRROW_tick.visible = false;
          }
        }).on("pointerover", () => {
              wASD_radio.scale += 0.15;
        }).on("pointerout", () => {
            wASD_radio.scaleX = 0.5;
            wASD_radio.scaleY = 0.5;
        });
        // ARROW_tick
        const aRROW_tick = this.add.image(217, 320, "button-tick");
        aRROW_tick.scaleX = 0.1;
        aRROW_tick.scaleY = 0.1;
        

        // WASD_tick
        const wASD_tick = this.add.image(217, 410, "button-tick");
        wASD_tick.scaleX = 0.1;
        wASD_tick.scaleY = 0.1;
        //wASD_tick.visible = false;

        if(localStorage.controlsOptionArrows == "true"){
          aRROW_tick.visible = true;
          wASD_tick.visible = false;
        }
        else{
          aRROW_tick.visible = false;
          wASD_tick.visible = true;
        }

    });


    // SETTINGS BUTTON
    const main_menu_button_settings = this.add.image(
      653,
      350,
      "main-menu-button-settings"
    );
    main_menu_button_settings.scaleX = 0.36;
    main_menu_button_settings.scaleY = 0.36;
    main_menu_button_settings.setInteractive();
    main_menu_button_settings.on("pointerover", () => {
      main_menu_button_settings.scale += 0.05;
    }).on("pointerout", () => {
      main_menu_button_settings.scaleX = 0.36;
      main_menu_button_settings.scaleY = 0.36;
    }).on("pointerdown", () => {
    	playButtonFX();
      hideMainMenu();

        //BACK BUTTON
        button_back.on("pointerdown", () => {
              playButtonFX();
              setMainMenu();
              settings_container.visible = false;
              fx_tick.visible = false;
              fx_volumeDown.visible = false;
              fx_volumeUp.visible = false;
              fX_toggle.visible = false;
              sound_volumeDown.visible = false;
              sound_volumeUp.visible = false;
              sound_tick.visible = false;
              sound_toggle.visible = false;
              
          });

        // settings_container
        const settings_container = this.add.image(398, 330, "settings-container");
        settings_container.scaleX = 0.35;
        settings_container.scaleY = 0.35;
        

        // FX_toggle
        const fX_toggle = this.add.image(417, 330, "button-toggle");
        fX_toggle.scaleX = 0.3;
        fX_toggle.scaleY = 0.3;
        fX_toggle.setInteractive();
        fX_toggle.on("pointerover", () => {
          fX_toggle.scale += 0.05;
        }).on("pointerout", () => {
          fX_toggle.scaleX = 0.3;
          fX_toggle.scaleY = 0.3;
        }).on("pointerdown", () => {
          
          if(fx_tick.visible){
            fx_tick.visible = false;
            localStorage.settingsOptionFX = "true";
            fx_volumeDown.visible = true;
            fx_volumeUp.visible = true;

          }
          else{
            fx_tick.visible = true;
            localStorage.settingsOptionFX = "false";
            fx_volumeDown.visible = false;
            fx_volumeUp.visible = false;
          }
        });
        //MUSIC TOGGLE
        const sound_toggle = this.add.image(417, 395, "button-toggle");
        sound_toggle.scaleX = 0.3;
        sound_toggle.scaleY = 0.3;
        sound_toggle.setInteractive();
        sound_toggle.on("pointerover", () => {
          sound_toggle.scale += 0.05;
        }).on("pointerout", () => {
          sound_toggle.scaleX = 0.3;
          sound_toggle.scaleY = 0.3;
        }).on("pointerdown", () => {
          playButtonFX();
          if(sound_tick.visible){
            sound_tick.visible = false;
            backgroundMusic.play();
            backgroundMusic.loop = true;
            localStorage.settingsOptionMusic = "true";
            sound_volumeDown.visible = true;
            sound_volumeUp.visible = true;
          }
          else{
            sound_tick.visible = true;
            localStorage.settingsOptionMusic = "false";
            backgroundMusic.stop();
            sound_volumeDown.visible = false;
            sound_volumeUp.visible = false;
          }
        });
        // FX VOLUME DOWN
        const fx_volumeDown = this.add.image(510, 330, "button-volumeDown");
        fx_volumeDown.scaleX = 0.1;
        fx_volumeDown.scaleY = 0.1;
        fx_volumeDown.setInteractive();
        fx_volumeDown.on("pointerdown", () => {
          playButtonFX();

          if(parseFloat(localStorage.fxVolume) >= 0.50){
            localStorage.fxVolume = (parseFloat(localStorage.fxVolume) - 0.25).toString();
            buttonClicked =  this.sound.add("buttonOnClick",  {volume: parseFloat(localStorage.fxVolume)});
          }
	    	}).on("pointerover", () => {
          fx_volumeDown.scale += 0.05;
        }).on("pointerout", () => {
          fx_volumeDown.scaleX = 0.1;
          fx_volumeDown.scaleY = 0.1;
        });
        // MUSIC VOLUME DOWN
        const sound_volumeDown = this.add.image(510, 395, "button-volumeDown");
        sound_volumeDown.scaleX = 0.1;
        sound_volumeDown.scaleY = 0.1;
        sound_volumeDown.setInteractive();
        sound_volumeDown.on("pointerdown", () => {
          playButtonFX();

          if(parseFloat(localStorage.musicVolume) >= 0.50){
            localStorage.musicVolume = (parseFloat(localStorage.musicVolume) - 0.25).toString();
            backgroundMusic.pause();
            backgroundMusic =  this.sound.add("main-menu" , {volume: parseFloat(localStorage.musicVolume)});
            backgroundMusic.play();
            backgroundMusic.loop = true;
          }
	    	}).on("pointerover", () => {
          sound_volumeDown.scale += 0.05;
        }).on("pointerout", () => {
          sound_volumeDown.scaleX = 0.1;
          sound_volumeDown.scaleY = 0.1;
        });

        //FX VOLUME UP
        const fx_volumeUp = this.add.image(574, 330, "buttom-volumeUp");
        fx_volumeUp.scaleX = 0.1;
        fx_volumeUp.scaleY = 0.1;
        fx_volumeUp.setInteractive();
        fx_volumeUp.on("pointerdown", () => {
          playButtonFX();

          if(parseFloat(localStorage.fxVolume) <= 8.0){
            localStorage.fxVolume = (parseFloat(localStorage.fxVolume) + 0.25).toString();
            buttonClicked =  this.sound.add("buttonOnClick",  {volume: parseFloat(localStorage.fxVolume)});
          }
          
		    }).on("pointerover", () => {
          fx_volumeUp.scale += 0.05;
        }).on("pointerout", () => {
          fx_volumeUp.scaleX = 0.1;
          fx_volumeUp.scaleY = 0.1;
        });

        // MUSIC VOLUME UP
        const sound_volumeUp = this.add.image(574, 395, "buttom-volumeUp");
        sound_volumeUp.scaleX = 0.1;
        sound_volumeUp.scaleY = 0.1;
        sound_volumeUp.setInteractive();
        sound_volumeUp.on("pointerdown", () => {
          playButtonFX();
          if(parseFloat(localStorage.musicVolume) <= 4.75){
            localStorage.musicVolume = (parseFloat(localStorage.musicVolume) + 0.25).toString();
            backgroundMusic.pause();
            backgroundMusic =  this.sound.add("main-menu" , {volume: parseFloat(localStorage.musicVolume)});
            backgroundMusic.play();
            backgroundMusic.loop = true;
          }
		    }).on("pointerover", () => {
          sound_volumeUp.scale += 0.05;
        }).on("pointerout", () => {
          sound_volumeUp.scaleX = 0.1;
          sound_volumeUp.scaleY = 0.1;
        });

        // FX TICK MARK
        const fx_tick = this.add.image(417, 330, "button-tick");
        fx_tick.scaleX = 0.1;
        fx_tick.scaleY = 0.1;
        //fx_tick.visible = false;

        // music_tick
        const sound_tick = this.add.image(417, 395, "button-tick");
        sound_tick.scaleX = 0.1;
        sound_tick.scaleY = 0.1;
        //sound_tick.visible = false;

        if(localStorage.getItem("settingsOptionFX") == "true"){
          fx_tick.visible = false;
        }
        else{
          fx_tick.visible = true;
          fx_volumeDown.visible = false;
          fx_volumeUp.visible = false;
        }
        if(localStorage.getItem("settingsOptionMusic") == "true"){
          sound_tick.visible = false;
        }
        else{
          sound_tick.visible = true;
          sound_volumeDown.visible = false;
          sound_volumeUp.visible = false;
        }

    }); //end of SETTINGS BUTTON

    // CREDITS BUTTON
    const main_menu_button_credits = this.add.image(
      653,
      460,
      "main-menu-button-credits"
    );
    main_menu_button_credits.scaleX = 0.36;
    main_menu_button_credits.scaleY = 0.36;
    main_menu_button_credits.setInteractive();
    main_menu_button_credits
      .on("pointerover", () => {
        main_menu_button_credits.scale += 0.05;
      }).on("pointerout", () => {
        main_menu_button_credits.scaleX = 0.36;
        main_menu_button_credits.scaleY = 0.36;
      }).on("pointerdown", () => {
        playButtonFX();
        hideMainMenu();

        //BACK BUTTON
        button_back.on("pointerdown", () => {
              playButtonFX();
              setMainMenu();
              credits_textbox_content5.visible = false;
        });

        //DISPLAY NEW STUFF
        const credits_textbox_content5 = this.add.image(407, 309, "credits-textbox-content5");
        credits_textbox_content5.scaleX = 0.3;
        credits_textbox_content5.scaleY = 0.3;
      }); //end credits button
    

    const button_back = this.add.image(88, 87, "button-back");
        button_back.scaleX = 0.15;
        button_back.scaleY = 0.15;
        button_back.setInteractive();
        button_back.on("pointerover", () => {
              button_back.scale += 0.05;
        }).on("pointerout", () => {
            button_back.scaleX = 0.15;
            button_back.scaleY = 0.15;
        })
        .visible = false;

    //background-music
    var backgroundMusic = this.sound.add("main-menu" , {volume: parseFloat(localStorage.musicVolume)});
    loadingMusic.stop();
    backgroundMusic.loop = true;
    if(localStorage.settingsOptionMusic == "true"){
      backgroundMusic.play();
    }
    
    

		// loading_graphic
    const loading_graphic = this.add.image(408, 313, "loading-graphic");
    loading_graphic.scaleX = 1.1;
    loading_graphic.scaleY = 1.1;
    loading_graphic.visible = false;

		this.layer_0 = layer_0;
		this.layer_1 = layer_1;
		this.layer_2 = layer_2;
		this.layer_3 = layer_3;
		this.layer_4 = layer_4;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	layer_0;
	/** @type {Phaser.GameObjects.TileSprite} */
	layer_1;
	/** @type {Phaser.GameObjects.TileSprite} */
	layer_2;
	/** @type {Phaser.GameObjects.TileSprite} */
	layer_3;
	/** @type {Phaser.GameObjects.TileSprite} */
	layer_4;

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
