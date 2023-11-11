// console.log('test')
//https://swapi.dev/api/people/1/

// axios.get('https://swapi.dev/api/people/1/') // จะได้ data เลยไม่ต้องผ่าน .json
//     .then(res => {
//         console.log('Success', res.data)

//     })
//     .catch(err => {
//         console.log("Error", err)
//     })

// const makeAxiousRequest = async () => {
//     try {
//         const res = await axios.get('https://swapi.dev/api/people/1/')
//         console.log('Success')
//         console.log(res.data.name)
//     } catch (err) {
//         console.log("Error", err)
//     }
// }

// makeAxiousRequest()

// const makeAxiousRequest = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}`)
//         console.log('Success')
//         console.log(res.data.name)
//     } catch (err) {
//         console.log("Error", err)
//     }
// }

// makeAxiousRequest(1)
// makeAxiousRequest(3)
// makeAxiousRequest(5)


// const makeAxiosRequest01 = async () => {
//     try {
//         const config = { headers: { Accept: 'application/json' } } // key: value
//         const res = await axios.get(`https://icanhazdadjoke.com/`, config)
//         console.log('Success')
//         console.log(res.data.joke)
//     } catch (err) {
//         console.log("Error", err)
//     }
// }

// makeAxiosRequest01()

//Creat Joke Page

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } } // key: value
        const res = await axios.get(`https://icanhazdadjoke.com/`, config)
        return res.data.joke
    } catch (err) {
        console.log(err)
        return 'No Joke available :('
    }
}

//Make display bullet point li 

const renderJoke = async () => {
    const jokeString = await getDadJoke()
    const ulEle = document.querySelector('#randomjoke')
    const liEle = document.createElement('li')
    liEle.append(jokeString) //<li>...</li>
    ulEle.append(liEle)
}

//Make button and display the joke

const buttonEle = document.querySelector('button')
buttonEle.addEventListener('click', renderJoke)


