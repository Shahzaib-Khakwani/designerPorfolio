<script>
    import { base } from '$app/paths';
    import { gsap } from 'gsap';
    import { onMount } from "svelte";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import Nav from '$lib/components/navbar.svelte'

	gsap.registerPlugin(ScrollTrigger);

    onMount(()=>{
 

        const heroTimeline = gsap.timeline({
            scrollTrigger:{
                trigger:"#hero",
                start:"top top",
                end:"bottom top",
                scrub:2,
                pin:"#hero",
                markers:false,
                onUpdate: (self) => {
                    if (self.progress > 0.9) {
                        document.getElementById("NavBar").classList.remove('bg-transparent');
                        document.getElementById("NavBar").classList.add('bg-[#F5EFE5]');
                    } else {
                        document.getElementById("NavBar").classList.remove('bg-[#F5EFE5]');
                        document.getElementById("NavBar").classList.add('bg-transparent');
                    }
                }
            }
        })

        heroTimeline.to("#heroImage",{
            scale:0.4,
            aspectRatio:1,
            ease:'power1.inOut',
            objectPosition: "50% 20%"
        })
        .to("#heroNameHeading",{
            xPercent:'-20'
        },"<")
        .to("#heroTitleHeading",{
            xPercent:'20'
        },"<")
    })

</script>

<!-- Hero Section -->
<div id="hero" class="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent">
    <img  
        id="heroImage"
        class="z-20 absolute inset-0 w-full h-full lg:relative lg:h-auto object-cover object-center lg:aspect-square"
        src="{base}/mainPic.jpg"
        alt="mainHero"
    />

    <div class="absolute text-center z-30 px-4 ">
        <h1 
            id="heroNameHeading" 
            class="font-stardom font-medium text-white 
                text-3xl sm:text-5xl md:text-6xl lg:text-8xl 
                leading-tight
                "
        >Astrid GerWeg</h1>
        
        <h2 
            id="heroTitleHeading"
            class="font-stardom 
                text-white
                text-2xl sm:text-4xl md:text-5xl lg:text-8xl 
                tracking-tighter
                "
        >Photography</h2>
    </div>
    
</div>