import React, { Component } from 'react'
import Layout from '../layouts/Layout'
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/scss/content.scss'

class index extends Component {
  state = {}
  render() {
    return (
      <Layout>
        <div className='container content'>
          <p>this is test</p>
        </div>
      </Layout>
    )
  }
}
export default index