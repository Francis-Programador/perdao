document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     TYPING PRINCIPAL
  ========================= */
  const typingEl = document.getElementById("typing");

  const mainText = `Eu errei contigo.

Não vou tentar suavizar isso nem fugir da responsabilidade.

O que aconteceu quebrou a tua confiança, e eu entendo isso.

Não foi físico, mas foi suficiente para magoar profundamente.

Eu não estou aqui para me justificar.
Estou aqui para assumir e corrigir.`;

  let i = 0;

  function typeText(){
    if(!typingEl) return;

    if(i <= mainText.length){
      typingEl.textContent = mainText.slice(0, i);
      i++;
      setTimeout(typeText, 28);
    }
  }

  setTimeout(typeText, 400);


  /* =========================
     MODAL
  ========================= */
  const modal = document.getElementById("modal");
  const btn = document.getElementById("btn");
  const close = document.getElementById("close");

  function openModal(){
    if(!modal) return;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal(){
    if(!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }

  if(btn) btn.addEventListener("click", openModal);
  if(close) close.addEventListener("click", closeModal);

  if(modal){
    modal.addEventListener("click", (e) => {
      if(e.target === modal) closeModal();
    });

    window.addEventListener("keydown", (e) => {
      if(e.key === "Escape") closeModal();
    });
  }


  /* =========================
     MÚSICA (BOTÃO ÚNICO)
  ========================= */
  const musicBtn = document.getElementById("musicBtn");
  const audio = document.getElementById("song");

  if(musicBtn && audio){
    musicBtn.addEventListener("click", () => {

      if(audio.paused){
        audio.play().catch(()=>{});
        musicBtn.classList.remove("paused");
        musicBtn.querySelector(".icon").textContent = "⏸";
      } else {
        audio.pause();
        musicBtn.classList.add("paused");
        musicBtn.querySelector(".icon").textContent = "▶";
      }

    });
  }


  /* =========================
     ENTRADA DOS CARDS
  ========================= */
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.transform = "translateY(0)";
        entry.target.style.opacity = "1";
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(10px)";
    card.style.transition = "0.5s ease";
    observer.observe(card);
  });


  /* =========================
     HEART ANIMATION
  ========================= */
  const heart = document.querySelector(".heart");

  if(heart){
    setInterval(() => {
      heart.style.transform = "scale(1.2)";
      setTimeout(() => {
        heart.style.transform = "scale(1)";
      }, 200);
    }, 2000);
  }

});