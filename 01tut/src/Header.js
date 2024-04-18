 const Header = () => {
    const nameHandler = () => {
    const names = ['shravya', 'Teja', 'Aarya'] 
    return names[Math.floor(Math.random() * 3)]
  }
  return (
    <header>Hi {nameHandler()}</header>
  )
}

export default Header