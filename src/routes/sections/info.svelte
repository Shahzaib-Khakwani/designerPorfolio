<script>
        import { gsap } from 'gsap';
    import { onMount } from "svelte";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	gsap.registerPlugin(ScrollTrigger);

    onMount(()=>{
 
        const expBlocks = document.querySelectorAll('.expBlock');

        expBlocks.forEach(block => {
            const expLis = block.querySelectorAll('.expLi');
            
            gsap.from(expLis, {
                opacity: 0,
                y: 100,
                duration: 0.6,
                stagger: 0.2, 
                scrollTrigger: {
                    trigger: block,
                    start: 'top center',
                    markers: false, 
                    once: true
                }
            });
        });
    })

</script>
<div class="relative min-h-[40vh] py-12 sm:py-16 lg:py-0 w-full px-4 sm:px-8 md:px-12 lg:px-16 
    flex flex-col lg:flex-row sm:space-y-6 space-y-8 lg:space-y-0 lg:space-x-8 
    justify-center items-center my-12 sm:my-16">
    
    <div class="expBlock w-full lg:w-1/2 text-center lg:text-start">
        <h1 class="expHeading text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            font-cabinet font-extralight mb-6 sm:mb-8">
            Experience
        </h1>
        <ul class="flex flex-col space-y-4 font-cabinet">
            <li class="expLi flex flex-col sm:flex-row sm:justify-between border-b-2 border-gray-600 pb-4 leading-snug sm:leading-loose text-lg sm:text-xl md:text-2xl">
                Creative Director, Apple Visual <span class="text-gray-500 sm:text-inherit">2018</span> 
            </li>
            <li class="expLi flex flex-col sm:flex-row sm:justify-between border-b-2 border-gray-600 pb-4 leading-snug sm:leading-loose text-lg sm:text-xl md:text-2xl">
                Senior Photographer, Google Projects <span class="text-gray-500 sm:text-inherit">2020</span> 
            </li>
            <li class="expLi flex flex-col sm:flex-row sm:justify-between border-b-2 border-gray-600 pb-4 leading-snug sm:leading-loose text-lg sm:text-xl md:text-2xl">
                Visual Strategy Manager, Samsung <span class="text-gray-500 sm:text-inherit">2021</span> 
            </li>
            <li class="expLi flex flex-col sm:flex-row sm:justify-between border-b-2 border-gray-600 pb-4 leading-snug sm:leading-loose text-lg sm:text-xl md:text-2xl">
                Freelance Photographer <span class="text-gray-500 sm:text-inherit">Present</span> 
            </li>
        </ul>
    </div>

    <div class="expBlock w-full lg:w-1/2 text-center lg:text-start">
        <h1 class="expHeading text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            font-cabinet font-extralight mb-6 sm:mb-8">
            My Gear
        </h1>
        <ul class="flex flex-col space-y-4 font-cabinet">
            <li class="expLi flex flex-col sm:flex-row sm:justify-between border-b-2 border-gray-600 pb-4 leading-snug sm:leading-loose text-lg sm:text-xl md:text-2xl">
                Camera <span class="text-gray-500 sm:text-inherit">Canon EOS 5D Mark IV</span> 
            </li>
            <li class="expLi flex flex-col sm:flex-row sm:justify-between border-b-2 border-gray-600 pb-4 leading-snug sm:leading-loose text-lg sm:text-xl md:text-2xl">
                Lens <span class="text-gray-500 sm:text-inherit">Canon EF 24-70mm f/2.8L II USM</span> 
            </li>
            <li class="expLi flex flex-col sm:flex-row sm:justify-between border-b-2 border-gray-600 pb-4 leading-snug sm:leading-loose text-lg sm:text-xl md:text-2xl">
                Tripod <span class="text-gray-500 sm:text-inherit">Manfrotto BeFree Aluminum</span> 
            </li>
            <li class="expLi flex flex-col sm:flex-row sm:justify-between border-b-2 border-gray-600 pb-4 leading-snug sm:leading-loose text-lg sm:text-xl md:text-2xl">
                Editing Software <span class="text-gray-500 sm:text-inherit">Adobe Lightroom, Photoshop</span> 
            </li>
        </ul>
    </div>
</div>
