import React, { Component } from 'react';
import { connect } from "react-redux"
// import { bindActionCreators } from 'redux'

class Mylist extends Component {
    newList(){
        return this.props.list.map((i)=>(
            <li key={i.id}>{i.name} {i.age} </li>
        ))
    }
    render() {
        return (
            <ul>
                {this.newList()}

                {/*<li>1</li>
                <li>2</li>
                <li>3</li>*/}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return {
        list : state.users
    }
}

export default connect(mapStateToProps)(Mylist)