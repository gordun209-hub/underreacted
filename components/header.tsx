import Link from 'next/link'

const Header = () => {
	return (
		<h2 className='mb-20 mt-8 mr-32 text-center font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter'>
			<Link href='/'>
				<a className='hover:underline'>Underreacted</a>
			</Link>
		</h2>
	)
}

export default Header
