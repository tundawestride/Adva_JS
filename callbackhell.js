
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange'
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow'
//         }, 1000)
//     }, 1000)
// }, 1000)

const changebackground = (color, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = color
        doNext && doNext() // เขียนเป็น if ได้
    }, delay)
}

changebackground('red', 1000, () => {
    changebackground('yellow', 1000, () => {
        changebackground('green', 1000, () => {
            changebackground('blue', 1000, () => {
            })
        })
    })
})

fectmovieAPI('DAD', (movies) => {
    savemoviesToDB(movies, () => {
        //if it works, run this:

    }, () => {
        //if it doesn't work, run this:

    })
}, () => {
    //if API is down run this:

})

//Complicated





