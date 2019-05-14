import React from 'react';

const ArticleBtnBar = (props) => {
  const { prevPage, nextPage, currentPage } = props;
  return ( 
    <div className="article-list">
      <button 
        className="prev" 
        onClick={prevPage}
      >
        上一篇
      </button>
      <p className="page" >頁碼: {currentPage}</p>
      <button 
        className="next" 
        onClick={nextPage}
      >
        下一篇
      </button>
    </div>
  );
}

export default ArticleBtnBar;