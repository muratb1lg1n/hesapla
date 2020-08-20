
function yaz(sayi){
    document.getElementById("girdi").value = document.getElementById("girdi").value + sayi
}
function esit(){
    document.getElementById("girdi").value = eval(document.getElementById("girdi").value);
    return hesap();
}
function kare(){
    document.getElementById("girdi").value = Math.pow(document.getElementById("girdi").value, 2)
}
function temiz(){
    document.getElementById("girdi").value = ''
}
function sil(){
    document.getElementById("girdi").value= document.getElementById("girdi").value.substring(0, document.getElementById("girdi").value.length-1)
}
function kok(){
    document.getElementById("girdi").value = Math.sqrt(document.getElementById("girdi").value)
    hesap()
}
