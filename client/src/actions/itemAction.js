import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM, ITEMS_LOADING } from '../actions/type'
import axios from 'axios'

export const getItem = () => dispatch => {
    dispatch(itemsLoading())

    axios.get('/api/items')
         .then(res => dispatch({ type: GET_ITEMS, payload: res.data }))
         .catch(err => console.log(err))
}

export const deleteItem = id => dispatch => {
    axios.delete(`/api/items/${id}`).then(res => 
        dispatch({ type: DELETE_ITEM, payload:id})
        )
}

export const addItem = item => dispatch => {
    axios.post('/api/items', item)
         .then(res => dispatch({ type: ADD_ITEMS, payload: res.data }))
}

export const itemsLoading = () => {
    return {
        type: ITEMS_LOADING,
    }
}