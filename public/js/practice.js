/* Some part of the javascript code in practice page's stopwatch is inspired by youtube tutorial of Tyler Potts*/ 
/* This part is the function where allows the user to operate stopwatch properly*/
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let seconds=0;
let interval=null;

start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);

/* The timer function based on mathematic relationships of seconds, minutes and hours. Then the second ++ loop will help print the time text correctly in stopwatch.*/
function timer(){
  seconds++;

  let hrs = Math.floor(seconds/3600);
  let mins = Math.floor((seconds-(hrs*3600))/60);
  let secs = seconds % 60;

  if (secs<10){
    secs="0"+secs;
  }
  if (mins<10){
    mins="0"+mins;
  }
  if (hrs<10){
    hrs="0"+hrs;
  }
  time_el.innerText=hrs+":"+mins+":"+secs;
}

function start(){
  if(interval){
    return
  }
  interval = setInterval(timer,1000);
}

function stop(){
  clearInterval(interval);
  interval=null;
}

function reset(){
  stop();
  seconds=0;
  time_el.innerText="00:00:00";
}

/* Some part of the javascript code in practice page's metronome is inspired by youtube tutorial of Codes Tutorial*/ 
/*This part is the metronome code. A songslist array is created based on the bpm licks audio in my files folder.*/

const prev = document.querySelector('.icons_prev');
const playpause = document.querySelector('.icons_playpause');
const next = document.querySelector('.icons_next');
const title = document.querySelector('.bpm');
const audio = document.querySelector('audio');

const SongsList = [
  {
    path:"bpm/bpm_60.mp3",
    Songname:"BPM:60",
  },
  {
    path:"bpm/bpm_70.mp3",
    Songname:"BPM:70",
  },
  {
    path:"bpm/bpm_80.mp3",
    Songname:"BPM:80",
  },
  {
    path:"bpm/bpm_90.mp3",
    Songname:"BPM:90",
  },
  {
    path:"bpm/bpm_100.mp3",
    Songname:"BPM:100",
  },
  {
    path:"bpm/bpm_110.mp3",
    Songname:"BPM:110",
  },
  {
    path:"bpm/bpm_120.mp3",
    Songname:"BPM:120",
  },
];

let Songs = false;

/* When user click the pre/play/next button, the audio will be played based on related input. */

function PlaySong(){
  Songs =true;
  audio.play();
  playpause.classList.add('active');
}

function PauseSong(){
  Songs = false;
  audio.pause();
  playpause.classList.remove('active');
}

playpause.addEventListener('click', () =>(Songs ? PauseSong() : PlaySong()));

function LoadSong(SongsList){
  title.textContent = SongsList.Songname;
  audio.src = SongsList.path;
}

let i = 3;
LoadSong(SongsList[i]); 

function PrevSong(){
  i--;
  if(i < 0){
    i = SongsList.length - 1;
  }
  LoadSong(SongsList[i]);
  PlaySong();
}
prev.addEventListener('click', PrevSong);

function NextSong(){
  i++;
  if(i > SongsList.length - 1){
    i = 0;
  }
  LoadSong(SongsList[i]);
  PlaySong();
}
next.addEventListener('click', NextSong);