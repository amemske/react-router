import React, {useState, useEffect} from 'react';
import '../App.css';

function ItemDetails({match}) {

    useEffect(()=>{
        fetchitem();
        console.log(match);
    },[])

const [item, setItem] = useState({});

const fetchitem = async () => {
    const data = await fetch(
        `https://jsonplaceholder.typicode.com/users/${match.params.id}`
    );
    const item = await data.json();
    console.log(item);
    setItem(item)
};


    return (
        <div>
             <h2>{item.name}</h2>
             <p>{item.email}</p>
            
        </div>
    );
}

export default ItemDetails;