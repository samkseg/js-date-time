let theTime = document.createElement("p");
let time = new Date();

const loadTime = () => {
    let currentDate = new Date();

    let secs = pad(currentDate.getSeconds());
    let mins = pad(currentDate.getMinutes());
    let hrs = pad(currentDate.getHours());

    let dateTime = "Idag är det den " + currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + ". Året är " + currentDate.getFullYear() + ". Klockan är " + hrs + ":" + mins + ":" + secs;
    
    theTime.innerHTML = dateTime;
    document.getElementById("dateTimeDisplay").appendChild(theTime);

    function pad(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}
loadTime();
setInterval(loadTime, 1000);
