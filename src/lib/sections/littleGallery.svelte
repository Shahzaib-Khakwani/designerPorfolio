<script>
    import { gsap } from 'gsap';
    import { onMount } from "svelte";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	gsap.registerPlugin(ScrollTrigger);

    onMount(()=>{
 
        const images = document.querySelectorAll('.actImg');

        images.forEach(image => {
            gsap.from(image, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                scrollTrigger: {
                trigger: image.closest(".imgComp"),
                start: 'top center',
                markers: false
                , 
                once: true
                }
            });
        });
    })

</script>

<div class="relative w-full min-h-screen flex flex-col lg:flex-row 
    px-4 md:px-8 lg:px-16 
    space-y-8 lg:space-y-0 lg:space-x-8 
    justify-center items-center">
    <div class="imgComp w-full lg:w-[30vw] 
        aspect-[4/3] 
        flex justify-center items-center 
        overflow-hidden 
        rounded-lg 
        shadow-lg">
        <enhanced:img 
            class="actImg 
                w-full 
                h-full 
                object-cover 
                transition-transform 
                duration-300 
                hover:scale-110"
            src="/static/showPic1.webp" 
            alt="Gallery Image 1"
        />
    </div>
    <div class="imgComp w-full lg:w-[70vw] 
        aspect-[16/9] 
        flex justify-center items-center 
        overflow-hidden 
        rounded-lg 
        shadow-lg">
        <enhanced:img 
            class="actImg 
                w-full 
                h-full 
                object-cover 
                transition-transform 
                duration-300 
                hover:scale-110"
            src='/static/showPic2.webp' 
            alt="Gallery Image 2"
        />
    </div>
</div>