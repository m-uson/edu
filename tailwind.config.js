/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.html"],
	theme: {
		extend: {
			colors: {
				"c-86": "#086CF9",
				"c-22": "#222222",
				"c-33": "#333333",
				"c-55": "#555555",
				"c-44": "#444444",
				"c-ec": "#ECF4FF",
				"c-ef": "#EFEFEF",
				"c-d3": "#D3E5FE",
				"c-bf": "#BFBFBF",
				b: " #E9E8E8",
			},
			backgroundImage: {
				content: "url('/src/image/content.jpg')",
			},
			boxShadow: {
				sh: "0px 11px 35px rgba(0, 0, 0, 0.08)",
			},
		},
		screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1024px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "800px" },
			// => @media (max-width: 800px) { ... }

			sm: { max: "640px" },
			// => @media (max-width: 640px) { ... }

			mos: { max: "425px" },
			// => @media (max-width: 425px) { ... }

			mo: { max: "375px" },
			// => @media (max-width: 375px) { ... }
		},
		container: {
			padding: "10px",
			overflow: "hidden",
			center: true,
		},
	},
	plugins: [],
};
