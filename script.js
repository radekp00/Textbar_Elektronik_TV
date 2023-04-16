function s(mainLine, secondLine) {
    document.getElementById("mainLine").innerHTML = mainLine;
    document.getElementById("secondLine").innerHTML = secondLine;
    console.log("Mainline set as:"+mainLine+", secondLine set as:"+secondLine);
}
function o(){
    document.getElementById("container").classList.remove("closed");
}

function c(){
    document.getElementById("container").classList.add("closed");
}

function ss(i) {
    switch(i){
        case "jt":
            document.getElementById("mainLine").innerHTML = "Jakub Tarczewski - przewodniczący szkoły";
            document.getElementById("secondLine").innerHTML = "Zespół Szkół Elektronicznych w Rzeszowie";
            break;
        case "mn":
            document.getElementById("mainLine").innerHTML = "dyrektor mgr inż. Małgorzata Nowosielska";
            document.getElementById("secondLine").innerHTML = "Zespół Szkół Elektronicznych w Rzeszowie";
            break;
        case "jg":
            document.getElementById("mainLine").innerHTML = "dyrektor mgr inż. Janusz Gudyka";
            document.getElementById("secondLine").innerHTML = "Zespół Szkół Elektronicznych w Rzeszowie";
            break;
        case "rk":
            document.getElementById("mainLine").innerHTML = "dyrektor mgr inż. Robert Kasza";
            document.getElementById("secondLine").innerHTML = "Zespół Szkół Elektronicznych w Rzeszowie";
            break;
        case "jk":
            document.getElementById("mainLine").innerHTML = "Jakub Kuźniar - klasa 1d";
            document.getElementById("secondLine").innerHTML = "Zespół Szkół Elektronicznych w Rzeszowie";
            break;
        case "ad":
            document.getElementById("mainLine").innerHTML = "Adrian Depa - klasa 1g";
            document.getElementById("secondLine").innerHTML = "Zespół Szkół Elektronicznych w Rzeszowie";
            break;
        case "1a":
            document.getElementById("mainLine").innerHTML = "Klasa 1a - technik automatyk";
            document.getElementById("secondLine").innerHTML = "wych. Agnieszka Gonet";
            break;
        case "1c":
            document.getElementById("mainLine").innerHTML = "Klasa 1c - technik elektronik";
            document.getElementById("secondLine").innerHTML = "wych. Elżbieta Miłto";
            break;
        case "1d":
            document.getElementById("mainLine").innerHTML = "Klasa 1d - technik elektronik";
            document.getElementById("secondLine").innerHTML = "wych. Monika Walat";
            break;
        case "1g":
            document.getElementById("mainLine").innerHTML = "Klasa 1g - technik informatyk";
            document.getElementById("secondLine").innerHTML = "wych. Elźbieta Czech";
            break;
        case "1h":
            document.getElementById("mainLine").innerHTML = "Klasa 1h - technik informatyk";
            document.getElementById("secondLine").innerHTML = "wych. Alina Głowacka";
            break;
        case "1i":
            document.getElementById("mainLine").innerHTML = "Klasa 1i - technik informatyk";
            document.getElementById("secondLine").innerHTML = "wych. Paweł Głowacki";
            break;
        case "1j":
            document.getElementById("mainLine").innerHTML = "Klasa 1j - technik informatyk";
            document.getElementById("secondLine").innerHTML = "wych. Maria Materna";
            break;
        case "rudki":
            document.getElementById("mainLine").innerHTML = "Rudki";
            document.getElementById("secondLine").innerHTML = "Zespół Pieśni i Tańca";
            break;

        default:
            document.getElementById("mainLine").innerHTML = "";
            document.getElementById("secondLine").innerHTML = "";
            break;
    }
}