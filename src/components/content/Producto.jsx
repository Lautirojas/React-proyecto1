import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DetalleProducto from './DetalleProducto';

const Producto = () => {

    const [producto, setproducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        fetch("../json/productos.json")
        .then(response => response.json())
        .then(productos =>{
            const producto1 = productos.find(productoarray => productoarray.id == id)
            console.log(producto1)
            setproducto(producto1)
        })
    }, []);
    
    return (
        <div>
            <DetalleProducto producto={producto}/>
        </div>
    );
}

export default Producto;
