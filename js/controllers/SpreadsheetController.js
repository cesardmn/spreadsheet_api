class SpreadsheetController {
  constructor() {
    this._view = new SpreadsheetView ()
    Object.freeze(this)
  }

  async load() {
    Spinner.show()
    let ssid = app.enter.input.value

    try {
      let response = await (await Service.read(ssid)).json()
      this._setResponse(response)
    } catch (error) {
      console.log(error)
      this._renderError('REQUEST ERROR! </br> Check your connection and try again.')
    } finally {
      app.enter.clearForm()
      Spinner.hidden()
    }
  }

  _setResponse(response) {
    if (response.error) {
      this._renderError(response.error)
    } else {
      this._view.setSpreadsheet(response)
    }
  }

  _renderError(error) {
    app.enter.error.innerHTML = error
    View.show(app.enter.error)
    View.show(app.enter.section)
  }
}
