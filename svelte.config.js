import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/designerPorfolio' : ''
		},
		prerender: {
			entries: ['/'] 
		}
	}
};

export default config;
