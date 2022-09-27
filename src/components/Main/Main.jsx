import React from 'react';
import "../../css/main.css";
import Item from './item.jsx';
import ItemList from './itemList';
import Itemlistcontainer from './itemlistContainer';

const Main = () => {
    return (
        <div>
            <>
                <ItemList/>
                <Item/>
                <Itemlistcontainer/>
            </>
        </div>
    );
}

export default Main;
