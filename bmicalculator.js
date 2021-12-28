function delDoba() {
    const jobdate = new Date(document.getElementById('job').value);
    const danes = new Date();
    danes.setHours(0,0,0,0);
    let doba = (danes - jobdate) / 31536000000;
    doba = doba.toFixed(3);
    document.getElementById('dobaaa').innerHTML = doba;
}


function doUpokojitve() {
    var zenska = document.getElementById('zenska');
   ........
    const [delovnaDoba, today, zaposlitev] = delDoba();

    if (zenska.checked == true){ //ženska
        var konecDelovneDobe = new Date(zaposlitev);
        konecDelovneDobe.setFullYear(zaposlitev.getFullYear() + 40);

       ....
    } else { //moški
        var konecDelovneDobe = new Date(zaposlitev);
        konecDelovneDobe.setFullYear(zaposlitev.getFullYear() + 45);

        var razlika = new Date(konecDelovneDobe - today);
        .....
    } 
    return [y, m, d];
}

function calculate() {
    
    var ime = document.getElementById('ime');
    .........
 
    var check = false;
    document.getElementById("error0").innerHTML="";
    ........  

    if (ime.value === "") {
        document.getElementById("error0").innerHTML="Napaka - vpišite ime";
        document.getElementById("error0").style.color = "red"; 
        ime.focus();
        check = true;
    }
......
     if (datumRojstva.value === "") {
        document.getElementById("error5").innerHTML="Napaka - vpišite datum rojstva";   
        document.getElementById("error5").style.color = "red"; 
        datumRojstva.focus();
        check = true;
    } 
     if (datumZaposlitve.value === "") {
        document.getElementById("error6").innerHTML="Napaka - vpišite datum prve zaposlitve";   
        document.getElementById("error6").style.color = "red"; 
        datumZaposlitve.focus();
        check = true;
    } 
    if (check == false){
        //izpis podatkov na novem oknu
        document.getElementById('imeSpan').innerHTML = ime;
        var visina = document.getElementById("visina").value;
        var teza = document.getElementById("teza").value;
..........
        document.getElementById("rezultat").innerText=rezultat;

        //rdeči za debelosti, zeleno za normalne, modro za podhranjenje
        if (rezultat < 16.00) {
            document.getElementById("comment").innerHTML = " - Huda nedohranjenost";
            document.getElementById("comment").style.color = "blue"; 
            document.getElementById("rezultat").style.color = "blue"; 
        }
        ..............
        if (rezultat >= 18.50 && rezultat <= 24.99) {
            document.getElementById("comment").innerHTML = " - Normalna telesna teža";
            document.getElementById("comment").style.color = "green"; 
            document.getElementById("rezultat").style.color = "green"; 
        }
       ........
        if (rezultat >= 30.00 && rezultat <= 34.99) {
            document.getElementById("comment").innerHTML = " - Debelost razreda I";
            document.getElementById("comment").style.color = "red"; 
            document.getElementById("rezultat").style.color = "red"; 
        }
        .......

        //izračun delovne dobe
        const [delovnaDoba, today, zaposlitev] = delDoba();

        //izračun časa do upokojitve y let m mesecev in d dni
        const [y, m, d] = doUpokojitve();

        //izpis podatkov na novem oknu
        var imeD = document.getElementById('ime').value;
        document.getElementById('imeSpan').innerHTML = imeD;
       .........

        //prikazovanje in skrivanje div-ov
        var obrazec = document.getElementById('obrazec');
        obrazec.setAttribute("hidden", true);

        var skritiPodatki = document.getElementById('info');
        skritiPodatki.removeAttribute("hidden");

        var skritiHvala = document.getElementById('hvala');
        skritiHvala.removeAttribute("hidden");
    }
}

function done(){
    var skritiPodatki = document.getElementById('info');
    skritiPodatki.setAttribute("hidden", false);

    var obrazec = document.getElementById('obrazec');
    obrazec.removeAttribute("hidden");

    var skritiHvala = document.getElementById('hvala');
    skritiHvala.setAttribute("hidden", false);
}
