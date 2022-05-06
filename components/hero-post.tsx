import Link from 'next/link'

import DateFormatter from './date-formatter'

type Props = {
	title: string
	date: string
	excerpt: string
	slug: string
}

const HeroPost = ({ title, date, excerpt, slug }: Props) => {
	return (
		<section>
			<div className='mb-20 w-3/6 md:mb-28 md:grid md:gap-x-16 lg:gap-x-8'>
				<div>
					<h3 className='mb-4 text-4xl leading-tight lg:text-5xl'>
						<Link as={`/posts/${slug}`} href='/posts/[slug]'>
							<a className='hover:underline'>{title}</a>
						</Link>
					</h3>
					<div className='mb-4 text-lg md:mb-0'>
						<DateFormatter dateString={date} />
					</div>
				</div>
				<div>
					<p className='mb-4 text-lg leading-relaxed'>{excerpt}</p>
				</div>
			</div>
		</section>
	)
}

export default HeroPost
