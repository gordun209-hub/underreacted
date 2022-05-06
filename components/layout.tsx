import Link from 'next/link'

import Footer from './footer'
import Header from './header'
import Meta from './meta'

type Props = {
	preview?: boolean
	children: React.ReactNode
}

const Layout = ({ children, preview }: Props) => {
	return (
		<>
			<Meta />
			<div className=' flex min-h-screen items-center justify-center'>
				<div>
					{!preview && <Header />}
					{preview && (
						<h2 className=' mb-20 mt-8 grid justify-start p-5 text-2xl font-bold  text-fuchsia-600  md:tracking-tighter'>
							<Link href='/'>
								<a className=''>Underreacted</a>
							</Link>
						</h2>
					)}
					<main>{children}</main>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Layout
