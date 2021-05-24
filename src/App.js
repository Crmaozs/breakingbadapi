import React, {useEffect, useState} from 'react'
import './App.css';
import Characters from './components/characters/Characters';
import Header from './components/header/Header';
import Search from './components/search/Search';
import { getItems } from './services/services';

function App () {

  const [items, setItems] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState()
  const [query, setQuery] = useState('')

  const fetchItems = async () =>{
    try {
      setIsLoading(true)
      const data = await getItems(5, 5 * page)
      setItems(data)
      setIsLoading(false)
      console.log(data);
      setTotal(Math.ceil(62/5))
    }catch(error){

    }
  }

  const getQuery = (q) => {
    setQuery(q)
  }
  
  useEffect(() => {
    fetchItems()
  },[page])

  return (
    <div>
      <Header />
      <div className="App">
        <Search getQuery={getQuery}/>
        <Characters 
        isLoading={isLoading} 
        items={items} 
        query={query} 
        page={page}
        setPage={setPage}
        total={total}/>
      </div>
    </div>
  );
}

export default App;
