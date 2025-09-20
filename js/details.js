const buttons = document.querySelectorAll(".whatsapp-btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", function(e) {
        e.preventDefault();
        const card = this.closest(".card");
        const title = card.querySelector("h3").innerText; // أخذ النص من العنوان
        const phone = "201019890771"; // رقم الواتس
        const message = `مرحبا، أريد تفاصيل عن المنتج: ${title}`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
      });
    });
