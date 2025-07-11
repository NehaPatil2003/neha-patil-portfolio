
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				portfolio: {
					black: '#0a0a0f',
					'rich-black': '#0f0f14',
					coral: {
						DEFAULT: '#ff8686',
						light: '#ffb3d1',
						neon: '#ff95b6'
					},
					white: '#ffffff',
					'grid-gray': '#dcdce1',
					'gray-dark': '#232328',
					'gray-medium': '#414147'
				},
				pink: {
					300: '#ffb3d1',
					400: '#ff95b6',
					500: '#ff8686'
				},
				rose: {
					300: '#ffa8c8',
					400: '#ff8fb5'
				},
				coral: {
					300: '#ff9aa8',
					400: '#ff8686'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'gentle-float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				'sweet-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 25px rgba(255, 134, 134, 0.4)',
						transform: 'scale(1)' 
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(255, 149, 182, 0.6)',
						transform: 'scale(1.02)' 
					}
				},
				'dreamy-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(255, 134, 134, 0.5), 0 0 40px rgba(255, 149, 182, 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 30px rgba(255, 179, 209, 0.7), 0 0 60px rgba(255, 149, 182, 0.5)' 
					}
				},
				'slide-up-gentle': {
					'0%': { transform: 'translateY(30px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'sweet-sweep': {
					'0%': { transform: 'translateX(-100%) skewX(-15deg)' },
					'100%': { transform: 'translateX(200%) skewX(-15deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gentle-float': 'gentle-float 8s ease-in-out infinite',
				'sweet-pulse': 'sweet-pulse 4s ease-in-out infinite',
				'dreamy-glow': 'dreamy-glow 3s ease-in-out infinite',
				'slide-up-gentle': 'slide-up-gentle 0.8s ease-out',
				'sweet-sweep': 'sweet-sweep 3s ease-in-out infinite'
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif']
			},
			backgroundImage: {
				'sweet-gradient': 'linear-gradient(135deg, #ff8686, #ff95b6, #ffb3d1)',
				'dreamy-gradient': 'linear-gradient(135deg, #ff8686, #ff95b6)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
