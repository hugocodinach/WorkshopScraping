//Imports
import React, { Component } from 'react';
import './CardComponent.css'

class CardComponent extends Component {

    render() {
        const { siteName, price, img, stock, url } = this.props.options;

        return (
            <div
                className='cardComponentContainer'
                style={{ backgroundImage: "url('" + img + "')" }}
                onClick={()=> window.open(url, "_blank")}>
                <span className='cardComponentText'>{siteName}</span>
                <span className='cardComponentText'>{price + ' - ' + stock}</span>
            </div>
        );
    }
}

export default CardComponent