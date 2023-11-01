const fakeRequestCallback = (url, success, failure) => {

    const delay = Math.floor(Math.random() * 4500) + 500 // สุ่มตัวเลข 500-5000

    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout:(')
        } else {
            success(`Here is your fake data from ${url} `)
        }
    }, delay)

}

// ด้านล่างคือ fakeRequestCallback = (url, success, failure) ไล่ตามโค้ดด้านบนเลย
// โดย จะสุ่มตัวเลขตามด้านบน Interval ก่อน และจะสุ่มเลข ถ้าได้ตามเงื่อนไข จะเรียก fakeRequestCallback ที่ซ้อนกันไปเรื่อยๆ แต่ถ้า ไม่ตรงตามเงื่อนไข >4000 จะหยุดที่ error แล้วโค้ดจะไม่ทำงานต่อ 

fakeRequestCallback('books.com', (data) => {
    console.log('IT WORKS!!!')
    console.log(data) // มาจากบรรทัดที่ 9
    fakeRequestCallback('books.com/page1', (data1) => {
        console.log('IT WORKS AGAIN')
        console.log(data1)
        fakeRequestCallback('books.com/page2', (data2) => {
            console.log('IT WORKS AGAIN AND AGAIN!!!')
            console.log(data2)
        }, (err2) => {
            console.log('ERROR PAGE2!!!')
            console.log(err2)
        })
    }, (err1) => {
        console.log('ERROR PAGE1!!!')
        console.log(err1)
    })
}, (err) => {
    console.log('ERROR!!!')
    console.log(err) // มาจากบรรทัดที่ 7
})

// makeRequest('books.com', () => {
//     //success
//     makeRequest('books.com/page1', () => {
//         //success page 1
//         makeRequest('books.com/page2', () => {
//             //success page2
//         }, () => {
//             //failed page 2
//         })
//     }, () => {
//         //failed page 1
//     })
// }, () => {
//     //failed
// })