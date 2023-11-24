// Select Dom 
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const seconds = document.getElementById('seconds')

const clock = setInterval(time = () => {
    const dateNow = new Date();
    let hr = dateNow.getHours()
    let min = dateNow.getMinutes()
    let sec = dateNow.getSeconds()

    // if single number add zero first
    hr = hr.toString().padStart(2, "0")
    min = min.toString().padStart(2, "0")
    sec = sec.toString().padStart(2, "0")

    const timeString = `${hr}:${min}:${sec}`
    hour.textContent = hr
    minute.textContent = min
    seconds.textContent = sec
}, 1000);

