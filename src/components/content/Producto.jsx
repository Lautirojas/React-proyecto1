import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../utils/FuncionesUtiles';
import DetalleProducto from './DetalleProducto';
// "../json/productos.json"
const Producto = () => {

    const [producto, setproducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        consultarBDD("../json/productos.json").then(productos =>{
            const producto1 = productos.find(productoarray => productoarray.id === parseInt(id))
            console.log(producto1)
            setproducto(producto1)
        })
    }, [id]);
    
    return (
        <div>
            <DetalleProducto producto={producto}/>
        </div>
    );
}

export default Producto;
