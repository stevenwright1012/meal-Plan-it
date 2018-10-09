import axios from 'axios';

const initailState = {
    user:{},
    recipes:[],
    individulRecipe: {}
}

const GET_USER_INFO ='GET_USER_INFO';
const SEARCH = 'SEARCH';
const SETINDIVIDUAL ="SETINDIVIDUAL"

export default function reducer(state = initailState, action){
     
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload});
        case SEARCH +'_FULFILLED':
            return Object.assign({}, state, {recipes: action.payload});
        case SETINDIVIDUAL:
            return Object.assign({}, state, {individulRecipe:action.payload})
        default:
            return state;
    }
}

export function getUser(){
    let userData = axios.get('/auth/me').then( res => {
        return res.data
    })
    return{
        type: GET_USER_INFO,
        payload: userData
    }
}

export function search(searchValue){    
    let searchResults = axios.get(`/api/search/${searchValue}`).then(res => {
        // console.log(res.data.hits);
        return res.data.hits
    })    
    return{
        type: SEARCH,
        payload: searchResults
    } 
}
export function setIndividual(recipe){
    return {
        type: SETINDIVIDUAL,
        payload: recipe
    }
}