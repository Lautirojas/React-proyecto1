import React,{useState,useEffect} from 'react';

const ItemList = () => {
        // variable--funcion que 
        //         --cambia el estado-default value
    const [producto, setProducto] = useState([]);
    useEffect(() => {
        async function fetchProduct() {
            let resolve = await fetch("./json/productos.json")
            let data = await resolve.json()
            console.log(data)
            const cards = data.map(producto =>{
                let carlos = <div className="card" key={producto.id}>
                                        <img src={"./multimedia/" + producto.img} alt={producto.nombre}/>
                                    <div className='card-description'>
                                            <span className='card-clothes'>{producto.tipo}</span>
                                            <h2 className='card-name'>{producto.nombre}</h2>
                                            <h2 className='card-price'>{producto.precio}</h2>
                                            <span className='card-product'>Ver Productos</span>
                                    </div>
                            </div>
            return carlos
            })
            return cards
        }
        fetchProduct().then(cards=> setProducto(cards))
    }, []);
    return (
        <>
            <section className='cards-container'>
                <h2 className='card-subtitle'>NAVEGÁ POR CATEGORIAS</h2>
                <article className="cards">
                    {producto}
                </article>
            </section>
        </>
    );
}

export default ItemList;


