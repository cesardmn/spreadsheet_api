class Enter {
  constructor() {
    this._section = document.querySelector('.enter-section')
    this._form = this._section.querySelector('form')
    this._input = this._section.querySelector('input')
    this._button = this._section.querySelector('button')
    this._modal = this._section.querySelector('a')

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

  async loadSpreadsheet(event) {
    event.preventDefault()
    this.button.setAttribute('disabled', true)
    let ssid = this.input.value
    console.log(ssid)
  }
}
