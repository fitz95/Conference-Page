const arr = [
  {
    name: 'Daniel Middleton',
    image: './assets/img/speaker1.png',
    intro: 'Daniel Middleton ranked 4 ',
    description: 'He is a Minecraft gamer who streams on his Youtube channel DanTDM ',
  },
  {
    name: 'Tyler Blevins',
    image: './assets/img/speaker3.png',
    intro: 'Tyler Blevins ranked 1',
    description: 'The current richest video gamer on the planet and fortnigt streamer',
  },
  {
    name: 'Mark Fischbach',
    image: './assets/img/speaker5.png',
    intro: 'Mark Fischbach ranked 4',
    description: 'Mark Fischbach, is a Youtuber with 25 million Youtube subscribers',
  },
  {
    name: 'PewDiePie (Felix Kjellberg)',
    image: './assets/img/speaker6.png',
    intro: 'PewDiePie ranked 2',
    description: 'Felix “PewDiePie”, with over 108 million subscribers on Youtube',
  },
  {
    name: 'Johan Sundstein ',
    image: './assets/img/speaker4.png',
    intro: 'Johan Sundstein ranked 10',
    description: 'He is a professional DOTA 2 player for the OG team and a team player ',
  },
  {
    name: 'Timothy John Betar',
    image: './assets/img/speaker2.png',
    intro: 'Timothy John Betar ranked 5',
    description: 'He is a Twitch streamer who plays GO, Overwatch, and Fornite.',
  },
];

const speakers = document.getElementById('speakers');
if (speakers != null) {
  arr.forEach((project) => {
    const {
      name,
      image,
      intro,
      description,
    } = project;
    speakers.innerHTML += `
    
        <div class="speakerfloat">
        <div class="image-stack">
        <div class="patternpng">
        </div>
        <div class="presenterpng">
          <img src=${image} alt="project1" class="speakerimg" />
        </div>
      </div>
      <div class="infodiv">
        <h3 class="presenter-name">${name}</h3>
        <p class="small-paragraph red">${intro}</p>
        <hr class="line">
        <p class="small-paragraph">${description}</p>
      </div>
      </div>
        `;
  });
}

const hamburger = document.getElementById('hamburgericon');
const closebutton = document.getElementById('close-icon');

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

hamburger.addEventListener('click', openNav);
closebutton.addEventListener('click', closeNav);