// const whatanumberPromise = async (data) => {
//     if (isNaN(data)) throw 'Text'
//     if (data % 2 !== 0) return console.log(`data '${data}', it is Odd`)
//     // setTimeout(() => {

//     // }, delay)
//     if (data % 2 === 0) return console.log(`data '${data}', it is Even`)
//     setTimeout(() => {

//     }, 2000)
// }


// whatanumberPromise(8)
//     .then(() => {
//         console.log(`Number`)
//     })
//     .catch((value) => {
//         console.log(`is Not a number `)
//     })


const whatanumberPromise = (data) => {
    return new Promise((resolve, reject) => {
        if (isNaN(data)) {
            reject('Text')
        } else if (data % 2 !== 0) {
            setTimeout(() => {
                resolve(`data '${data}', it is Odd`)
            }, 1000)
        } else if (data % 2 === 0) {
            setTimeout(() => {
                resolve(`data '${data}', it is Even`)
            }, 5000)
        }
    })
}

let idennumber = async () => {
    try {
        const response5 = await whatanumberPromise(5)
        console.log(response5)
        const response6 = await whatanumberPromise(6)
        console.log(response6)
        const response7 = await whatanumberPromise(7)
        console.log(response7)
        const responsesomething = await whatanumberPromise('AbC')
        console.log(responsesomething)
    } catch (err) {
        console.log(`${err} Not a number`)
    }
}

idennumber()