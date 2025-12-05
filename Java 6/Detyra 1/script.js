function shfaqEmriMosha() {
    let emri = prompt("Shkruaj emrin:");
    let mosha = prompt("Shkruaj moshën:");
    alert("Emri: " + emri + ", Mosha: " + mosha);
}
function dyNumra() {
    let x = Number(prompt("Shkruaj një numër:"));
    let y = Number(prompt("Shkruaj edhe një numër:"));
    alert("Shuma e ketyre dy numrave: " + (x + y));
}
function tekOseCift() {
    let num = prompt("Shkruaj një numër:");
    if (num % 2 === 0) alert("Numri është Çift");
    else alert("Numri është Tek");
}
function bashkoFjalet() {
    let f1 = prompt("Shkruaj një fjalë:");
    let f2 = prompt("Shkruaj edhe një fjalë:");
    alert(f1 + " " + f2);
}
function perseritFjalet() {
    let f1 = prompt("Shkruaj një fjalë:");
    let f2 = prompt("Shkruaj edhe një fjalë:");
    alert("Fjala e përsëritur është: " + f1 + " " + f2);
}
function mengjesi() {
    let ushqimi = prompt("Çfarë ke ngrënë për mëngjes?");
    let pija = prompt("Çfarë ke pirë?");
    alert("Ti hëngre: " + ushqimi + " dhe pive: " + pija);
}