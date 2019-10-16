import React, { Component } from 'react';

class Header extends Component {

    handleClick = (e) => {
        e.preventDefault();
        this.props.setMode(e.target.dataset.mode);
    };

    render(){
        let crudArr = ["list", "create"];
        let navItem = crudArr.map(
            (txt, index) => (<li key={index}><a href={"/"+txt} data-mode={txt} onClick={this.handleClick}>{txt}</a></li>)
        );
        return (
            <header>
                <ul>
                    { navItem }
                </ul>
            </header>
        );
    }
}

export default Header;
