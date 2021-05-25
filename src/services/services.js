export const getItems = async (limit=5, offset=0) =>{
    try {
        let url = `https://www.breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        
    }
}

export const getItem = async (name) =>{
    try {
        if(name !== ''){
            let url = `https://www.breakingbadapi.com/api/characters?name=${name}`
            const response = await fetch(url)
            const data = await response.json()
            return data
        }else{
            return null
        }
        
    } catch (error) {
        
    }
}

export const getId = async (id) =>{
    try {
        if(id !== ''){
            let url = `https://www.breakingbadapi.com/api/characters/${id}`
            const response = await fetch(url)
            const data = await response.json()
            return data
        }else{
            return null
        }
        
    } catch (error) {

    }
}

export const getQuote = async (name) =>{
    try {
        if(name !== ''){
            let url = `https://www.breakingbadapi.com/api/quote?author=${name}`
            const response = await fetch(url)
            const data = await response.json()
            return data
        }else{
            return null
        }
        
    } catch (error) {

    }
}