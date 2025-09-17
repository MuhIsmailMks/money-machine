
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

    // kalau klik link di dalam menu -> close menu
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            menu.classList.add('hidden');
        });
    });



});

// copy address
document.querySelectorAll(".copy_address").forEach((copybtn) => {
    copybtn.addEventListener("click", function () {
        let parent = this.closest("div");
        let textSpan = parent.querySelector(".copy-box__text");
        let addressText = textSpan.getAttribute("data-set");

        textSpan.innerHTML = "COPIED";

        setTimeout(() => {
            textSpan.innerHTML = "00000000000000000000000000";
        }, 2000);

        navigator.clipboard.writeText(addressText);
    });
});

