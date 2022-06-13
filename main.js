setInterval(()=>{
    var hour=document.querySelector(".hShow")
    var min=document.querySelector(".mShow")
    var sec=document.querySelector(".sShow")
    var ampm=document.querySelector(".apShow")
    var hdash=document.getElementById("hdash")
    var mdash=document.getElementById("mdash")
    var sdash=document.getElementById("sdash")
    var hi=document.querySelector(".hi")
    var mi=document.querySelector(".mi")
    var si=document.querySelector(".si")

    var h=new Date().getHours()
    var m=new Date().getMinutes()
    var s=new Date().getSeconds()

    var ap=(h>12) ? "PM" : "AM"
    h=(h>12) ? h-12: h
    h=(h<10) ? "0"+h :h
    m=(m<10) ? "0"+m :m
    s=(s<10) ? "0"+s :s

    hour.innerHTML=h+"<br> <span>HOURS<span>"
    min.innerHTML=m+"<br> <span>MINUTSE<span>"
    sec.innerHTML=s+"<br> <span>SECONDS<span>"
    ampm.innerHTML=ap

    hdash.style.strokeDashoffset=440-440*h/12
    mdash.style.strokeDashoffset=440-440*m/60
    sdash.style.strokeDashoffset=440-440*s/60
    

    hi.style.transform="rotate("+h*30+"deg)"
    mi.style.transform="rotate("+m*6+"deg)"
    si.style.transform="rotate("+s*6+"deg)"

    // "${h*30}" didn't work



})




