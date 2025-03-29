<script>
    import { fly } from "svelte/transition";
    import { quintInOut } from "svelte/easing";
    import { onMount } from "svelte";
    import { gsap } from 'gsap';
	import { ScrollToPlugin } from "gsap/ScrollToPlugin";

	gsap.registerPlugin(ScrollToPlugin);



    let isToggled = $state(false);

    onMount(() => {
    const menuItems = document.querySelectorAll('.menuItem');
    
    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', (e) => {
            e.preventDefault(); 
            console.log(menuItem.dataset.scrollTo);
            gsap.to(window, {
                duration: 1,
                scrollTo: `#${menuItem.dataset.scrollTo}`
            });
        });
    });
});

    function handleMenuItemClick(target) {
    console.log(target);
    gsap.to(window, {
        duration: 1,
        scrollTo: `#${target}`
    });
    
    // Close the mobile menu if it's open
    if (isToggled) {
        isToggled = false;
    }
}

    

</script>

<nav id="NavBar" class="z-50 py-4 px-16 transition-colors duration-500  bg-transparent w-full h-20  fixed top-0 left-0 flex flex-row justify-between ">
    <p class="font-stardom text-3xl ">Astrid</p>
    <ul class="hidden lg:flex flex-row justify-center items-center gap-x-12 ">
        <li>
            <a class="menuItem text-gray-600" href="#" data-scroll-to="about">About</a>
        </li>
        <li>
            <a class="menuItem text-gray-600" href="#" data-scroll-to="services">Services</a>
        </li>
        <li>
            <a class="menuItem text-gray-600" href="#" data-scroll-to="contact">Contact</a>
        </li>
    </ul>


    <button 
    class="lg:hidden z-40 relative w-8 h-6 focus:outline-none"
    onclick={()=>isToggled = !isToggled}
    aria-label="mobileNav"
    >
        <div class="absolute inset-0 flex flex-col justify-between">
            <span class="block w-full h-0.5 bg-gray-600 transition-all duration-500 {isToggled ? 'transform rotate-45 translate-y-2.5' : ''}"></span>
            <span class="block w-full h-0.5 bg-gray-600 transition-all duration-500 {isToggled ? 'opacity-0' : ''}"></span>
            <span class="block w-full h-0.5 bg-gray-600 transition-all duration-500 {isToggled ? 'transform -rotate-45 -translate-y-2.5' : ''}"></span>
        </div>
    </button>

    {#if isToggled}
         <div 
        transition:fly={{y:-50,duration:300,easing:quintInOut}}
        class="lg:hidden  fixed top-0 left-0 w-full h-screen bg-white/95 flex flex-col justify-center items-center space-y-8">

            <a  
            class="text-2xl text-gray-800 hover:text-gray-600 transition-colors"
            onclick={()=>handleMenuItemClick('about')}
            href="#">About</a>

            <a  
            class="text-2xl text-gray-800 hover:text-gray-600 transition-colors"
            onclick={()=>handleMenuItemClick('contact')}
            href="#">Contact</a>

            <a  
            class="text-2xl text-gray-800 hover:text-gray-600 transition-colors"
            onclick={()=>handleMenuItemClick('services')}
            href="#">Services</a>

         </div>
    {/if}

</nav>

