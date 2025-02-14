let count = 1;
document.getElementById("radio1").checked = true;

let interval = setInterval(nextImage, 7000);

function nextImage() {
    count++;
    if (count > 6) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

function resetCounter(num) {
    count = num;
    clearInterval(interval); // Limpa o intervalo existente
    interval = setInterval(nextImage, 7000); // Inicia um novo intervalo
    console.log("Counter reset to: " + count);
}
