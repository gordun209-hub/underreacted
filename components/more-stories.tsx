import PostPreview from '@/components/post/post-preview'
import Post from '@/types/post'

type Props = {
	posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
	return (
		<section>
			<div className='mb-32 max-w-2xl items-center justify-center gap-y-20 text-2xl   '>
				{posts.map(post => (
					<PostPreview
						key={post.slug}
						title={post.title}
						date={post.date}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				))}
			</div>
		</section>
	)
}

export default MoreStories
