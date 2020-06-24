class Spinner {
  
  static show() {
    let sections = document.querySelectorAll('section')

    for (let section of sections) {
      section.setAttribute('hidden', true)
    }

    let spinner = document.querySelector('.spinner-section')
    spinner.removeAttribute('hidden')
  }

  static hidden() {
    let spinner = document.querySelector('.spinner-section')
    spinner.setAttribute('hidden', true)
  }

}

