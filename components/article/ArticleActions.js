import { GET_ARTICLES_SUCCESS, GET_ARTICLES_FAIL, GET_ARTICLES_INITIATE} from './constants.js'

export function getArticlesInitiate(){
  return {
      type: GET_ARTICLES_INITIATE,
      payload: 'start'
  };
}
export function getArticlesSuccess(articles){
  return {
      type: GET_ARTICLES_SUCCESS,
      payload: articles
  };
}
export function getArticlesFail(err){
  return {
      type: GET_ARTICLES_FAIL,
      payload: err
  };
}
export const getArticles = (board, page) => (dispatch) => {
  //console.log(GET_ARTICLES_SUCCESS);
  dispatch(getArticlesInitiate());
  fetch(`http://localhost:3000/api/articles/${board}/${page}`)
    .then((res) => { return res.json(); })
    .then((json) => {
        dispatch(getArticlesSuccess(json));
    })
    .catch((err) => { 
        console.log(err);
        dispatch(getArticlesFail(err)); 
    });
}
