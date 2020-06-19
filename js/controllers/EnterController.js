class EnterController {
  constructor(enter) {
    this._enter = enter
    Object.freeze(this)
  }

  loadSpreadsheet() {

    this._enter.button.setAttribute('disabled', true)
    this._enter.section.setAttribute('hidden', true)

    this._enter.spinner.removeAttribute('hidden')
    console.log(enter.spinner)

    this._doPost(this._enter.input.value)


    this._enter.button.removeAttribute('disabled')
    this._enter.input.value = ''

  }

  async _doPost(ssid) {
    let enterView = new EnterView()

    try {
      let response = await Service.read(ssid)
      let spreadsheet = await response.json()
      enterView.setSpreadsheet(spreadsheet)
      this._enter.spreadsheet.removeAttribute('hidden')
    } catch (error) {
      enterView.setError(error)
    } finally {
      this._enter.spinner.setAttribute('hidden', true)
    }
  }
}
