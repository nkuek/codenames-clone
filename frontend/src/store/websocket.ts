import { Socket } from 'socket.io-client';

const SET_SOCKET = 'socket/setSocket';
const REMOVE_SOCKET = 'socket/removeSocket';

type SocketAction = {
    type: string;
    socket?: typeof Socket;
};

export const setSocket = (socket: typeof Socket) => ({
    type: SET_SOCKET,
    socket,
});

export const removeSocket = () => ({
    type: REMOVE_SOCKET,
});

const socketReducer = (state = null, action: SocketAction) => {
    switch (action.type) {
        case SET_SOCKET:
            return action.socket;
        case REMOVE_SOCKET:
            return null;
        default:
            return state;
    }
};

export default socketReducer;
