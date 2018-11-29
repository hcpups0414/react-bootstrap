import React from 'react';

const ArticleBtn = (props) => {
  console.log(props)
  return ( 
    <div>
      <button className="next" onClick={()=>{props.prevPage(props.page, 'sex')}}>上一篇</button>
      <p>頁碼: {props.page}</p>
      <button className="prev" onClick={()=>{props.nextPage(props.page, 'sex')}}>下一篇</button>
    </div>
  );
}

export default ArticleBtn;