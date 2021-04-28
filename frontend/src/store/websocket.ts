import { Reducer } from 'redux';

const SET_SOCKET = 'socket/setSocket';
const REMOVE_SOCKET = 'socket/removeSocket';

type SocketAction = {
    type: string;
    socket: SocketIOClient.Socket;
};

export const setSocket = (socket: SocketIOClient.Socket) => ({
    type: SET_SOCKET,
    socket,
});

export const removeSocket = () => ({
    type: REMOVE_SOCKET,
});
const initialState = null;
const socketReducer: Reducer<SocketIOClient.Socket | null, SocketAction> = (
    state = initialState,
    action: SocketAction
) => {
    switch (action.type) {
        case SET_SOCKET:
            return { ...action.socket };
        case REMOVE_SOCKET:
            return initialState;
        default:
            return state;
    }
};

export default socketReducer;
