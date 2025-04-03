
//  scroll animation Effect
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        once: true,
    }); 

    // const items = document.querySelectorAll('.wrapper .item');
    // const totalItems = items.length; 
    // const animationDuration = 30;  

    // items.forEach((item, i) => { 
    //     const delay = (animationDuration / totalItems) * (totalItems - i) * -1;
    //     item.style.animationDelay = `${delay}s`;
    // });


    // const images = [
    //     "./assets/images/bg1.png",
    //     "./assets/images/bg2.png", 
    //     "./assets/images/bg3.png" 
    // ];

    // let currentIndex = 0;
    // const imageElement = document.getElementById("bgImage");

    // function changeBackground() {
    //     currentIndex = (currentIndex + 1) % images.length; 

    //     setTimeout(() => {
    //         imageElement.src = images[currentIndex];  
    //         imageElement.style.opacity = "0.7";  
    //     }, 1000);
    // }

    // setInterval(changeBackground, 800); 

    const container = document.querySelector(".stars-container");
    const starImage = "./assets/images/star.png"; 

   // Menentukan jumlah bintang berdasarkan ukuran layar
   const starCount = window.innerWidth < 1000 ? 15 : 30;

   for (let i = 0; i < starCount; i++) { 
       let star = document.createElement("img");
       star.src = starImage;
       star.classList.add("star");

       let x = Math.random() * window.innerWidth;
       let y = Math.random() * window.innerHeight;

       let size = Math.random() * 30 + 5; 
       let duration = Math.random() * 2 + 1;

       star.style.width = `${size}px`;
       star.style.height = `${size}px`;
       star.style.left = `${x}px`;
       star.style.top = `${y}px`;
       star.style.animationDuration = `${duration}s`;

       container.appendChild(star);
   }

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

