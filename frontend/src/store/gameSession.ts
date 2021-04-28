const SET_SESSION = 'gameSession/setSession';
const REMOVE_SESSION = 'gameSession/removeSession';

interface Session {
    roomName: string;
    users: [string];
}

interface SessionAction {
    type: string;
    session: Session;
}

export const setSession = (session: Session) => ({
    type: SET_SESSION,
    session,
});

export const removeSession = () => ({
    type: REMOVE_SESSION,
});

const gameSessionReducer = (state = null, action: SessionAction) => {
    switch (action.type) {
        case SET_SESSION:
            return action.session;
        case REMOVE_SESSION:
            return null;
        default:
            return null;
    }
};

export default gameSessionReducer;
