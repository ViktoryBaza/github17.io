var randomNumber = function fun(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
let rand = randomNumber(1, 9);

if(rand == 1) {
    document.getElementById("printBlock").textContent= "Да";
}
else if(rand == 2) {
    document.getElementById("printBlock").textContent = "Нет";
}
else if(rand == 3) {
    document.getElementById("printBlock").style.left = '140px';
     document.getElementById("printBlock").innerText  ="А вот хуй тебе, а не ответ,"+ '\n' +"лох ебанный";
}
else if(rand == 4) {
    document.getElementById("printBlock").style.left = '140px';
     document.getElementById("printBlock").innerText  ="Тут даже я не ебу";
}
else if(rand == 5) {
    document.getElementById("printBlock").style.left = '130px';
    document.getElementById("printBlock").textContent = "Скорее нет, но ты надейся";
}
else if(rand == 6) {
    document.getElementById("printBlock").textContent = "Да";
}
else if(rand == 7) {
    document.getElementById("printBlock").style.left = '175px';
    document.getElementById("printBlock").textContent = "Пизда";
}
else if(rand == 8) {
    document.getElementById("printBlock").style.left = '163px';
    document.getElementById("printBlock").textContent = "АХАХА..нет.";
}
else if(rand == 9) {
    document.getElementById("printBlock").style.left = '140px';
    document.getElementById("printBlock").textContent = "Мать свою чекни, да";
}
