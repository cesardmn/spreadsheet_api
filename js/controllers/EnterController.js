class EnterController{
  constructor(enter){
    this._enter = enter
    Object.freeze(this)
  }
  
  loadSpreadsheet() {
    
    this._enter.button.setAttribute('disabled', true)    
    this._enter.section.setAttribute('hidden', true)

    // show spinner section

    // call api
    // render response
    
    this._enter.button.removeAttribute('disabled')
    this._enter.input.value = ''
    
    // hidden spinner
    // show Spreadsheet
  }
}
