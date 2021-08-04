let text = document.getElementById("num");
let clear = document.getElementById("clear")
let sub = document.getElementById("subtract")
let num = 0

text.innerHTML = num

function increase() {
    num++;
    text.innerHTML = num
}

clear.onclick = function() {
    num = 0;
    text.innerHTML = num
}

sub.onclick = function() {
    num--;
    text.innerHTML = num
}