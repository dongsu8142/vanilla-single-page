export default class {
  private _params: any;
  constructor(params?: any) {
    this._params = params;
  }

  setTitle(title: string) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }

  get params() {
    return this._params;
  }
}
