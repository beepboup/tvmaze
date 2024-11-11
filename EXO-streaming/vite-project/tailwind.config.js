/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
		fontFamily: {
			'bebasNeue': ["Bebas Neue", "sans-serif"],
			'dmSans': ["DM Sans", "sans-serif"]
		  },
		  fontWeight: {
			extralight: '200',
			light: '300',
			regular: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			extrabold: '800',
			black: '900',
		  },

  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},

  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"),('@tailwindcss/line-clamp')],
};

{/* épisodes de la série */}
        {/* <div className="w-full overflow-x-auto pt-5">
          <div className="flex">
            {showData && showData.map((item, index) => (
              <div key={index} className="w-64 flex flex-col border-r-2 px-5">
                <img src={item.show.image?.original} alt={item.show.name} />
                <h3 className="font-bebasNeue text-xl">{item.show.name}</h3>
                <p className="text-sm line-clamp-3" dangerouslySetInnerHTML={{ __html: item.show.summary }} />
              </div>
            ))}
          </div>
        </div> */}
        {/* épisodes de la série */}





	// 	<div className="grid pt-20 grid-cols-3 gap-2 px-5">
	// 	{/* UN SEUL FILM */}
	// 	{showData && showData.map((item, index) => (
	// 	<div className="">
	// 	  <img  src={item.show.image?.original} alt={item.show.name}  className=" w-30 h-40 rounded"></img>
	// 	  <p className="font-bebasNeue tex-xl">{item.show.name}</p>
	// 	</div>
	// 	))}
	//   </div>
