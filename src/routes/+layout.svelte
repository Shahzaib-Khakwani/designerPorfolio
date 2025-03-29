<script>
    import { base } from '$app/paths';
	import '../app.css';
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { onMount } from "svelte";
	import Nav from "$lib/components/navbar.svelte"
    import LilGallery from "$lib/sections/littleGallery.svelte";
    import About from "$lib/sections/about.svelte";
    import Info from "$lib/sections/info.svelte";
    import Services from "$lib/sections/services.svelte";
    import Gallery from "$lib/sections/gallery.svelte";
    import Footer from "$lib/sections/footer.svelte";

	gsap.registerPlugin(ScrollTrigger);

	let { children } = $props();

	let images = [
		'pic1.jpg',
		'pic2.jpg',
		'pic3.webp',
		'pic4.webp',
		'pic5.jpg',
		'pic6.jpg',
 		'mainPic.jpg',
	];

	let loaderContainer = $state();
	let isLoadingComplete = $state(false);
	
	onMount(() => {
		
		const tl = gsap.timeline({
			onComplete: () => {
				isLoadingComplete = true;
			}
		});
		
		images.forEach((image, index) => {
			const enhancedImgWrapper = document.createElement('div');
			enhancedImgWrapper.classList.add(
				'absolute', 
				'top-1/2', 
				'left-1/2', 
				'transform', 
				'-translate-x-1/2', 
				'-translate-y-1/2', 
				'w-56', 
				'h-56', 
				'opacity-1'
			);
			
			const enhancedImg = document.createElement('img');
			enhancedImg.src = `${base}/${image}`;
			enhancedImg.classList.add(
				'w-full', 
				'h-full', 
				'object-cover', 
				'object-center'
			);
			
			enhancedImgWrapper.appendChild(enhancedImg);
			loaderContainer.appendChild(enhancedImgWrapper);
			
	
			switch ((index) % 4) {
				case 0:
					tl.from(enhancedImgWrapper, {
						opacity: 0,
						
						xPercent: "-70",
						duration: 0.1,
						ease: 'power2.inOut',
						delay: index * 0.05
					});
					break;
				case 1:
					tl.from(enhancedImgWrapper, {
						opacity: 0,
						
						yPercent: "-70",
						duration: 0.1,
						ease: 'power2.inOut',
						delay: index * 0.05
					});
					break;
				case 2:
					tl.from(enhancedImgWrapper, {
						opacity: 0,
						
						xPercent: "70",
						duration: 0.1,
						ease: 'power2.inOut',
						delay: index * 0.05
					});
					break;
				case 3:
					tl.from(enhancedImgWrapper, {
						opacity: 0,
						
						yPercent: "70",
						duration: 0.1,
						ease: 'power2.inOut',
						delay: index * 0.05
					});
					break;
			}
			
			if (index === images.length - 1) {
				tl.to(enhancedImgWrapper, {
					scale: 7,
					opacity: 1,
					duration: 0.8,
					delay:0.6,
					ease: 'power2.inOut',
				});
			}
		});
	});
</script>


{#if !isLoadingComplete}
	<div 
		bind:this={loaderContainer}
		class="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
	>
	</div>
{/if} 

{#if isLoadingComplete}


	<div class="min-h-screen w-full relative bg-[#F5EFE5]">
		{@render children()}
		<Nav />

		<About/>

		<LilGallery />

		<Info />

		<Services />

		<Gallery />

		<Footer />


	</div>


{/if}








