document.getElementById("myName").innerHTML =
prompt("Lütfen Adınızı Giriniz.")


function showTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let day = now.getDay();
    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    let week = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
    ];
    let monthName = [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık",
    ];
    let dateTime = ` ${date} ${monthName[month]} ${year} ${week[day]} ${hour}:${minute}:${second}`;
    document.getElementById("myClock").innerHTML = dateTime;
    setTimeout(showTime, 1000);
}

showTime();