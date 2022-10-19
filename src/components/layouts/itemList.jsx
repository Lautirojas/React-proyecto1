// import React,{useState,useEffect} from 'react';
// import { Link } from 'react-router-dom';
// import { consultarBDD } from '../../utils/FuncionesUtiles';
// const ItemList = () => {
//         // variable--funcion que 
//         //         --cambia el estado-default value
//     const [producto, setProducto] = useState([]);
//     useEffect(() => {
//         consultarBDD("../json/productos.json").then(productos =>{
//             const cards = productos.map(producto =>{
//                 let carlos = <div className="card" key={producto.id}>
//                                 <Link to={`/productos/${producto.id}`} >
//                                             <img src={"./multimedia/" + producto.img} alt={producto.nombre}/>
//                                         <div className='card-description'>
//                                                 <span className='card-clothes'>{producto.categoria}</span>
//                                                 <h2 className='card-name'>{producto.nombre}</h2>
//                                                 <h2 className='card-price'>${producto.precio}</h2>
//                                                 <span className='card-product'>Ver Productos</span>
//                                         </div>
//                                 </Link>
//                             </div>
//                 return carlos
//             })
//             setProducto(cards)
//         })
//     }, []);
//     return (
//         <>
//             <section className='cards-container'>
//                 <article className="cards">
//                     {producto}
//                 </article>
//             </section>
//         </>
//     );
// }

// export default ItemList;


