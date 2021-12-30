function delDoba() {
    reset();
    const jobdate = new Date(document.getElementById('job').value);
    const leta = parseInt(document.querySelector('input[name="spol"]:checked').value);
    const danes = new Date();
    danes.setHours(0,0,0,0);
    let joby = jobdate.getFullYear();
    let danesy = danes.getFullYear();
    let konec = new Date(joby+leta, jobdate.getMonth(), jobdate.getDate());
    let feb29 = 0;
    for(;joby<=danesy;joby++){
        let dt = new Date(joby, 1, 29);
        if(dt.getMonth() === 1 && jobdate<=dt && dt<=danes){
            feb29++;
        }
    }
    let doba = (danes - jobdate - feb29 * 86400000) / 31536000000; //1d, 1y
    document.getElementById('dobaaa').innerHTML = doba.toFixed(3);
    let dan = konec.getDate()- danes.getDate();
    if(dan<0) {
        danes.setMonth(danes.getMonth()+1, dan);
        dan = danes.getDate();
        danes.setMonth(danes.getMonth()+1,1);
    }
    let mes = konec.getMonth()-danes.getMonth();
    if(mes<0) {
        danes.setMonth(mes,1);
        mes = danes.getMonth();
        danes.setFullYear(danes.getFullYear()+2);
    }
    let yy = konec.getFullYear()- danes.getFullYear();
    if(yy>=0) {
        document.getElementById('ostalo').innerHTML = 'Do penzije vas še čaka ';
        if (yy>0) {
            document.getElementById('py').innerHTML = yy.toString() + ' let';
        }
        if (mes>0) {
            document.getElementById('pm').innerHTML = mes.toString() + ' mesecev';
        }
        if (dan>0) {
            document.getElementById('pd').innerHTML = dan.toString()+ ' dni';
        }
    }
    else {
        document.getElementById('ostalo').innerHTML = 'Pogoji za penzijo so izpolnjeni!';
    }
    document.getElementById("rez").style.display = "initial";
}
function reset() {
    document.getElementById('py').innerHTML = '';
    document.getElementById('pm').innerHTML = '';
    document.getElementById('pd').innerHTML = '';
}
