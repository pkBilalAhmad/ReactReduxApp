import {combineReducers} from 'redux';
import userList from './userList';



const allReducers = combineReducers({
    users: userList,
});

export default allReducers



// import {combineReducers} from 'redux'
// import userList from './userList'

// const allReducers = combineReducers({
//     list : userList
// })

// export default allReducers