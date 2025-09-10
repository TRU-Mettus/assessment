// Scroll animation
const sections = document.querySelectorAll('.section');
const nodes = document.querySelectorAll('.node');

function revealSections() {
  const windowBottom = window.innerHeight + window.scrollY;
  sections.forEach(section => {
    if(windowBottom > section.offsetTop + 50){
      section.classList.add('section-visible');
    }
  });

  nodes.forEach((node,index) => {
    const nodeTop = node.offsetTop;
    if(windowBottom > nodeTop + 50){
      setTimeout(()=>{
        node.style.opacity = 1;
        node.style.transform = 'translateY(0)';
      }, index*300);
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);
