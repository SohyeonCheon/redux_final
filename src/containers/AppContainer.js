import App from "../components/App";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as crudActions from '../store/modules/crud';

const mapStateToProps = ({ crud }) => {
    return {
        mode : crud.mode,
        lastArticleID : crud.lastArticleID,
        currentArticleID : crud.currentArticleID,
        articles : crud.articles
    }
};

// const mapDispatchToProps = (dispatch) => {
//     // return{
//     //     create : (article) => dispatch(actions.create(article)),
//     //     update : (article) => dispatch(actions.update(article)),
//     //     remove : (index) => dispatch(actions.remove(index)),
//     //     setSelectedID : (index) => dispatch(actions.setSelectedID(index)),
//     //     setLastID : (index) => dispatch(actions.setLastID(index)),
//     //     setMode : (mode) => dispatch(actions.setMode(mode)),
//     // };
//
//     //파라미터를 필요로 하더라도 정상 작동
//     bindActionCreators({create, update, remove, setSelectedID, setLastID, setMode}, dispatch);
// };

//함수가 아닌 객체 설정시 자동 bindActionCreators로 동작함
// const mapDispatchToProps = {create, update, remove, setSelectedID, setLastID, setMode};

const mapDispatchToProps = (dispatch) => ({
    // 이런 구조로 하면 나중에 다양한 리덕스 모듈을 적용해야 하는 상황에서 유용
    CRUDActions : bindActionCreators(crudActions, dispatch)
});

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;