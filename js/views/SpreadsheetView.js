class SpreadsheetView {

  setSpreadsheet(response) {

    app.spreadsheet.title.textContent = response.name

    this._setMenu(response.sheets)

    this._setSheets(response.sheets)

    this._setLinkMenu()

    View.show(app.spreadsheet.section)
  }

  _setMenu(sheets) {
    let menu = app.spreadsheet.menu

    menu.innerHTML = ''

    for (let sheet of sheets) {
      let concatName = Helper.textNormalize(sheet.name)
      menu.innerHTML += `
      <a href="#${concatName}" class="menu-item-link">
        <li class="menu-item" id="${concatName}">${sheet.name}</li>
      </a>
      `
    }
  }

  _setSheets(sheets) {
    let tables = app.spreadsheet.content
    tables.innerHTML = ''

    for (let sheet of sheets) {

      tables.innerHTML += `

        <div class="table-container" id="${Helper.textNormalize(sheet.name)}" hidden>
          <table>
            
            <caption>
              <h3>${sheet.name}</h3>
            </caption>
            
            <thead>
              <tr>${this._setHeader(sheet.header)}</tr>
            </thead>

            <tbody>${this._setBody(sheet.rows)}</tbody>

          </table>
        </div>
      
      `
    }
  }

  _setHeader(header) {
    return header.reduce(
      (header, head) => header += `<th>${head}</th>`,
      ''
    )
  }

  _setBody(rows) {
    return rows.reduce((tbody, tr) => tbody += `<tr>${this._setRow(tr)}</tr>`, '')
  }

  _setRow(row) {
    return row.reduce((tr, td) => tr += `<td>${td}</td>`, '')
  }

  _setLinkMenu() {
    let tables = app.spreadsheet.section.querySelectorAll('.table-container')
    let menu = app.spreadsheet.menu

    menu.addEventListener(
      'click', 
      event => {
        let tableName = event.target.getAttribute('id')
        let table = app.spreadsheet.section.querySelector(`.table-container#${tableName}`)
        this._showTable(tables, table)
      }
    )
  }

  _showTable(tables, table) {
    tables.forEach(element => View.hidden(element))
    View.show(table)
  }
}
