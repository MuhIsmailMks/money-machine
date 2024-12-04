const imageList = [
    './assets/images/$narto_sticker 1.png',
    './assets/images/$narto_sticker 10.png',
    './assets/images/$narto_sticker 2.png',
    './assets/images/$narto_sticker 3.png',
    './assets/images/$narto_sticker 4.png',
    './assets/images/$narto_sticker 5.png',
    './assets/images/$narto_sticker 6.png',
    './assets/images/$narto_sticker 7.png',
    './assets/images/$narto_sticker 8.png',
    './assets/images/$narto_sticker 9.png', 
    './assets/images/$narto_hinata.png', 
    './assets/images/$narto_itachi.png', 
    './assets/images/$narto_naruto.png', 
    './assets/images/$narto_kakashi.png', 
    './assets/images/$narto_sakura.png', 
    './assets/images/$narto_pain.png',  
    './assets/images/$narto_sasuke.png',  
];

// button music
const audioElement = document.getElementById('background-music');
audioElement.volume = .05
document.addEventListener('DOMContentLoaded', function() {
  const btnMusic = document.getElementById("toggle-music-btn")
  let isMusicPlaying = false; 

    btnMusic.addEventListener('click', () => {
    btnMusic.querySelector('span').classList.toggle('hidden');
    if (isMusicPlaying === false) { 
        audioElement.play();
        isMusicPlaying = true;  
    } else { 
        audioElement.pause();
        isMusicPlaying = false;   
    }
    })

})


// copywriting  
let elements = document.querySelectorAll('.writingAnimated');

// textElement

elements.forEach(element => {
    let typed = new Typed(element, {
        strings: [element.dataset.typedStrings],
        typeSpeed: 40,
        smartBackspace: true,
        loop: true
    });
});


function randomizeImage() {
    const randomIndex = Math.floor(Math.random() * imageList.length);
    const randomImage = imageList[randomIndex];
    const displayedImage = document.getElementById('displayedImage');
    const bgimage = document.querySelector('#imageContainer .bg'); 
    const imageLoader = document.querySelector('#imageContainer .loading-image'); 
    // const downloadButton = document.getElementById('downloadButton'); 
    // const downloadLink = document.getElementById('downloadLink');
    const loadingAudio = document.getElementById('loadingAudio'); 
    const randomizeButton = document.getElementById('randomizeButton');
 

    // set element random 
    bgimage.style.display = 'block'; 
    imageLoader.style.display = 'block'; 
    randomizeButton.disabled = true; 
    setTimeout(() => {
        loadingAudio.muted = false; 
    },1000)
    
 
    setTimeout(function() {
        displayedImage.onload = function() { 
            bgimage.style.display = 'none';   
            imageLoader.style.display = 'none'; 
            loadingAudio.style.display = 'none'; 
            // downloadButton.style.display = 'block';
            randomizeButton.disabled = false;
        };
        // set background music

        // set false elemnt
        displayedImage.src = randomImage;
        // downloadLink.href = randomImage;
        loadingAudio.muted = true; 
    }, 2000);  
}




function downloadImage() { 
    const displayedImage = document.getElementById('displayedImage');
    const downloadLink = document.createElement('a');
    downloadLink.href = displayedImage.src;
    downloadLink.download = 'random_image.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
 
// copy btn 
document.addEventListener("DOMContentLoaded", function() { 
    const copyButtons = document.querySelectorAll('.copy-btn');
 
    copyButtons.forEach(function(button) {
        button.addEventListener('click', function() {  
            const input = this.parentElement.querySelector('input[type="text"]');
            input.select();
            document.execCommand("copy");
 
            const originalText = this.textContent; 
            this.textContent = "COPIED";

            // Kembalikan teks setelah 2 detik
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
 
        });
    });
});


// download comics
// Fungsi untuk menangani unduhan gambar
function downloadComicsImage(url) { 
    var link = document.createElement('a');
    link.href = url;
    link.download = 'comic_image.jpg';  
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link);
}

// Menambahkan event li 
document.getElementById('button1').addEventListener('click', function() { 
    let imageUrl = './assets/images/$NARTO_comics 1.png';  
    downloadComicsImage(imageUrl);
});
 
document.getElementById('button2').addEventListener('click', function() { 
    let imageUrl = './assets/images/$NARTO_comics 2.png'; 
    downloadComicsImage(imageUrl);
});
 
document.getElementById('button3').addEventListener('click', function() { 
    let imageUrl = './assets/images/$NARTO_comics 3.png';  
    downloadComicsImage(imageUrl);
});





// question button
const faqs = document.querySelectorAll('.faq .head');

faqs.forEach(faq => {
    faq.addEventListener('click',() => { 
        if (!faq.classList.contains('active')) {
            faqs.forEach(faq => { 
                faq.classList.remove('active');
            });
            faq.classList.add('active');
        } else {
            faq.classList.remove('active');
        }
    });
});
 

//  scroll animation Effect
AOS.init({ 
    once: true
  });   
  
  