const videoContainer = document.querySelector('.video');
const video = videoContainer.querySelector('.video__player');

function onCoverPlay() {
  if (!video) {
    videoContainer.dataset.isPlaying = 'is-out';
    return;
  }
  videoContainer.dataset.isPlaying = 'is-playing';
  video.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
}

export const videoPlay = () => {
  videoContainer.addEventListener('click', onCoverPlay);
};
