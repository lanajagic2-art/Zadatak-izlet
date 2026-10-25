//unos podataka
let ime=prompt("Unesite vaše ime: ");
let cijena=Number(prompt("Unesite cijenu jedne ulaznice: "));
let br_ulaznica=Number(prompt("Unesite broj ulaznica: "));
let budzet=Number(prompt("Unesite svoj budzet: "));

//izračun i usporedbe
let uk_trosak=cijena*br_ulaznica;
let preostali_iznos=budzet-uk_trosak;

let veci_jednak=budzet>=uk_trosak;
let jednak=budzet===uk_trosak;

//ispis rezultata
let provjera= confirm("Želite li nastaviti s planiranjem izleta? ");
alert("Ime: "+ime+"\n"+"Ukupan trošak: "+uk_trosak+"\n"+"Preostali iznos: "+preostali_iznos+"\n"+"Dovoljno novca: "+veci_jednak+"\n"+"Tocan iznos: "+jednak+"\n"+"Nastavak planiranja: "+provjera);