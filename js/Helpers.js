class Spinner {

  static show() {
    let sections = document.querySelectorAll('section')

    for (let section of sections) {
      View.hide(section)
    }

    View.show(app.spinner)
  }

  static hidden() {
    View.hide(app.spinner)
  }

}

class View {
  static show(element) {
    element.removeAttribute('hidden')
  }

  static hide(element) {
    element.setAttribute('hidden', true)
  }

  static enable(element) {
    element.removeAttribute('disabled')
  }

  static disable(element) {
    element.setAttribute('disabled', true)
  }
}

class Helper {
  static textNormalize(text) {
    return text
      .replace(/\s/g, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
  }
}

