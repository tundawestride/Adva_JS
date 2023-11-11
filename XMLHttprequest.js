//https://swapi.dev/api/people/1/

console.log('test')

const req = new XMLHttpRequest()

req.onload = function () {
    console.log('success')
    // console.log(this)
    // const res = this.responseText
    // console.log(res)
    const res = JSON.parse(this.responseText)
    console.log(res)
    console.log(res.name)
}

req.onerror = function () {
    console.log('fail')
    console.log(this)
}

req.open('GET', 'https://swapi.dev/api/people/1/')
req.send()