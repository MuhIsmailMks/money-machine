
//  scroll animation Effect
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        once: true,
    });

    // menu navbar
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu-button');
    const menuLinks = document.querySelectorAll('.menu ul li a'); // ambil semua link dalam menu

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('hidden');
    });
  
    // close menu
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            menu.classList.add('hidden');
        });
    });

  
// slider 
const slideContainers = document.querySelectorAll('.slide-container');
const animationDuration = 30;

slideContainers.forEach(container => {
  const items = container.querySelectorAll('.wrapper .item');
  const totalItems = items.length;

  items.forEach((item, i) => {
    const delay = (animationDuration / totalItems) * (totalItems - i) * -1;
    item.style.animationDelay = `${delay}s`;
  });
});


});

// copy address
document.querySelectorAll(".copy_address").forEach((copybtn) => {
    copybtn.addEventListener("click", function () {
        let parent = this.closest("div");
        let textSpan = parent.querySelector(".copy-box__text");
        let addressText = textSpan.getAttribute("data-set");
        let originalText = textSpan.innerHTML;

        textSpan.innerHTML = "COPIED";

        setTimeout(() => {
            textSpan.innerHTML =  originalText
        }, 2000);

        navigator.clipboard.writeText(addressText);
    });
});

