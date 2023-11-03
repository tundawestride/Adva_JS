const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// const res = fakeRequestPromise('book.com/page1')
// res
//     .then(() => {// รอให้ promise fullfilled ก่อน สุ่มด้านบนก่อน แล้วทำงานหลังจาก promise เป็น fullfilled
//         console.log('SUCCESS!!! (page1)')
//         fakeRequestPromise('book.com/page2')
//             .then(() => {
//                 console.log('SUCCESS!!! (page2)')
//                     .then(() => {
//                         console.log('SUCCESS!!! (page3)')
//                     })
//                     .catch(() => {
//                         console.log('FAILED!!!(page3)')
//                     })
//             })
//             .catch(() => {
//                 console.log('FAILED!!!(page2)')
//             })
//     })
//     .catch(() => {
//         console.log('FAILED!!! (page1)') // แสดงต่อเมื่อ promise เป็น fail
//     })

//เขียนแบบสั้นกว่า 

fakeRequestPromise('book.com/page1')
    .then((data) => {
        console.log('SUCCESS!!! (page1)')
        console.log(data)
        return fakeRequestPromise('book.com/page2')
    })
    .then((data) => {
        console.log('SUCCESS!!! (page2)')
        console.log(data)
        return fakeRequestPromise('book.com/page3')
    })
    .then((data) => {
        console.log('SUCCESS!!! (page3)')
        console.log(data)
    })
    .catch((error) => { // เขียน CATCH ตัวเดียว 
        console.log('FAILED!!!')
        console.log(error)
    })


