import React from 'react';
const style = {
  width: '100%'
}

const Article = (props) => (
  <div key={props.article.index} style={style}>
    <h1>{props.article.title}</h1>
    {
      props.article.images.map((image)=>{
        if(image.includes('imgur')){
          return (
            <img src={image} alt="" style={style}/>
          )
        }
      })
    }
  </div>
)

export default Article