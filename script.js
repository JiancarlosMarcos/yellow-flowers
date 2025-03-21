document.addEventListener('DOMContentLoaded', () => {
  const petals = document.querySelectorAll('.petal');
  
  petals.forEach((petal, index) => {
    const rotation = index * 45;
    petal.style.setProperty('--rotation', `${rotation}deg`);
  });
});
