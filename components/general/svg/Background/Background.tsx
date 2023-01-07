import styles from './Background.module.sass'

export default function Background () {
	
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			preserveAspectRatio="none"
			viewBox="0 0 1920 1080"
			className={ styles.background }
		>
			<rect
				width="100%"
				height="100%"
				className={ styles.back }
			/>
			<path
				d="M 0,35 C 96,115.6 288,438.2 480,438 C 672,437.8 768,40.4 960,34 C 1152,27.6 1248,384 1440,406 C 1632,428 1824,196.4 1920,144L1920 1080L0 1080z"
				className={ styles.mid }
			/>
			<path
				d="M 0,966 C 96,911.2 288,707.2 480,692 C 672,676.8 768,892 960,890 C 1152,888 1248,660.8 1440,682 C 1632,703.2 1824,933.2 1920,996L1920 1080L0 1080z"
				className={ styles.front }
			/>
		</svg>
	)
}