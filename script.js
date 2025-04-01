document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro-name");
    const questions = document.querySelectorAll(".question");
  
    questions.forEach(q => q.style.display = "none");
  
    setTimeout(() => {
      intro.style.display = "none";
      questions.forEach(q => {
        if (q.id === "q1") {
          q.classList.add("active");
          q.style.display = "block";
        }
      });
    }, 2200);
  });
  
  function nextQuestion(answer, currentId) {
    if (answer) {
      document.getElementById("q" + currentId).classList.remove("active");
      const next = document.getElementById("q" + (currentId + 1));
      if (next) {
        next.classList.add("active");
      } else {
        showCelebration();
      }
    }
  }
  
  function handleNo() {
    alert("But... but... please?");
  }
  
  function dodgeNo() {
    const noBtn = document.querySelector(".btn.no");
    const container = document.querySelector(".btn-container");
  
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
  
    let randX = Math.random() * (containerRect.width - btnRect.width);
    let randY = Math.random() * (containerRect.height - btnRect.height);
  
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randX}px`;
    noBtn.style.top = `${randY}px`;
  }
  
  function showCelebration() {
    const heart = document.getElementById("heart");
    heart.style.display = "block";
    setTimeout(() => {
      heart.style.display = "none";
      alert("I love you, Zeynep 💘");
    }, 1000);
  
    launchFireworks();
  }
  
  function launchFireworks() {
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        angle: Math.random() * 2 * Math.PI,
        speed: Math.random() * 5 + 2,
        radius: Math.random() * 2 + 2,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`,
        alpha: 1
      });
    }
  
    const interval = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      particles.forEach(p => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.alpha -= 0.01;
  
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${Math.random() * 360}, 100%, 70%, ${p.alpha})`;
        ctx.fill();
      });
  
      if (particles.every(p => p.alpha <= 0)) {
        clearInterval(interval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }, 16);
  }
  