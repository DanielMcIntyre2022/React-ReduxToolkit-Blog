import PostsLists from './components/PostsLists';
import './App.css';
import AddPostsForm from './components/AddPostsForm';

function App() {
  return (
    <main className="App">
      <PostsLists/>
      <AddPostsForm/>
    </main>
  );
}

export default App;
