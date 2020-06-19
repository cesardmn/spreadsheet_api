class Service {
  static doPost(params) {

    let header = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(params)
    }

    return fetch(
      'https://script.google.com/macros/s/AKfycbyn-Kz-XVg5V_mPH3iERKlChRFmKJiOkhJknLjPl2BolHpO7X4/exec',
      header
    )
  }

  static read(ssid) {
    let params = {
      ssid: ssid,
      action: 'load'
    }
    return this.doPost(params)
  }
}
