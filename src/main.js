window.addEventListener("load", function () {
  var game = new Phaser.Game({
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    backgroundColor: "#242424",
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
  });

  game.scene.add("Preload", Preload);
  game.scene.add("MainMenu", MainMenu);
  game.scene.add("Beach", Beach);
  game.scene.add("City", City);
  game.scene.add("Icey", Icey);
  game.scene.add("Forest", Forest);
  game.scene.add("Start", Start);
  /* DEPRECATED
  game.scene.add("Tutorial", Tutorial);
  game.scene.add("Controls", Controls);
  game.scene.add("Settings", Settings);
  game.scene.add("Credits", Credits);
  */
  game.scene.add("Boot", Boot, true);
	var game = new Phaser.Game({
		width: 800,
		height: 600,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});
});

class Boot extends Phaser.Scene {
  preload() {
    this.load.pack("pack", "assets/preload-asset-pack.json");

    this.load.on(Phaser.Loader.Events.COMPLETE, () =>
      this.scene.start("Preload")
    );
  }
}
