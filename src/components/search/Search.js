import React, {useState} from 'react'
import { getId, getItem } from '../../services/services'
import './Search.css'

const Search = ({getQuery}) => {

    const [text, setText] = useState('')
    const [id, setId] = useState('')

    function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

    const onChangeText = async (ev) => {
        ev.preventDefault()
        setText(ev.target.value)
        if(ev.target.value !== '' || ev.target.value !== ' ' || ev.target.value !== '  '){
            await delay(0.5)
            const data = await getItem(ev.target.value)
            getQuery(data)
        }else{
            getQuery(null)
        }
        
    }

    const onChangeId = async (evt) => {
        evt.preventDefault()
        setId(evt.target.value)
        if(evt.target.value !== ''){
            await delay(0.4)
            const data = await getId(evt.target.value)
            getQuery(data)
        }else{
            getQuery(null)
        }
        console.log(evt.target.value);
    }

    return (
        <section className="in-input">
            <form className="form-control">
                <input type="text" className="input-search" placeholder="Buscar por nombre..." 
                value={text} onChange={onChangeText} autoFocus/>
                <input type="number" className="input-search" placeholder="Buscar por id..." 
                value={id} onChange={onChangeId} autoFocus/>
            </form>
        </section>
    )
}

export default Search
