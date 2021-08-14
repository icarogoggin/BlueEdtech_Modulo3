import { Link } from 'react-router-dom';

export default function SearchBox(filter) {
  return(
    <div className="app__list__searchbox">
      <div className="app__list__searchbox__container">
        <ul>
          <li><img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png" alt="Personagem"></img></li>
          <li><input type="text" placeholder={filter.placeholder} onChange={filter.action}/></li>
          <Link to="/about"><button>About me</button></Link>
        </ul> 
      </div>
      
    </div>
  )
}