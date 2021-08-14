import { useEffect, useState } from 'react';
import Card from './Card';
import SearchBox from './SearchBox';
import Pagination from './Pagination';
import imgloading from '../Img/imgloading.gif';

export default function CardList() {

  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(false);
  const [busca, setBusca] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState ("https://rickandmortyapi.com/api/character")
  const [nextPageUrl, setNextPageUrl] = useState ()
  const [prevPageUrl, setPrevPageUrl] = useState ()
  const [pages, setPages] = useState ()

  useEffect(() => {
    const url = currentPageUrl
    setLoading(true)
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setPersonagens(data.results)
      setLoading(false);
      setBusca(data.results)
      setNextPageUrl(data.info.next);
      setPrevPageUrl(data.info.prev);
      setPages(data.info.pages)
    }
    fetchData();
  },[currentPageUrl])

  
const filterPersonagem = (e) => {
  const filtered = busca.filter(item => item.name.includes(e.target.value));
  setPersonagens(filtered)
}

  function nextPage() {
    setCurrentPageUrl(nextPageUrl)
    }
    function prevPage() {
    setCurrentPageUrl(prevPageUrl)
    }
    function goToPage(num) {
    setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`)
    }
    if (loading) return (
      <>
      <img className="loading" src={imgloading} alt="loading"/>
      </>
    )

return(
  <>
  <SearchBox placeholder="search for character..." action={filterPersonagem}></SearchBox>   
    <div className="app__list">  
      {
        loading ? (
        <Card></Card>
        ) : (
          personagens.map( (item) => (
          <Card key={item.name} info={item}></Card>
          ))
          )
          }
    </div>
    <Pagination
      nextPage={nextPageUrl ? nextPage : null}
      prevPage={prevPageUrl ? prevPage : null}
      goToPage={goToPage}
      pages={pages}/>
</>
  );
}