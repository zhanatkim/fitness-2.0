const buttonsContainer = document.querySelector('.faq__controls');
const chaptersContainer = document.querySelector('.faq__content');

function showChapter(evt) {
  if (!evt.target.closest('.faq__button')) {
    return;
  }
  const chaptersItems = Array.from(chaptersContainer.children);
  const currentChapter = chaptersItems.find((el) => el.dataset.id === evt.target.dataset.id);
  if (!currentChapter) {
    return;
  }
  for (let i = 0; i < chaptersContainer.children.length; i++) {
    chaptersContainer.children[i].classList.remove('is-open');
  }
  currentChapter.classList.add('is-open');
}

export const setCurrentChapter = () => {
  buttonsContainer.addEventListener('click', showChapter);
};
