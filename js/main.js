const runStart = () =>{
    console.log('runStart')
};
const runUpdate = () =>{
    console.log('runUpdate')
};
const runComplete = () =>{
    console.log('runComplete')
};

const timeline = gsap.timeline({
    duration: 1,
    paused: true,
    onStart: runStart,
    onUpdate: runUpdate,
    onComplete: runComplete
});

timeline
    .from(
        'body',{
            backgroundColor: '#fff',
            ease: 'none'
        }
    )
    .fromTo(
        ['h1', '.intro'], {
            y: '-20',
            opacity: 0
        },{
           opacity: 1, y: 0,
           ease: 'power1.out',
           stagger: 0.2     
        },
        '-=0.5'
    )
    .from(
        ['img', 'h2'], {
            opacity:0,
            ease: 'none'
        }
    )
    .fromTo(
        'ul li',{
            opacity: 0,
            y: -20
        },{
            opacity:1,
            y: 0,
            ease: "power1.Out",
            stagger: 0.2 
        }
    );

console.log(timeline.duration()); 
const btnPlay = document.querySelector('#btnPlay');
const btnPause = document.querySelector('#btnPause');
const btnResume = document.querySelector('#btnResume');
const btnReverse = document.querySelector('#btnReverse');
const btnSpeedUp = document.querySelector('#btnSpeedUp');
const btnSlowDown = document.querySelector('#btnSlowDown');
const btnSeek = document.querySelector('#btnSeek');
const btnProgress = document.querySelector('#btnProgress');
const btnRestart = document.querySelector('#btnRestart');

btnPlay.addEventListener('click', () => {
    timeline.play();
});
btnPause.addEventListener('click', () => {
    timeline.pause();
} );
btnResume.addEventListener('click', () => {
    timeline.resume();
} );
btnReverse.addEventListener('click', () => {
    timeline.reverse();
} );
btnSpeedUp.addEventListener('click', () => {
    timeline.timeScale(2);      // mas rapido
} );
btnSlowDown.addEventListener('click', () => {
    timeline.timeScale(0.5);    // mas lento
} );
btnSeek.addEventListener('click', () => {
    timeline.seek(1);   //Salta al min 1
} );
btnProgress.addEventListener('click', () => {
    timeline.progress(0.5); //50% del timeline (0 inicio 1 completo)
} );
btnRestart.addEventListener('click', () => {
    timeline.restart(); 
} );