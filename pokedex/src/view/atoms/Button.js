export class Button {
  constructor(text, onClick) {
    this.text = text;
    this.onClick = onClick;
  }

  render() {
    const btn = document.createElement("button");
    btn.textContent = this.text;
    btn.addEventListener("click", this.onClick);
    return btn;
  }
}
