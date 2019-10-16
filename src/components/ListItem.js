import React, { Component } from 'react';

class ListItem extends Component {

    clickAnchor = (e) => {
        e.preventDefault();
        const { id, setSelectedID, setMode } = this.props;
        setSelectedID(id);
        setMode("read");
    };

    clickDeleteBtn = () => {
        const { id, remove } = this.props;
        if(window.confirm("정말 삭제하시겠습니까?")){
            remove(id);
        }
    };

    render(){
        const { id, title } = this.props;

        return (
            <tr>
                <td>{id}</td>
                <td><a href="/read" onClick={this.clickAnchor}>{title}</a></td>
                <td><button type="button" onClick={this.clickDeleteBtn}>삭제</button></td>
            </tr>
        );
    }
}

export default ListItem;
