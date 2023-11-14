// console.log('test')
//https://api.publicapis.org/entries?title=cat

const formElement = document.querySelector('#searchForm')

//1.Make form recieving data
formElement.addEventListener('submit', function (sent) {
    sent.preventDefault()
    const search = formElement.elements.query.value
    // console.log(formElement.elements.query.value)
    console.dir(formElement.elements.query.value)
    GetApiDetailByTitle(search) // Make input call to API
})

//2.Make input request data to API, using Async function
async function GetApiDetailByTitle(search) {
    try {
        const titlesearch = { params: { title: search } }
        console.log(titlesearch) // test if input above is showing here
        const getAPIfromtitlesearch = await axios.get(`https://api.publicapis.org/entries?title`, titlesearch)
        console.log(getAPIfromtitlesearch) // test if data is appear from API
        console.log(getAPIfromtitlesearch.data) // Array objects from API
        ShowResultFromAPI(getAPIfromtitlesearch.data) // Make result function 
    } catch (err) {
        console.log('Error!!!', err)
    }
}

//3. Show results from API detail after searched, using function within for loop (because these data are objects)
function ShowResultFromAPI(data) {
    // console.log(data.entries[0]) //Test API detail index 0 
    // console.log(data.entries.length)
    if (data.entries !== null) {
        for (const API of data.entries) {
            apishow = JSON.stringify(API)
            //Making display flex card
            const selectdisplay = document.querySelector('#displayAPI')
            const cardapi = document.createElement('p')
            cardapi.append(apishow)
            selectdisplay.append(cardapi)
        }
    } else {
        const notfoundtext = 'Not Found API'
        document.body.append(notfoundtext)
    }
}


