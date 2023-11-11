// const changeBackgroundPromise = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color
//             resolve()
//         }, delay)
//     })
// }

// // await เพิ่มให้อันบนทำเสร็จก่อนค่อยไปอันล่าง ผลลัพเหมือนกัน
// const rainbow = async () => {
//     await changeBackgroundPromise('red', 1000)
//     await changeBackgroundPromise('yellow', 1000)
//     await changeBackgroundPromise('orange', 1000)
//     changeBackgroundPromise('green', 1000)
// }

//เขียนแบบ Promise
// changeBackgroundPromise('red', 1000)
//     .then(() => changeBackgroundPromise('yellow', 1000)) // ไม่มีกรณี reject
//     .then(() => changeBackgroundPromise('orange', 1000))
//     .then(() => changeBackgroundPromise('green', 1000))

const fakeRequestCallback = (url) => {
    return new Promise((success, failure) => {
        const delay = Math.floor(Math.random() * 4500) + 500 // สุ่มตัวเลข 500-5000
        setTimeout(() => {
            if (delay > 4000) {
                failure('Connection Timeout:(')
            } else {
                success(`Here is your fake data from ${url} `)
            }
        }, delay)
    })
}

const requestAsync = async () => {
    try {
        const res = await fakeRequestCallback('books.com / page1')
        console.log(res) //success จะแสดงค่า แต่ถ้าไม่ใส่ Catch จะ Error
        const res2 = await fakeRequestCallback('books.com / page2')
        console.log(res2)
        console.log('test')
        consolee.log(123) // ถ้ามีอะไรไม่ถูกต้อง จะโยนการแสดงไปที่ catch
    } catch (e) {
        console.log('FAILED!!')
        console.log('Err is', e)
    }
    // return 'SUCCESS!!!'
}

requestAsync()

// การจัดการกับ catch
// try {
//     console.log('test')
//     consolee.log(123) // ถ้ามีอะไรไม่ถูกต้อง จะโยนการแสดงไปที่ catch
// } catch (e) {
//     console.log('FAILED!!')
//     console.log('Err is', e)
// }

// requestAsync()
//     .then((data) => {
//         console.log('BOOKS')
//         console.log(data)
//     })


// แบบ Promise
// fakeRequestCallback('books.com')
//     .then((data) => {
//         console.log('SUCCESS')
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log('FAILED')
//         console.log(err)
//     })
