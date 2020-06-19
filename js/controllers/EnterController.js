class EnterController {
  constructor(enter) {
    this._enter = enter
    Object.freeze(this)
  }

  loadSpreadsheet() {

    this._enter.button.setAttribute('disabled', true)
    this._enter.section.setAttribute('hidden', true)

    // show spinner section

    this._doPost(this._enter.input.value)


    this._enter.button.removeAttribute('disabled')
    this._enter.input.value = ''

    // hidden spinner
    // show Spreadsheet
  }

  async _doPost(ssid) {
    let spreadsheet = await Service.read(ssid)
    let response = await spreadsheet.json()
    console.log(response);

    // render response
  }
}
