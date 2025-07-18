// document.querySelectorAll('a[href^="#"]').forEach(link => {
//     link.addEventListener("click", function (e) {
//       const targetId = this.getAttribute("href");
//       const target = document.querySelector(targetId);
  
//       if (target) {
//         e.preventDefault(); 
//         const closeMenu = document.getElementById("close-menu");
//         if (closeMenu) closeMenu.checked = false;
  
//         target.scrollIntoView({
//           behavior: "smooth",
//           block: "start"
//         });
//       }
//     });
//   });

// // Slideshow automático
// let count = 1;
// document.getElementById("radio1").checked = true;

// let interval = setInterval(nextImage, 7000);

// function nextImage() {
//     count++;
//     if (count > 6) {
//         count = 1;
//     }

//     document.getElementById("radio" + count).checked = true;
// }

// function resetCounter(num) {
//     count = num;
//     clearInterval(interval); // Limpa o intervalo existente
//     interval = setInterval(nextImage, 7000); // Inicia um novo intervalo
//     console.log("Counter reset to: " + count);
// }

document.addEventListener("DOMContentLoaded", function () {
  new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    }
  });
});

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // quando a largura da janela for >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

