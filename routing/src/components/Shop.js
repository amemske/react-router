import React, {useState, useEffect} from 'react';
import '../App.css';
import { Link} from 'react-router-dom'


function Shop(props) {

    useEffect(()=>{
        fetchdata();
    },[])

    const [items, setItems] = useState([]);

const fetchdata = async () => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    );
    const items = await data.json()
    console.log(items);
    setItems(items)
};

    return (
        <div>
            <h2>Shop page</h2>
            {items.map(item => (
                <h3 key={item.id}>
                    <Link to={`/shop/${item.id}`}>{item.name}</Link>
                    </h3>
            ))}
        </div>
    );
}

export default Shop;