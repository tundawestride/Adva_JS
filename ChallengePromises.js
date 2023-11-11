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
            }, 2000)
        }
    })
}


let iden = whatanumberPromise(8)
iden.then((value) => {
    console.log(`${value} Number`)
})
iden.catch((value) => {
    console.log(`${value} Is Not a number `)
})
