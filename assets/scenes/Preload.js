import { SHAPES } from "../../utils.js";

const { TRIANGLE, SQUARE, DIAMOND, CIRCLE } = SHAPES;

export default class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    this.load.image("sky", "./assets/images/sky.png");
    this.load.image("ground", "./assets/images/platform.png");
    this.load.image("Ninja", "./assets/images/Ninja.png");
    this.load.image(DIAMOND, "./assets/images/diamond.png");
    this.load.image(SQUARE, "./assets/images/square.png");
    this.load.image(TRIANGLE, "./assets/images/triangle.png");
    this.load.image(CIRCLE, "./assets/images/circle.png");
    this.load.image("win2", "./assets/images/win2.png");
    this.load.image("gameOver", "./assets/images/gameOver.png");
  }
  create() {
    this.scene.start("Game");
  }
}
