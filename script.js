"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let textWord = document.getElementById("teks"),
    canvas = document.getElementById("bg"),
    loveemoji = [
      "💞",
      "💕",
      "💓",
      "💗",
      "💖",
      "💘",
      "💝",
      "🧡",
      "💛",
      "💚",
      "💙",
      "💜",
      "🤎",
      "🖤"
    ];

  let waktu = new Date();

  canvas.height = innerHeight;
  canvas.width = innerWidth;
  let ctx = canvas.getContext("2d");

  class Love {
    constructor() {
      this.reset();
    }
    reset() {
      this.size = Math.floor(Math.random() * 150 + 75);
      this.x = Math.floor(
        Math.random() * (canvas.width - this.size) + this.size
      );
      this.y = canvas.height + this.size;
      this.speed = Math.floor(Math.random() * 5 + 2);
      this.emoji = loveemoji[Math.floor(Math.random() * loveemoji.length)];
    }
    draw() {
      ctx.globalAlpha = 0.8;
      ctx.font = this.size + "px serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.emoji, this.x, this.y);
    }
    update() {
      if (this.y < -this.size) {
        this.reset();
      } else {
        this.y = this.y - this.speed;
      }
      this.draw();
    }
  }

  let arrLove = [];
  setTimeout(function () {
    textWord.style.display = 'none'; 
    document.getElementById('home').style.display= 'none';
    document.getElementById('container').style.display= 'grid';
    for (let i = 0; i < 100; i++) {
        arrLove.push(new Love());
    }
}, 5000);

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerWidth);

    arrLove.forEach((love) => {
      love.update();
    });
  }
  animate();

  const fonts = [
    'Kirang Haerang',
    'Indie Flower',
    'Rye',
     'Amatic SC',
    'Bangers',
    'Fredericka the Great'
  ];
  
  const letters = document.querySelectorAll('.letter');
  
  let count=0;
  
  const rollIntro = () => {
    letters.forEach(letter => {
      
    let randomFontIndex = Math.floor(Math.random() * fonts.length);
      let randomFont = fonts[randomFontIndex];
    
   letter.style.fontFamily=randomFont;
  });
  }
  
  let introAnimation = setInterval(function() {
    rollIntro();
    if(count>15)
      clearInterval(introAnimation);
    count++;
  },350);
  
});