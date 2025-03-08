let state = 0;

function toggleState() {
  state = (state + 1) % 5;

  const bigText = document.getElementById('bigText');
  const description = document.getElementById('description');
  const uiuxLabel = document.getElementById('uiux-label');
  const img1 = document.getElementById('img-1');
  const img2 = document.getElementById('img-2');
  const title1 = document.getElementById('title-1');
  const title2 = document.getElementById('title-2');

  const states = [
    {
      title: "<span class='gray-text'>Crea</span><br><span class='green'>tive.</span>",
      desc: "We design visually engaging brand assets to help you drive and increase conversion rates.",
      img1: "img/Cellules photos creative.png",
      img2: "img/brandingimg.png",
      title1: "Brand identity",
      title2: "Branding",
      btnText: "UI/UX Design"
    },
    {
      title: "<span class='gray-text'>UI/UX.</span><br><span class='green'>Design</span>",
      desc: "We craft intuitive interfaces that elevate user experiences.",
      img1: "https://picsum.photos/300/450?random=11",
      img2: "https://picsum.photos/300/450?random=12",
      title1: "Wireframing",
      title2: "Prototyping",
      btnText: "Web Dev"
    },
    {
      title: "<span class='gray-text'>Web</span><br><span class='green'>Dev.</span>",
      desc: "We build scalable and performant web solutions.",
      img1: "https://picsum.photos/300/450?random=21",
      img2: "https://picsum.photos/300/450?random=22",
      title1: "Front-end",
      title2: "Back-end",
      btnText: "Desktop dev"
    },
    {
      title: "<span class='gray-text'>Desktop</span><br><span class='green'>Dev.</span>",
      desc: "We boost your online presence with strategic marketing.",
      img1: "https://picsum.photos/300/450?random=31",
      img2: "https://picsum.photos/300/450?random=32",
      title1: "SEO",
      title2: "Social Media",
      btnText: "Mobile Dev"
    },
    {
      title: "<span class='gray-text'>Mobile</span><br><span class='green'>Dev.</span>",
      desc: "We create engaging animations to tell your story.",
      img1: "https://picsum.photos/300/450?random=41",
      img2: "https://picsum.photos/300/450?random=42",
      title1: "2D Animation",
      title2: "3D Animation",
      btnText: "Creative"
    }
  ];

  bigText.innerHTML = states[state].title;
  description.textContent = states[state].desc;
  img1.src = states[state].img1;
  img2.src = states[state].img2;
  title1.textContent = states[state].title1;
  title2.textContent = states[state].title2;
  uiuxLabel.textContent = states[state].btnText;
}
