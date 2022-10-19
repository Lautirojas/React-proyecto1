import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  addDoc,
  getFirestore,
  getDocs,
  getDoc,
  updateDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXO6ahE7G8JlAuwDozLsnF71gF4jVEvZk",
  authDomain: "react-34755-lautaro.firebaseapp.com",
  projectId: "react-34755-lautaro",
  storageBucket: "react-34755-lautaro.appspot.com",
  messagingSenderId: "890831833945",
  appId: "1:890831833945:web:ca2b740dd10b11d0d49a48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const cargarBaseDeDatos = async () => {
  const promise = await fetch("../json/productos.json");
  const productos = await promise.json();
  productos.forEach(async (producto) => {
    await addDoc(collection(db, "productos"), {
      nombre: producto.nombre,
      categoria: producto.categoria,
      stock: producto.stock,
      precio: producto.precio,
      img: producto.img,
      img1: producto.img1,
      img2: producto.img2,
    });
  });
};

const getProductById = async (id) => {
  const producto = await getDoc(doc(db, "productos", id));
  const prod = [producto.id, producto.data()];
  return prod;
};

const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db, "productos", id), info);
  return estado;
};

const getProducts = async () => {
  const productos = await getDocs(collection(db, "productos"));
  const items = productos.docs.map((producto) => [
    producto.id,
    producto.data(),
  ]);
  return items;
};

const createOrdenDeCompra = async (
  preTotal,
  nombre,
  apellido,
  email,
  dni,
  direccion
) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
    precioTotal: preTotal,
    nombre: nombre,
    apellido: apellido,
    email: email,
    dni: dni,
    direccion: direccion,
  });
  return ordenCompra;
};

const getOrdenCompra = async (id) => {
  const ordenCompra = await getDoc(doc(db, "ordenCompra", id));
};

export {
  cargarBaseDeDatos,
  getProducts,
  getProductById,
  createOrdenDeCompra,
  getOrdenCompra,
};
