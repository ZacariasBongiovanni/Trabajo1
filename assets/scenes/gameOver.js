export default class gameOver extends Phaser.Scene {
  constructor() {
    super("gameOver");
  }
  create() {
    this.add
      .image(400, 300, "gameOver")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("Game"));
  }
}
