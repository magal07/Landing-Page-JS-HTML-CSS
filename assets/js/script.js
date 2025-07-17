document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
  
      if (target) {
        e.preventDefault(); 
        const closeMenu = document.getElementById("close-menu");
        if (closeMenu) closeMenu.checked = false;
  
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

// Slideshow automático
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


