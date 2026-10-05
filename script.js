animateRain();
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', async () => {
  createAudioContext();

  if (audioState.context && audioState.context.state === 'suspended') {
    await audioState.context.resume();
  }

  startButton.classList.add('hidden');
});
