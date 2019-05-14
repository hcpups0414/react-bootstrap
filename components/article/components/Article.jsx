import React from 'react'
import '../../../assets/scss/article.scss'

const Article = (props) => (
  <div className='article' key={props.article.index}>
    <h1>{props.article.title}</h1>
    {
      props.article.images.map((image, index)=>{
        if(image.includes('imgur')){
          return (
            <img src={image} alt="" key={index}/>
          )
        }
      })
    }
  </div>
)

export default Article