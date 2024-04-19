 import { useState } from 'react';

 const Header = () => {
     const [name, setName] = useState('Teja');

    const handleNameChange = () => {
    const names = ['shravya', 'Teja', 'Aarya'] 
    const int = Math.floor(Math.random() * 3);
    setName(names[int])
  }

  const handleClick1 = () => {
    console.log('button click');
  }

  const handleClick2 = (e) => {
    console.log('button click', e);
  }  
  const handleClick3 = (e) => {
    console.log(e);
    console.log(e.target.innerText);
  }
  
  return (
    <main>
    <header >Hi {name}</header>
    <button onClick={handleNameChange}>click1</button>

    {/* <header >Hi {handleNameChange()}</header>
    <button onClick={handleClick1}>click1</button>
    <button onClick={() => handleClick2('Teja')}>click2</button>
    <button onClick={(e) => handleClick3(e)}>click3</button> */}
    </main>
  )
}

export default Header