import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor(params: any) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `<div>
    Dashboard Page
    </div>`;
  }
}
