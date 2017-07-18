import React, { Component } from 'react'

import ResultView from '../views/ResultView'

import { connect } from 'react-redux'

class Result extends Component {
    render() {
        return (
            <ResultView 
                result={this.props.result}
            />
        )
    }
}

const mapStateToProps = (state) => {
    //must return a plain javascript object
    return {
        result: state.dataReducer.dataObj    
    }
}

export default connect(mapStateToProps) (Result)