const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


class SwitchClass {
  constructor(arrayColors, { bodyRef, startRef, finishRef }) {
      this.arrayColors = arrayColors;
      this.bodyRef = bodyRef;
      this.startRef = startRef;
      this.finishRef = finishRef;
      this.timerId = null;
  }
  switchColor() {

      this.timerId = setInterval(() => {
          this.bodyRef.style.backgroundColor = this.arrayColors[this.randomIntegerFromInterval(0, this.arrayColors.length - 1)];
          this.startRef.disabled = true;
          this.finishRef.disabled = false;
      }, 1000)
  }
  init() {
      console.log(this);
      this.startRef.addEventListener("click", this.switchColor.bind(this));
      this.finishRef.addEventListener("click", () => {
          clearInterval(this.timerId);
          this.startRef.disabled = false;
          this.finishRef.disabled = true;
      });

  }
  randomIntegerFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
const refs = {
  bodyRef: document.querySelector("body"),
  startRef: document.querySelector('[data-action="start"]'),
  finishRef: document.querySelector('[data-action="stop"]'),
}


const colorSwitcher = new SwitchClass(colors, refs);
colorSwitcher.init();