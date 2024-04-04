       const lenis = new Lenis();

        lenis.on('scroll', (e) => {
            console.log(e);
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);


        function getImageFileName() {
            var imageItem = document.getElementById('imageItem');
            var src = imageItem.src;
            var fileName = src.substring(src.lastIndexOf('/') + 1);
            return fileName;
        }
        
        /* ------------------------------------------- */
        window.addEventListener('load', function () {
            gsap.from('.animated-title', {opacity: 0, duration: 1, y: -50 });
        });
        
        function switchItem(link) {


            var imageItem = document.getElementById('imageItem');
            if (getImageFileName() != link) {

                gsap.to(imageItem, {opacity:0, duration: 0.5, x: 900, })

                gsap.to(imageItem, {opacity:1, duration: 0.5, x:0, onStart: function() {
                    imageItem.src = link;}, delay:0.1})
    
    
            }
           

        }