import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Respon extends Component {

    constructor(props) {
        super(props)
    };

    render () {
        const Two = (id) => {
            let element = document.getElementById(id);
            ReactDOM.findDOMNode(element).props.className.remove("col-lg-3 col-lg-2");
            ReactDOM.findDOMNode(element).props.className.add("col-lg-5 m-1")
        };
    
        const Three = (id) => {
            let element = document.getElementById(id);
            ReactDOM.findDOMNode(element).classList.remove("col-lg-5 col-lg-2");
            ReactDOM.findDOMNode(element).classList.add("col-lg-3 m-1")
        };
    
        const Six = (id) => {
            let element = document.getElementById(id);
            ReactDOM.findDOMNode(element).classList.remove("col-lg-5 col-lg-3 m-1");
            ReactDOM.findDOMNode(element).classList.add("col-lg-2")
        };

        return (
            <div className="align-self-end">
                <button onClick={ Two }>2</button>
                <button onClick={ Three }>3</button>
                <button onClick={ Six }>6</button>
            </div>
        )
    }
}
export default Respon;