import AllPosts from '../../components/posts/all-posts';

const AllPostsPage = () => {
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

    return (
        <AllPosts posts={DUMMY_POSTS} />
    )
}

export default AllPostsPage