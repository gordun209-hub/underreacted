import Link from 'next/link'

import Avatar from './avatar'

const Header = () => {
	return (
		<h2 className=' mb-20 mt-8 grid justify-start p-5 text-4xl  font-bold text-black md:tracking-tighter'>
			<Link href='/'>
				<a className=''>Underreacted</a>
			</Link>

			<Avatar name={'Alihan Aydin'} picture={'/assets/blog/pic.jpeg'} />
		</h2>
	)
}

export default Header
