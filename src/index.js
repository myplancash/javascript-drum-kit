function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audio) return; // STOP THE FUNCTION FOR RUNNING ALL TOGETHER
  audio.currentTime = 0; // rewind from the start;
  audio.play();
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove("playing")
}

const keys = document.querySelectorAll(".key");

keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition)
});

window.addEventListener('keydown', playSound);


//when you have an array of elements tou can not listen all of them you must explicity loop over every single element
