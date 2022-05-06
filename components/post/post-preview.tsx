import Link from 'next/link'

import DateFormatter from '../date-formatter'

type Props = {
	title: string
	date: string
	excerpt: string
	slug: string
}

const PostPreview = ({ title, date, excerpt, slug }: Props) => {
	return (
		<div className='col-span-2'>
			<h3 className='mb-3 text-3xl leading-snug'>
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a className='font-extrabold text-[#d23669]  hover:underline'>
						{title}
					</a>
				</Link>
			</h3>
			<div className='mb-4 text-lg'>
				<DateFormatter dateString={date} />
			</div>
			<p className='mb-4 text-lg leading-relaxed'>{excerpt}</p>
		</div>
	)
}

export default PostPreview
