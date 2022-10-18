import { useRef, useState } from 'react';
import ClassCounter from './Components/ClassCounter';
import Counter from './Components/Counter';
import PostItem from './Components/PostItem'
import MyButton from './Components/UI/Button/MyButton';
import MyInput from './Components/UI/Input/MyInput';
import './styles/App.css'

function App() {
  const [posts] = useState([
    {id: 1, descriprion: "JS", body: "JavaScript"},
    {id: 2, descriprion: "CSS", body: "Cascading Style Sheets"},
    {id: 3, descriprion: "HTML", body: "HyperText Markup Language"},
  ])

  const [text, setText] = useState('')

  const bodyInputRef = useRef();

  const addNewPost = () => {
    console.log(text)
    console.log(bodyInputRef.current.value)
  }

  return (
    <div className='App'>
      <Counter />
      <ClassCounter />
      <PostItem posts={posts}/>
      <MyButton disabled={false} onClick={addNewPost}>Create Post</MyButton>
      {/* Управляемый компонент */}
      <MyInput 
        value={text}  
        onChange={(e) => setText(e.target.value)} 
        type="text" 
        placeholder="Description"/>
      {/* Неуправляемый компонент */}
      <MyInput 
        type="text" 
        placeholder="Body"
        ref={bodyInputRef}/>
    </div>

  )
}

export default App;
