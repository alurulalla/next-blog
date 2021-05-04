import Head from 'next/head';

import FeaturedPost from "../components/home-page/Featured-Post";
import Hero from "../components/home-page/Hero";
import { getFeaturedPosts } from '../lib/post-util';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Murali' Blog</title>
        <meta name='description' content='I post about programming and web development' />
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}