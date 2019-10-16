import React, { Component } from 'react';
import Header from "./Header";
import Create from "./Create";
import Update from "./Update";
import Read from "./Read";
import List from "./List";

class App extends Component {

    getArticleObj = () => {
        const { articles, currentArticleID } = this.props;
        this.obj = articles.filter(obj => {
            if(obj.id === currentArticleID){
                return obj;
            }
            return false;
        });
    };

    getComponent = () => {
        let articleJSX;
        const { articles, mode, lastArticleID } = this.props;
        const { create, update, remove, setSelectedID, setMode, setLastID } = this.props.CRUDActions;
        if(mode === "create"){
            articleJSX = <Create create={create} setLastID={setLastID} lastArticleID={lastArticleID} setMode={setMode} />;
        }else if(mode === "update"){
            articleJSX = <Update update={update} data={this.obj[0]} setMode={setMode} />;
        }else if(mode === "read"){
            articleJSX = <Read data={this.obj[0]} remove={remove} setMode={setMode} />;
        }else if(mode === "list"){
            articleJSX = <List articleList={articles} setSelectedID={setSelectedID} remove={remove} setMode={setMode} />;
        }
        return articleJSX;
    };

    render(){
        this.getArticleObj();
        const { setMode } = this.props.CRUDActions;
        return (
            <div className="Wrapper">
                <Header setMode={setMode}/>
                {this.getComponent()}
            </div>
        );
    }
}

export default App;
