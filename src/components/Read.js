import React, { Component } from 'react';

class Read extends Component {

    static defaultProps = {
        data : {
            title : "SampleTitle",
            desc : "SampleDesc"
        }
    };

    clickDeleteBtn = (e) => {
        const { setMode, data, remove } = this.props;
        if(window.confirm("정말 삭제하시겠습니까?")){
            remove(data.id);
        }
        setMode("list");
    };

    handleClick = () => {
        this.props.setMode("update");
    };

    render(){
        const { title, desc } = this.props.data;
        return (
            <article className="read_wrap">
                <p>{title}</p>
                <p>{desc}</p>
                <div className="btn_wrap">
                    <button type="button" onClick={this.handleClick}>수정</button>
                    <button type="button" onClick={this.clickDeleteBtn}>삭제</button>
                </div>
            </article>
        );
    }
}

export default Read;
