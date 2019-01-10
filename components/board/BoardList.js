import React from 'react'
import { connect } from 'react-redux'
import {
  NavItem,
} from 'reactstrap'
import { setCurrentBoard } from './boardAction'
function localLog(msg){
  console.log('board', msg)
}
class BoardList extends React.Component {
  constructor(props) {
    super(props);
    localLog(props)
    this.state = {  }
  }
  
  render() { 
    return ( 
      this.props.boardReducer.boardList.map((board, index) => (
        <NavItem key={index}>
          <a className="nav-link" onClick={() => {
            console.log(board)
            this.props.setCurrentBoard(board)
          }}>
            {board}
          </a>
        </NavItem> 
      ))
    )
  }
}
 
const mapStateToProps = (state) => {
  const { boardReducer } = state
  return { boardReducer }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  localLog('board', ownProps);
  return {
    setCurrentBoard: (board) => {
      console.log('board', board)
      dispatch(setCurrentBoard(board))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BoardList);