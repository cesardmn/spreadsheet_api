class SpreadsheetView {

  setSpreadsheet(response) {

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
    let tables = app.spreadsheet.content
    tables.innerHTML = ''

    for (let sheet of sheets) {

      tables.innerHTML += `
        <h3>${sheet.name}</h3>

        <table id=${Helper.textNormalize(sheet.name)}>
          
          <thead>
            <tr>${this._setHeader(sheet.header)}</tr>
          </thead>

          <tbody>${this._setBody(sheet.rows)}</tbody>

        </table>
      
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
}
