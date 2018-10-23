import React from 'react'
import {connect} from 'react-redux'
import Articles from '../components/article/Article.js'
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/scss/content.scss'

class Index extends React.Component {
  
  render () {
    return (
      <Articles />
    )
  }
}

export default connect()(Index)