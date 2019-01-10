import React from 'react';

const ArticleBtn = (props) => {
  console.log(props)
  return ( 
    <div className="article-list">
      <button className="next" onClick={()=>{props.prevPage()}}>上一篇</button>
      <p className="page" >頁碼: {props.page}</p>
      <button className="prev" onClick={()=>{props.nextPage()}}>下一篇</button>
    </div>
  );
}

export default ArticleBtn;