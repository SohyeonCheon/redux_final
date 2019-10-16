import { createAction, handleActions  } from 'redux-actions';

const CREATE = "CREATE";
const UPDATE = "UPDATE";
const REMOVE = "REMOVE";
const SET_SELECTED_ID = "SET_SELECTED_ID";
const SET_LAST_ID = "SET_LAST_ID";
const SET_MODE = "SET_MODE";
const SET_POST_ID = "SET_POST_ID";

let id = 3;

export const create = createAction(CREATE, article => article);
export const update = createAction(UPDATE, article => article);
export const remove = createAction(REMOVE, index => index);
export const setSelectedID = createAction(SET_SELECTED_ID, index => index);
export const setLastID = createAction(SET_LAST_ID, () => ++id);
export const setMode = createAction(SET_MODE, mode => mode);


const initialState = {
    mode : "list",
    lastArticleID : 3,
    currentArticleID : 1,
    articles : [
        {id:1, title : "test1", desc : "test1"},
        {id:2, title : "test2", desc : "test2"},
        {id:3, title : "test3", desc : "test3"}
    ]
};

export default handleActions(
    {
        [CREATE] : (state, action) => {
            const {articles} = state;
            return {
                ...state,
                articles: [
                    ...articles,
                    {
                        ...action.payload
                    }
                ]
            };
        },
        [UPDATE] : (state, action) => {
            const {articles, currentArticleID} = state;
            const newArticles = articles.map(
                object => object.id === currentArticleID ? { ...action.payload }  : object
            );
            return {
                ...state,
                articles : newArticles
            };
        },
        [REMOVE] : (state, action) => {
            const { articles } = state;
            const articlesAfterDelete = articles.filter(
                article => article.id !== action.payload ? article : null
            );
            return {
                ...state,
                articles : articlesAfterDelete
            };
        },
        [SET_SELECTED_ID] : (state, action) => {
            return Object.assign({}, state, {currentArticleID : action.payload});
        },
        [SET_LAST_ID] : (state, action) => {
            return Object.assign({}, state, {lastArticleID : action.payload});
        },
        [SET_MODE] : (state, action) => {
            return Object.assign({}, state, {mode : action.payload});
        },
    }, initialState
);