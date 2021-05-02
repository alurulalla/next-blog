import PostHeader from "./post-header";
import ReactMarkdown from 'react-markdown';

import classes from './post-content.module.css';

const DUMMY_POST = {
    slug: 'getting-started-with-nextjs',
    image: 'getting-started-nextjs.png',
    title: 'Getting Started with NextJS',
    date: '2022-02-10',
    content: '# This is a first post'
}

const PostContent = () => {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            <ReactMarkdown>
                {DUMMY_POST.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent;