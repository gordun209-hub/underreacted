import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from '@/components/container'
import Layout from '@/components/layout'
import PostBody from '@/components/post/post-body'
import PostHeader from '@/components/post/post-header'
import PostTitle from '@/components/post/post-title'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import PostType from '@/types/post'

type Props = {
	post: PostType
	morePosts: PostType[]
	preview?: boolean
}

const Post = ({ post, preview = true }: Props) => {
	const router = useRouter()
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />
	}
	return (
		<Layout preview={preview}>
			<Container>
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<>
						<article className='mb-32 '>
							<Head>
								<title>{post.title}</title>
							</Head>
							<PostHeader title={post.title} date={post.date} />
							<PostBody content={post.content} />
						</article>
					</>
				)}
			</Container>
		</Layout>
	)
}

export default Post

type Params = {
	params: {
		slug: string
	}
}

export async function getStaticProps({ params }: Params) {
	const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content'])
	const content = await markdownToHtml(post.content || '')

	return {
		props: {
			post: {
				...post,
				content
			}
		}
	}
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug'])

	return {
		paths: posts.map(post => {
			return {
				params: {
					slug: post.slug
				}
			}
		}),
		fallback: false
	}
}
