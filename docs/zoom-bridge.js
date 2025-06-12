export default class {
  #fontSize;
  #text;

  init() {
    this.#fontSize = localStorage.getItem("zoom-font-size");
    if (this.#fontSize === null) {
      this.#fontSize = 1.4;
    }
    this.#text = localStorage.getItem("zoom-text");
    if (this.#text === null) {
      this.#text = "Edit me...";
    }
  }

  $initSlider(el) {
    el.value = parseFloat(this.#fontSize);
  }

  $initText(el) {
    el.innerHTML = this.#text;
  }

  _applySize() {
    document.body.style.setProperty(
      "--font-size",
      `${this.#fontSize}rem`,
    );
  }

  _updateSize(event) {
    const value = parseFloat(event.target.value);
    localStorage.setItem("zoom-font-size", value);
    this.#fontSize = value;
  }

  _saveText(event) {
    localStorage.setItem("zoom-text", event.target.innerHTML);
  }
}
