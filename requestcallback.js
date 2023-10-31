const fakeRequestCallback = (url, success, failure) => {

    const delay = Math.floor(Math.random() * 4500) + 500 // สุ่มตัวเลข 500-5000

    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url} `)
        }
    }, delay)

}

fakeRequestCallback('books.com', () => {
    console.log('IT WORKS!!!')
}, () => {
    console.log('ERROR!!!')
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