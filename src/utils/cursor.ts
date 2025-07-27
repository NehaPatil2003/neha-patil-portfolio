// Cursor tracking utility
let mouseX = 0;
let mouseY = 0;

export const initializeCursor = () => {
  // Track mouse movement
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Update cursor position
    const cursor = document.querySelector('body::before') as HTMLElement;
    const trail = document.querySelector('body::after') as HTMLElement;
    
    // Use CSS custom properties to update position
    document.documentElement.style.setProperty('--cursor-x', `${mouseX}px`);
    document.documentElement.style.setProperty('--cursor-y', `${mouseY}px`);
    
    // Create multiple sparkles (5-6) when cursor moves
    createSparkles(mouseX, mouseY);
  });
};

// Create sparkle effects
const createSparkles = (x: number, y: number) => {
  const sparkleCount = Math.floor(Math.random() * 2) + 4; // 4-5 sparkles
  
  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'cursor-sparkle';
    sparkle.style.left = `${x + (Math.random() - 0.5) * 20}px`;
    sparkle.style.top = `${y + (Math.random() - 0.5) * 20}px`;
    
    document.body.appendChild(sparkle);
    
    // Remove sparkle after animation
    setTimeout(() => {
      if (sparkle.parentNode) {
        sparkle.parentNode.removeChild(sparkle);
      }
    }, 1000);
  }
};