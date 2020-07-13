import React, { Component} from 'react'
import { connect } from 'react-redux'


class Question extends Component {
    render () {
      console.log('props in questions', this.props)
      return (
         <div>
            <h1>Questions</h1>
        </div>
      )  
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps)(Question);