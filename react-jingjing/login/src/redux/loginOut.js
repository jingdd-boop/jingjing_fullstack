export function loginOut() {
  return dispatch => {
      axios.get('/user/loginOut')
              .then(res => {
              if (res.status === 200 && res.data.code === 0) {
                  dispatch(loginOutSuccess(res.data.data))
              } else {
                  dispatch(toDoFail(res.data.msg))
              }
          })
  }
}