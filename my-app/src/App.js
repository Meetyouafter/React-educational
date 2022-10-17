import { useState } from 'react';
import ClassCounter from './Components/ClassCounter';
import Counter from './Components/Counter';
import PostItem from './Components/PostItem'
import './styles/App.css'

function App() {
  const [posts] = useState([
    {id: 1, descriprion: "JS", body: "JavaScript"},
    {id: 2, descriprion: "CSS", body: "Cascading Style Sheets"},
    {id: 3, descriprion: "HTML", body: "HyperText Markup Language"},
  ])

  return (
    <div className='App'>
      <Counter />
      <ClassCounter />
      <PostItem posts={posts}/>
    </div>

  )
}

export default App;
