 import {
  CHANGE_ARTIST,
  CHANGE_SONGS_OF_ARTIST,
  CHANGE_ENTER_LOGING 
 }  from './constants';

 import {fromJS} from 'immutable';
 import {getSingerInfoRequest} from ''

 export const changeArtist = (data) => ({
   type:CHANGE_ARTIST,
   data:fromJS(data)
 })

 export const changeSongs = (data) => ({
    type:CHANGE_SONGS_OF_ARTIST,
    data
 })

 export const changeLoging = (data) => ({
  type:CHANGE_ENTER_LOGING,
    data
})

export const getSingerInfo = (id) => {
  return dispatch => {
    getSingerInfoRequest(id)
    .then(data => {
      dispatch(changeArtist(data.artitst));
      dispatch(changeSong(data.hotSongs));
      dispatch(changeEnterLoading(false));
    })
  }
}