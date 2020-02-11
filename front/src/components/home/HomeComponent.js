//Imports
import React, { Component } from 'react';
import CardComponent from '../card/CardComponent'
import './HomeComponent.css'

class HomeComponent extends Component {

    render() {
        const { cards } = this.props;

        return (
            <div className='homeComponentContainer'>
                {cards.map((el, key) => <CardComponent options={el} key={key} />)}
            </div>
        );
    }
}

export default HomeComponent