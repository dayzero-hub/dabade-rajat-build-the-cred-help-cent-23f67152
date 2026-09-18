// Each question opens and closes its own answer. Closing the others is the next ticket.
document.querySelectorAll('.accordion-question').forEach((question) => {
  question.addEventListener('click', () => {
    // toggle() returns true when the class is now present, i.e. the answer is hidden.
    const isHidden = question.nextElementSibling.classList.toggle('is-hidden');
    question.setAttribute('aria-expanded', String(!isHidden));
  });
});
