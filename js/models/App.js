class App {
  constructor() {
    this._Enter = new Enter()
    this._Spreadsheet = new Spreadsheet()
    this._spinner = document.querySelector('.spinner-section') 
    
    Object.freeze(this)
  }
  
  get enter() {
    return this._Enter
  }
  
  get spreadsheet() {
    return this._Spreadsheet
  }

  get spinner(){
    return this._spinner
  }
}

const app = new App()
