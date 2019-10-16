import React, { Component } from 'react';

class Update extends Component {

    // static defaultProps = {
    //     data : {
    //         id : 1,
    //         title : "sampleprops",
    //         desc : "sampleprops"
    //     }
    // };

    state = {
        id : this.props.data.id,
        title : this.props.data.title,
        desc : this.props.data.desc
    };

    // static getDerivedStateFromProps(nextProps, prevState){
    //     return {
    //         id: nextProps.data.id,
    //         title: nextProps.data.title,
    //         desc: nextProps.data.desc
    //     };
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    update = (e) => {
        const { id, title, desc } = this.state;
        const { update, setMode } = this.props;
        e.preventDefault();
        update({
            id : id,
            title : title,
            desc : desc
        });
        setMode("list");
    };

    render(){
        const { title, desc } = this.state;
        return (
            <div className="update_wrap">
                <form onSubmit={this.update}>
                    <p><input type="text" name="title" onChange={this.handleChange} value={title} /></p>
                    <p><textarea name="desc" onChange={this.handleChange} value={desc}></textarea></p>
                    <input type="submit" value="수정하기" />
                </form>
            </div>
        );
    }
}

export default Update;
