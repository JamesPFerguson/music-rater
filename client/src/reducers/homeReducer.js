export default function homeReducer(state = {
    clicked: false
    }, action) {
    switch (action.type) {
        case 'TOGGLE_FORM':
            return { clicked: !action.clicked}
        default:
            return state;
    }
}