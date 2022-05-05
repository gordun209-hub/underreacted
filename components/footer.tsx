import Container from './container'

const Footer = () => {
	return (
		<footer className='border-t border-neutral-200 bg-neutral-50'>
			<Container>
				<div className='flex flex-col items-center py-28 lg:flex-row'>
					<h3 className='mb-10 text-center font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-[2.5rem]'>
						<a
							href={`https://github.com/gordun209-hub`}
							className='mx-3 font-bold hover:underline'
						>
							Follow me on github.
						</a>
					</h3>
					<div className='flex flex-col items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4'></div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
