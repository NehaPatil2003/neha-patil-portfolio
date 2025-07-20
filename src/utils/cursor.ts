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
  });
};