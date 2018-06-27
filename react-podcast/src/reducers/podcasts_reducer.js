export default function (state = {}, action) {
    switch (action.type) {
        case "SELECTED_QUERY_TOP":
            return {...state, 
                podcasts : action.payload.data };
        default:
            return state;
    }
}