// console.log('test')
//https://swapi.dev/api/people/1/

// fetch("https://swapi.dev/api/people/1/")
//     .then(res => {
//         // console.log('Resolve', res) //ยังไม่สามารถเข้าถึง response
//         console.log('Resolve1')
//         // res.json().then(data => console.log(data)) // เหมือนเอาผ่าน JSON.parse
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)
//         return fetch("https://swapi.dev/api/people/2/")
//     })
//     .then(res => {
//         console.log('Resolve2')
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('Rejected', err)
//     })

async function makeRequest() {
    try {
        let res = await fetch("https://swapi.dev/api/people/1/")
        let data = await res.json()
        console.log(data)
        let res2 = await fetch("https://swapi.dev/api/people/2/")
        let data2 = await res2.json()
        console.log(data2)
    }
    catch (err) {
        console.log('Error', err)
    }
}

makeRequest()