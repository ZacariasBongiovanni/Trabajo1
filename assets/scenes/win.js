export default class win extends Phaser.Scene {
  constructor() {
    super("win2");
  }
  create() {
    this.add
      .image(400, 300, "win2")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("Game"));
  }
}
