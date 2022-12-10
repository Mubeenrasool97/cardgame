import { useState } from 'react'
import Card from './Card'

function Cards(){
    const [items, setItems] = useState([
        { id: 1, img: '/img/mango.jpeg'},
        { id: 1, img: '/img/mango.jpeg'},
        { id: 2, img: '/img/graps.jpeg'},
        { id: 2, img: '/img/graps.jpeg'},
        { id: 3, img: '/img/apple.jpeg'},
        { id: 3, img: '/img/apple.jpeg'},
        { id: 4, img: '/img/banan.jpeg'},
        { id: 4, img: '/img/banan.jpeg'},
        { id: 5, img: '/img/images.jpeg'},
        { id: 5, img: '/img/images.jpeg'},
        { id: 6, img: '/img/orange.jpeg'},
        { id: 6, img: '/img/orange.jpeg'},
        { id: 7, img: '/img/peachh.jpeg'},
        { id: 7, img: '/img/peachh.jpeg'},
        { id: 8, img: '/img/water.jpeg'},
        { id: 8, img: '/img/water.jpeg'}
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id === items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
    )
}

export default Cards