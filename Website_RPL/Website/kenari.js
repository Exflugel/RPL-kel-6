document.addEventListener("DOMContentLoaded", function() {
    const dropdownContent = document.querySelector(".dropdown-content");
    const kenariLink = dropdownContent.querySelector('a[href="#"]');
    const sliderContainer = document.querySelector(".slider-container");
    const slider = sliderContainer.querySelector(".slider");
    const kenariImages = [
      "img/kenari1.jpg",
      "img/kenari2.jpg",
      "img/kenari3.jpg",
      "img/kenari4.jpg",
    ];
  
    kenariLink.addEventListener("click", function(event) {
      event.preventDefault();
  
      // Hapus semua gambar di dalam slider
      slider.innerHTML = "";
  
      // Tambahkan gambar kenari ke dalam slider
      kenariImages.forEach(function(imageSrc) {
        const img = document.createElement("img");
        img.src = imageSrc;
        img.alt = "Kenari";
        img.classList.add("kenari-image");
        slider.appendChild(img);
      });
  
      // Geser slider ke posisi awal
      slider.style.transform = "translateX(0)";
    });
  });