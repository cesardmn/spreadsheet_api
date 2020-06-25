class SpreadsheetView {

  setSpreadsheet(response) {
    console.log(response);

    app.spreadsheet.title.textContent = response.name

    this._setMenu(response.sheets)

    this._setSheets(response.sheets)

    View.show(app.spreadsheet.section)
  }


  _setMenu(sheets) {
    let menu = app.spreadsheet.menu

    menu.innerHTML = ''

    for (let sheet of sheets) {
      menu.innerHTML += `
      <a href="#${Helper.textNormalize(sheet.name)}" class="menu-item-link">
        <li class="menu-item">${sheet.name}</li>
      </a>
      `
    }
  }

  _setSheets(sheets) {
    let content = app.spreadsheet.content
    content.innerHTML = ''

    for (let sheet of sheets) {
      this._setTable(sheet)
    }
  }

  _setTable(sheet) {

    app.spreadsheet.content.innerHTML += `
      <table id=${Helper.textNormalize(sheet.name)}>
        
      <thead>
          <tr>
            ${sheet.header.reduce(this._setHeader, '')}
          </tr>
        </thead>
        
        <tbody>
            ${this._setBody(sheet.data, sheet.header)}
        </tbody>

      </table>
    `
  }

  _setHeader(result, item) {
    return result += `
      <td>${item}</td>
    `
  }

  _setBody(data, header) {
    
    for (let row of data){

      

    }
  }

}
