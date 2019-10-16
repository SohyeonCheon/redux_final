import React, { Component } from 'react';
import ListItem from "./ListItem";

class List extends Component {

    render(){
        const { articleList, setSelectedID, remove, setMode } = this.props;
        const listItem = articleList.map(
            articleList => (<ListItem key={articleList.id} id={articleList.id} title={articleList.title} setSelectedID={setSelectedID} setMode={setMode} remove={remove} />)
        );
        return (
            <div className="list_wrap">
                <table>
                    <tbody>
                    { listItem }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;
