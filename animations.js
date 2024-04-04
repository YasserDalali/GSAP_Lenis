 
        gsap.from('.animated-title', { opacity: 0, duration: 1, y: -50, ease: 'easeInOut' });

        const lenis = new Lenis();

        lenis.on('scroll', (e) => {
            console.log(e);
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);