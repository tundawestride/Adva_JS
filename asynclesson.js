// async function hello() {
//     throw new Error('FAILED');
// }

// async function hello() {
//     return 'hello';
// }

// async function hello() {
//     return
// }

// async function test() {
//     return 'Hello'
// }

//เขียนอีกแบบ
// const testArrow = async () => {

// }

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'hello') return 'WELCOME'
    throw 'Invalid Password'
}

login('test', 'hello123')
    .then((data) => {
        console.log('SUCCESS:D', data)
    })
    .catch((error) => {
        console.log('FAILED!!', error)
    })