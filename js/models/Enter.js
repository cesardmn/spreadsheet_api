class Enter {
  constructor() {
    this._section = document.querySelector('.enter-section')
    this._form = this._section.querySelector('form')
    this._input = this._section.querySelector('input')
    this._button = this._section.querySelector('button')
    this._modal = this._section.querySelector('a')
    this._error = this._section.querySelector('.enter-error')
    this._submit = this._listeningSubmit()
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
  get error() {
    return this._error
  }

  clearForm() {
    View.enable(this.button)
    this.input.value = ''
  }

  _listeningSubmit() {
    this.form.addEventListener(
      'submit',
      event => {
        event.preventDefault()
        View.hide(this.error)
        View.disable(this.button)
        app.spreadsheet.controller.load()
      }
    )
  }
}
