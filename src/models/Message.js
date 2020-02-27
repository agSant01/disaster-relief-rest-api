const tag = '[MessageModel]'

export default {
  // get Initial Msg from Server
  getInitMsg () {
    console.log(tag, 'getInitMsg()')
    if (window.fetch) {
      return fetch('/message', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => res.json())
        .then(json => json.msg)
        .catch(err => { throw new Error(err) })
    }
    // for IE
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('get', '/message', true)
      xhr.setRequestHeader('Content-type', 'application/json')
      xhr.onload = function () {
        let msg = JSON.parse(this.responseText).msg
        resolve(msg)
      }
      xhr.send()
    })
  }
}
