function delDoba() {
    const jobdate = new Date(document.getElementById('job').value);
    const danes = new Date();
    danes.setHours(0,0,0,0);
    let joby = jobdate.getFullYear();
    let danesy = danes.getFullYear();
    let konec = new Date(joby+100, jobdate.getMonth(), jobdate.getDate());
    let feb29 = 0;
    for(;joby<=danesy;joby++){
        let dt = new Date(joby, 1, 29);
        if(dt.getMonth() === 1 && jobdate<=dt && dt<=danes){
            feb29++;
        }
    }
    let doba = danes - jobdate - feb29 * 86400000; //1d
    doba = doba / 31536000000; //1y

    document.getElementById('dobaaa').innerHTML = doba.toFixed(3);


    let res = document.querySelector('input[name="spol"]:checked').value;



    document.getElementById('penzi').innerHTML = res;
}
