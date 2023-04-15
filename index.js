var time=new Date().getHours()
console.log(time)
var msg=""

if(time>=0 && time<5)
{
    msg="HELLO Good Night";
}
else if(time>=5 && time<12)
{
    msg="HELLO Good Morning";
}
else if(time>=12 && time<17)
{
    msg="HELLO Good Afternoon";
}
else if(time>=17 && time<20)
{
    msg="HELLO Good Evening";
}
else{
    msg="HELLO Good Night";
}

var msg1="MERN Stack Developer"

$(document).ready(function(){
    $(".msg1").html(msg)
    setTimeout(()=>{
        $(".msg1").html(msg1)
    },3000)
})