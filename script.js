const questions = document.querySelectorAll('.accordion-question');

// The single source of truth: the open question's element, or null when all are closed.
let openQuestion = null;

// Every question is redrawn from openQuestion, so no panel can be left with a stale
// class or a stale aria-expanded when another question is clicked.
function render() {
  questions.forEach((question) => {
    const isOpen = question === openQuestion;
    question.nextElementSibling.classList.toggle('is-hidden', !isOpen);
    question.setAttribute('aria-expanded', String(isOpen));
  });
}

questions.forEach((question) => {
  question.addEventListener('click', () => {
    // Clicking the open question closes it and leaves nothing open.
    openQuestion = question === openQuestion ? null : question;
    render();
  });
});
