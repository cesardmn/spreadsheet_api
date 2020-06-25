class Spreadsheet {
  constructor() {
    this._controller = new SpreadsheetController()
    this._section = document.querySelector('.spreadsheet-section')
    this._title = this._section.querySelector('.spreadsheet-title')
    this._menu = this._section.querySelector('.menu')
    this._content = this._section.querySelector('.right-content')
  }

  get section() {
    return this._section
  }

  get title() {
    return this._title
  }

  get controller() {
    return this._controller
  }

  get menu() {
    return this._menu
  }

  get content() {
    return this._content
  }
}

