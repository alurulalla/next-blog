import FeaturedPost from "../components/home-page/Featured-Post";
import Hero from "../components/home-page/Hero";

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    image: 'getting-started-nextjs.png',
    title: 'Getting Started with NextJS',
    excerpt: 'NextJS is the React framework for production -it makes building fullstack React',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs2',
    image: 'getting-started-nextjs.png',
    title: 'Getting Started with NextJS',
    excerpt: 'NextJS is the React framework for production -it makes building fullstack React',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs3',
    image: 'getting-started-nextjs.png',
    title: 'Getting Started with NextJS',
    excerpt: 'NextJS is the React framework for production -it makes building fullstack React',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs4',
    image: 'getting-started-nextjs.png',
    title: 'Getting Started with NextJS',
    excerpt: 'NextJS is the React framework for production -it makes building fullstack React',
    date: '2022-02-10'
  }
];

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPost posts={DUMMY_POSTS} />
    </>
  );
}
