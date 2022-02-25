import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor(params: any) {
    super(params);
    this.setTitle(`About ${this.params.id}`);
  }

  async getHtml() {
    return `<div>About Page ${this.params.id}</div>`;
  }
}
