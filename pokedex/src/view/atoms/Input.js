export class Input {
  constructor(placeholder) {
    this.input = document.createElement("input");
    this.input.placeholder = placeholder;
  }
  render() {
    return this.input;
  }
}
