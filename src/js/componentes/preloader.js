export default class PreLoader {
    constructor() {
      this.preloader = document.getElementById("preloader");
    }
  
    show() {
      this.preloader.style.display = 'flex';
      gsap.set(this.preloader, { opacity: 1, y: '0%' });
    }
  
    hide() {
      gsap.to(this.preloader, {
        opacity: 0,
        y: '-100%',
        duration: 5,
        ease: "power2.out",
        onComplete: () => {
          this.preloader.style.display = 'none';
        }
      });
    }
  }
  