// requestPromise()
// .then(()=>{})
// .catch(()=>{})

// new Promise((resolve, reject) => {

// })

// const request = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random()
//         setTimeout(() => {
//             if (rand > 0.7) {
//                 resolve(`REQUEST SUCCESS!!! : ${url}`)
//             } else {
//                 reject('REQUEST FAILED!!!')
//             }
//         }, 1000)
//     })
// }

// request('Try')
//     .then((data) => {
//         console.log('TEST')
//         console.log(`Your data is ${data}`)
//     })
//     .catch((err) => {
//         console.log(`ERR: ${err}`)
//     })

//====ดูการใช้ promise แบบอื่นบ้าง เป็นการเปลี่ยนสี

const changeBackgroundPromise = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
}
changeBackgroundPromise('red', 1000)
    .then(() => changeBackgroundPromise('yellow', 1000)) // ไม่มีกรณี reject
    .then(() => changeBackgroundPromise('orange', 1000))
    .then(() => changeBackgroundPromise('green', 1000))


//เปลี่ยนสี แบบ call back ปกติ
// const changeBackground = (color, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color
//         doNext && doNext()
//     }, delay)
// }

// changeBackground('red', 1000, () => {
//     changeBackground('yellow', 1000, () => {
//         changeBackground('orange', 1000, () => {
//             changeBackground('green', 1000, () => {
//             })
//         })
//     })
// })