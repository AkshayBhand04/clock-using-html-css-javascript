const updateclock=()=>{
    const now=new Date();
    const hour=String(now.getHours()).padStart(2,'0')
    const minute=String(now.getMinutes()).padStart(2,'0')
    const second=String(now.getSeconds()).padStart(2,'0')
    const date=now.toDateString()

    document.getElementById('date').textContent=date;
    document.getElementById('hour').textContent=hour
    document.getElementById('minute').textContent=minute
    document.getElementById('second').textContent=second
}

setInterval(updateclock,1000);
updateclock()