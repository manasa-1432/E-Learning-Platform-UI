// You can later hook this up to show progress dynamically
// or load from localStorage or API

function updateProgress(percent) {
  const fill = document.querySelector('.progress-fill');
  fill.style.width = percent + '%';
  document.querySelector('.progress-section p').textContent = `${percent}% completed`;
}
