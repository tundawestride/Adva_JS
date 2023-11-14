let randomnumber = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let numrandom = Math.floor(Math.random() * 100)
            resolve(numrandom)
        }, 3000)
    })
}

randomnumber()
    .then((result) => {
        console.log(`Then Catch = Data is ${result}`)
    })
    .catch((err) => {
        console.log(`Error is ${err}`)
    })


let resultnumber02 = async () => {
    try {
        let resultt = await randomnumber()
        console.log(`Asyn Await = Data is ${resultt}`)
    } catch (errr) {
        console.log(`Error is ${errr}`)
    }
}
resultnumber02()