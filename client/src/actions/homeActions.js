export function toggleForm(clickedVal) {
    return (dispatch) => {
      return dispatch({type: 'TOGGLE_FORM', clicked: clickedVal})
    }
}
