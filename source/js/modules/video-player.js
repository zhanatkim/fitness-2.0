const videoContainer = document.querySelector('.video');
// const videoButton = videoContainer.querySelector('.video__button');
const video = videoContainer.querySelector('.video__player');
// const videoCover = document.querySelector('.video__placeholder');

// function onCoverStop() {
//   videoContainer.dataset.isPlaying = 'is-stopped';
//   videoButton.dataset.isClosed = 'is-open';
//   // videoContainer.removeEventListener('click', onCoverStop);
// }


function onCoverPlay() {
  videoContainer.dataset.isPlaying = 'is-playing';
  video.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
}

// videoContainer.addEventListener('click', onCoverStop);


// video.contentWindow.postMessage(JSON.stringify({
//   'event': 'command',
//   'func': 'playVideo',
//   'args': [],
// }), '*');
// }

// function onCoverPlay() {
//   if (video.paused) {
//     video.play();
//     videoContainer.dataset.isPlaying = 'is-playing';
//   } else {
//     video.pause();
//     videoContainer.dataset.isPlaying = '';
//     video.load();
//   }
// }

export const videoPlay = () => {
  // videoButton.addEventListener('click', onCoverPlay);
  videoContainer.addEventListener('click', onCoverPlay);
};
