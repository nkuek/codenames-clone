import { Reducer } from 'redux';
const SET_SESSION = 'gameSession/setSession';
const REMOVE_SESSION = 'gameSession/removeSession';

interface Session {
    roomName: string;
    users: string[];
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

const initialState = null;
const gameSessionReducer: Reducer<Session | null, SessionAction> = (
    state = initialState,
    action: SessionAction
) => {
    switch (action.type) {
        case SET_SESSION:
            return { ...state, ...action.session };
        case REMOVE_SESSION:
            return initialState;
        default:
            return state;
    }
};

export default gameSessionReducer;
