import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from '../features/posts/postsSlice';

function AddPostsForm() {

    const dispatch = useDispatch();

    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');
    const [ userId, setUserId ] = useState();

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content)
            )
            setTitle('')
            setContent('')
        }
    };

  return (
    <section>
        <h2>Add a New Post</h2>
        <form>
            <label htmlFor='postTitle'>Post Title:</label>
            <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
            />  
          
            <label htmlFor='postContent'>Content:</label>
            <input
            type="text"
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
            />
            <button 
            type="button"
            onClick={onSavePostClicked}
            >Save Post</button>
        </form>
    </section>
  )
}

export default AddPostsForm;