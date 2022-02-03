const audioSrc = [
    {
        name: 'Дрозд',
        src: '/assets/audio/drozd.mp3',
        poster: 'url(assets/img/drozd.jpg)'        
    },
    {
        name: 'Форест',
        src: 'assets/audio/forest.mp3',
        poster: 'url(assets/img/forest.jpg)' 
    },
    {
        name: 'Жаворонок',
        src: 'assets/audio/javoronok.mp3',
        poster: 'url(assets/img/javoronok.jpg)' 
    },
    {
        name: 'Славка',
        src: 'assets/audio/slavka.mp3',
        poster: 'url(assets/img/slavka.jpg)' 
    },
    {
        name: 'Соловей',
        src: 'assets/audio/solovey.mp3',
        poster: 'url(assets/img/solovey.jpg)' 
    },
    {
        name: 'Зарянка',
        src: 'assets/audio/zarynka.mp3',
        poster: 'url(assets/img/zarynka.jpg)' 
    },
];
const btn = document.querySelector('.btn');
const ul = document.querySelectorAll('.item');
const main = document.querySelector('.main');
let currentAudio = audioSrc[0].src;
const audio = new Audio();


function playAudio() {
  audio.src = currentAudio;
  audio.currentTime = 0;
  audio.play();
}
function pauseAudio(){
    audio.pause();
}
let isPlay = 'false';
btn.addEventListener('click',function(){
    if(isPlay == 'false'){
        playAudio();
        isPlay = 'true';
        btn.style.background = 'url(assets/svg/pause.svg)';
    }else{
        pauseAudio();
        isPlay = 'false';
        btn.style.background = 'url(assets/svg/play.svg)';
    }
})
ul.forEach((el) => {
    console.log(currentAudio);
    el.addEventListener('click', () => {
       tmp = audioSrc.find((elm) => {
            if(elm.name == el.innerHTML){
                return elm;
            }
        });
        currentAudio = tmp.src;
        main.style.background = `${tmp.poster}`;
        document.querySelector('.active').classList.toggle('active');
        el.classList.toggle('active');
        if(isPlay == 'true'){
            pauseAudio();
            playAudio();
        }    
    })
})
