const videoContainer = document.querySelector('.video');
const video = videoContainer.querySelector('.video__player');
const placeholder = videoContainer.querySelector('.video__placeholder');

function onCoverPlay() {
  if (!video) {
    videoContainer.dataset.isPlaying = 'is-out';
    return;
  }
  videoContainer.dataset.isPlaying = 'is-playing';
  const videoPlayer = document.createElement('iframe');
  videoPlayer.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  videoPlayer.setAttribute('title', 'YouTube video player');
  videoPlayer.setAttribute('allow', 'autoplay');
  videoPlayer.setAttribute('allowfullscreen', 'true');
  videoPlayer.setAttribute('width', '364');
  videoPlayer.setAttribute('heigth', '228');
  video.append(videoPlayer);
  placeholder.remove();
}

export const videoPlay = () => {
  videoContainer.addEventListener('click', onCoverPlay);
};
