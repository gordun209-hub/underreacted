import Head from 'next/head'

import Container from '@/components/container'
import HeroPost from '@/components/hero-post'
import Layout from '@/components/layout'
import MoreStories from '@/components/more-stories'
import { getAllPosts } from '@/lib/api'
import Post from '@/types/post'

type Props = {
	allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
	const heroPost = allPosts[0]
	const morePosts = allPosts.slice(1)
	return (
		<>
			<Layout>
				<Head>
					<title>Alanyale07 blogs </title>
				</Head>
				<Container>
					{heroPost && (
						<HeroPost
							title={heroPost.title}
							date={heroPost.date}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)}
					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</Container>
			</Layout>
		</>
	)
}

export default Index

export const getStaticProps = async () => {
	const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt'])

	return {
		props: { allPosts }
	}
}
