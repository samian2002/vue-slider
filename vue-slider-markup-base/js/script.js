const app = Vue.createApp({
    data() {
        return {
            slides: [
                // Dati delle slide
                { image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morales', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.' },
                { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.' },
                { image: 'img/03.webp', title: 'Fortnite', text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.' },
                { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.' },
                { image: 'img/05.webp', title: "Marvel's Avengers", text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay." }
            ],
            activeSlide: 0, // Indice della slide attiva
            autoplayTimer: null // Timer per l'autoplay
        };
    },
    methods: {
        setActiveSlide(index) {
            this.activeSlide = index;
        },
        prevSlide() {
            if (this.activeSlide > 0) {
                this.activeSlide--;
            } else {
                this.activeSlide = this.slides.length - 1;
            }
        },
        nextSlide() {
            if (this.activeSlide < this.slides.length - 1) {
                this.activeSlide++;
            } else {
                this.activeSlide = 0;
            }
        },
        startAutoplay() {
            this.autoplayTimer = setInterval(() => {
                this.nextSlide(); // Cambia slide ogni 3 secondi
            }, 3000);
        },
        pauseAutoplay() {
            clearInterval(this.autoplayTimer); // Interrompe l'autoplay quando il mouse è sopra lo slider
        }
    },
    mounted() {
        this.startAutoplay(); // Inizia l'autoplay non appena l'applicazione è montata
    }
}).mount('#app');
