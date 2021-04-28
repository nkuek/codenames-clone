import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../index';
import io from 'socket.io-client';
import { setSession } from '../../store/gameSession';
import { setSocket, removeSocket } from '../../store/websocket';
import nameGenerator from '../utils/nameGenerator';

import './CreateRoom.css';

const CreateRoom = () => {
    const dispatch = useAppDispatch();
    const [nickname, setNickname] = useState('');
    const [errors, setErrors] = useState<string[]>([]);

    const history = useHistory();
    const socket = useAppSelector((state) => state.socket);
    const gameSession = useAppSelector((state) => state.gameSession);

    useEffect(() => {
        if (gameSession) {
            const socket = io('localhost:5000');
            dispatch(setSocket(socket));
        }
    }, [gameSession]);

    const handleNewRoomSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const errors = [];
        e.preventDefault();
        if (!nickname) {
            errors.push('Please enter a nick name!');
            setErrors(errors);
            return;
        }
        const url = await nameGenerator();
        dispatch(setSession({ roomName: url, users: [nickname] }));
        // localStorage.setItem('gameSession', JSON.stringify({ nickname }));
    };
    return (
        <div className="create-room-wrapper">
            <div className="create-room-container">
                <div className="create-room-header">
                    <h1>Welcome to Codenames!</h1>
                </div>
                {errors.length > 0 &&
                    errors.map((error: string, idx: number) => (
                        <div key={idx}>{error}</div>
                    ))}
                <form
                    onSubmit={handleNewRoomSubmit}
                    className="create-room-form"
                >
                    <div>To create a new room, first enter a nickname</div>
                    <input
                        required
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="Enter your nickname"
                    ></input>
                    <button>Create Room</button>
                </form>
            </div>
        </div>
    );
};

export default CreateRoom;
