function showTime() {
    let date = new Date()

    let todayOrderInWeek =date.getDay()
    let todayName = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"][todayOrderInWeek+1]
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    
    let time = `${hour}:${minute}:${second} ${todayName}`

    document.getElementById("myClock").innerText = time
}
showTime()
setInterval(showTime,1000)

