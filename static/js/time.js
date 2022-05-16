let time = new Date();
function updateTime() {
    alert("This Time Is",time)
    // time.innerHTML = new Date();
    setInterval(updateTime, 5000);
}
updateTime()