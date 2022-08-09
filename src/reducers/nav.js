const changeNavToggle = (state=false, action) => {
    switch (action.type) {
        case "OPEN_NAV":
            return true;
        case "CLOSE_NAV":
            return false;
        default:
            return state;
    }
}

export default changeNavToggle;