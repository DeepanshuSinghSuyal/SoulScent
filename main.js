// Hover bounce effect
document.querySelectorAll('.hover-bounce').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.2s ease';
    card.style.transform = 'translateY(-4px)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Card tilt effect
document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });

  card.style.transition = 'transform 0.2s ease';
});

// Product card flip logic
document.querySelectorAll('.product-card').forEach(card => {
  const img = card.querySelector('.perfume-img');
  const details = card.querySelector('.details');
  let autoRevertTimeout;

  const showDetails = () => {
    card.classList.add('show-details');
    clearTimeout(autoRevertTimeout);
    autoRevertTimeout = setTimeout(() => {
      card.classList.remove('show-details');
    }, 3000);
  };

  const hideDetails = () => {
    card.classList.remove('show-details');
    clearTimeout(autoRevertTimeout);
  };

  img.addEventListener('click', () => {
    if (card.classList.contains('show-details')) {
      hideDetails();
    } else {
      showDetails();
    }
  });

  card.addEventListener('mouseenter', () => {
    autoRevertTimeout = setTimeout(() => {
      showDetails();
    }, 3000);
  });

  card.addEventListener('mouseleave', () => {
    clearTimeout(autoRevertTimeout);
  });
});
