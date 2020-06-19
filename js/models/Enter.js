class Enter {
  constructor() {
    this._section = document.querySelector('.enter-section')
    this._form = this._section.querySelector('form')
    this._input = this._section.querySelector('input')
    this._button = this._section.querySelector('button')
    this._modal = this._section.querySelector('a')
    this._spinner = document.querySelector('.spinner-section')
    this._spreadsheet = document.querySelector('.spreadsheet-section')
    Object.freeze(this)
  }

  get section() {
    return this._section
  }
  get form() {
    return this._form
  }
  get input() {
    return this._input
  }
  get button() {
    return this._button
  }
  get modal() {
    return this._modal
  }
  get spinner() {
    return this._spinner
  }
  get spreadsheet() {
    return this._spreadsheet
  }
  submit(event) {
    event.preventDefault()
    let controller = new EnterController(this)
    controller.loadSpreadsheet()
  }
}