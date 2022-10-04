import React,{useEffect,useState} from 'react';
import { useParams, Link} from 'react-router-dom';
import { consultarBDD } from '../../utils/FuncionesUtiles';

const Categoria = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        consultarBDD("../json/productos.json").then(producto =>{
        const productoscategoria = producto.filter(productos => productos.categoria === id)
        console.log(productoscategoria)
            const cards = productoscategoria.map(producto =>{
                let carlos = <div className="card" key={producto.id}>
                                <Link to={`/productos/${producto.id}`} >
                                            <img src={"../multimedia/" + producto.img} alt={producto.nombre}/>
                                        <div className='card-description'>
                                                <span className='card-clothes'>{producto.categoria}</span>
                                                <h2 className='card-name'>{producto.nombre}</h2>
                                                <h2 className='card-price'>${producto.precio}</h2>
                                                <span className='card-product'>Ver Productos</span>
                                        </div>
                                </Link>
                            </div>
                return carlos
            })
            setProducto(cards)
        })
    }, [id]);

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

export default Categoria;
