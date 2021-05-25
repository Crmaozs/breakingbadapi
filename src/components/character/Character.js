import React, {useState, useEffect} from 'react'
import { getQuote } from '../../services/services'
import './Character.css'

const Character = ({item}) => {

  const [quote, setQuote] = useState([])

  const fetchQuote = async () =>{
    try {
      const data = await getQuote(item.name)
      setQuote(data)
    }catch(error){

    }
  }

  useEffect(() => { 
    fetchQuote()
  }, [])

    return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            {quote.map((item) =>(
              <li><strong>Quote:</strong> {item.quote}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Character
