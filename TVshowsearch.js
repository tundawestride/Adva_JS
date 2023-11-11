// console.log('test')
//https://www.tvmaze.com/api
//https://api.tvmaze.com/search/shows?q=girls
//https://axios-http.com/docs/intro

const formEle = document.querySelector('#searchForm')

//1. ทำฟอร์ม
formEle.addEventListener('submit', function (e) {
    e.preventDefault()
    // console.log(formEle)
    const search = formEle.elements.query.value
    console.dir(formEle.elements.query.value) // ดึง input ออกมาจากฟอร์ม ตรงนี้ถ้าย้อนไปหน้าแรกจะเห็นว่า เราตั้งค่า name=query ซึ่งเป็นในส่วนของการรับ input 
    getMovieDetails(search) // ทำฟังชั่นส่งข้อมูลต่อจาก search
})


//2. ส่งข้อมูลไปดึง API มาใช้รูปแบบเป็นฟังชั่น async โดยมีทำงานแบบ Promise คือ Success ที่ try และ Failed ที่ Catch
const getMovieDetails = async (search) => {
    try {
        const config = { params: { q: search } } // key : value รับเอาข้อมูลที่กรอก search ไปหาใน API
        console.log(config)// อันนี้ทดลองดูได้ ผล จะเป็น q: คำที่เราkeyในsearch
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config) // ใช้ axios ที่ติดตั้ง ให้ค้นหาตัว search ที่รับมาจากฟอร์มด้านบน (config) มาหาใน API โดยผ่าน ไลบราลี axios จะได้ข้อมูลเป็น Objects เลยไม่ผ่าน json
        console.log(res) //ข้อมูลทั้งหมดที่ดึงมาจาก API
        console.log(res.config.params) // ก็คือค่าที่เราคีย์ไปในรูปแบบ objects
        //พอส่งไปได้ Objectsที่ต้องการแล้วก็เอาออกมาใช้โดยสร้างฟังชั่นดึงรูป
        console.log(res.data) // อันนี้เป็น data ของ API ที่เราจะดึง โดยเลือกเฉพาะที่ Match กับ config ด้านบน โดยจะแสดง data ทั้งหมดที่ตรงกับที่เราได้พิมพ์ค้นหา จะเห็นว่าส่วนนี้อยู่ในรูปแบบของ Array Objects
        renderImg(res.data) // ทำฟังชั่นให้แสดงรูปออกมาผ่าน .data 
    } catch (err) {
        console.log('Error', err) //แคชแอเร่อ 
    }
}

//ทำให้แสดงรูปออกมา
//คำสั่ง for of เป็นคำสั่งที่ใช้สำหรับวนรอบออบเจ็คที่สามารถวนรอบได้ เช่น อาเรย์และ ใช้เพื่อวนลูปรอบ Iterable Objects โดยเราสามารถกำหนดพฤติกรรมการส่งออกค่าได้ โดย res.data ด้านบนก็คือ Array Objects เราจึงสามารถใช้ for loop ได้ 
const renderImg = (data) => { // สร้างฟังชั่นปกติ โดยดึงข้อมูลมาจาก data call back ด้านบน
    for (let item of data) { // item นี้ตั้งเอง
        if (item.show.image.medium) {
            const imgEle = document.createElement('img') // สร้างรูป
            imgEle.src = item.show.image.medium // มาจากใน data (JSON)
            document.body.append(imgEle) // คือ method ที่ใช้ในการแทรก content ไปไว้ท้ายสุดของ element 
            // console.log(imgEle.src)
            // console.log(item)
            // console.log(item.show.image)
            // console.log(data)
            // console.log(item.show.image.medium) // ตัวรูป
        }
    }
}

