import React, { Component } from 'react';

class Create extends Component {

    state = {
        title : "",
        desc : ""
    };

    // static getDerivedStateFromProps(nextProps, prevState){
    //     if (nextProps.lastArticleID !== prevState.id) {
    //         return { id: nextProps.lastArticleID };
    //     }
    //     return null;
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    create = (e) => {
        const { title, desc } = this.state;
        const { create, setMode, setLastID, lastArticleID } = this.props;
        e.preventDefault();

        create({
            id : lastArticleID + 1,
            title : title,
            desc : desc
        });
        setLastID();
        setMode("list");
    };

    render(){
        const { title, desc } = this.state;
        return (
            <div className="create_wrap">
                <form onSubmit={this.create}>
                    <p><input type="text" name="title" onChange={this.handleChange} value={title} /></p>
                    <p><textarea name="desc" onChange={this.handleChange} value={desc}></textarea></p>
                    <input type="submit" value="등록" />
                </form>
            </div>
        );
    }
}

export default Create;
