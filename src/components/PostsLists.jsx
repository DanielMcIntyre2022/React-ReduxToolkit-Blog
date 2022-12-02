import { useSelect, useSelector } from 'react-redux';
import { selectAllPosts } from '../features/posts/postsSlice';

function PostsLists() {

    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => (
        <article key={posts.id}>
            <h3>{posts.title}</h3>
            <p>{posts.content.substring(0,100)}</p>
        </article>
    ))

  return (
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostsLists;