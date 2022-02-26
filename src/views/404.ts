import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("404");
  }

  async getHtml() {
    return `<h1>Page Not Found</h1>`;
  }
}
