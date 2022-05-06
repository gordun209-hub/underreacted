import { ReactNode } from 'react'

type Props = {
	children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
	return (
		<h1 className='mx-auto mb-2 max-w-2xl text-2xl font-bold  leading-tight tracking-tighter text-[#d23669] md:leading-none '>
			{children}
		</h1>
	)
}

export default PostTitle
