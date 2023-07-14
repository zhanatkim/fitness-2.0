const buttonsContainer = document.querySelector('.faq__controls');
const chaptersContainer = document.querySelector('.faq__content');

function showChapter(evt) {
  for (let i = 0; i < chaptersContainer.children.length; i++) {
    chaptersContainer.children[i].classList.remove('is-open');
  }
  const controlId = evt.target.dataset.id;
  const currentChapter = chaptersContainer.querySelector(`[data-id='${controlId}']`);
  currentChapter.classList.add('is-open');
}

export const setCurrentChapter = () => {
  buttonsContainer.addEventListener('click', showChapter);
};
