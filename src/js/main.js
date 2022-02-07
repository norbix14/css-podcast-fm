document.addEventListener('DOMContentLoaded', () => {
  const emptyAnchors = Array.from(document.querySelectorAll('a[href="#"]'));

  if (emptyAnchors.length > 0) {
    emptyAnchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => e.preventDefault());
    });
  }
});
