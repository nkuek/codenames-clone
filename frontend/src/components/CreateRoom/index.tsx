import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Socket } from 'socket.io-client';

import './CreateRoom.css';

interface Props {
    socket: typeof Socket;
}

interface Word {
    word: string;
}

interface QueryData {
    smallWordList: Word[];
}

const CreateRoom = () => {
    const [nickname, setNickname] = useState('');
    const [errors, setErrors] = useState<string[]>([]);

    const history = useHistory();

    // const randomNameGenerator = () => {
    //     const results = data?.smallWordList;
    //     const urlString = results
    //         ?.map((result:object) => result.word.toLowerCase())
    //         .slice(0, 3)
    //         .join('-');
    //     return urlString;
    // };

    // const handleNewRoomSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     const errors = [];
    //     e.preventDefault();
    //     if (!nickname) {
    //         errors.push('Please enter a nick name!');
    //         setErrors(errors);
    //         return;
    //     }
    //     const urlString = randomNameGenerator();
    //     localStorage.setItem(
    //         'gameSession',
    //         JSON.stringify({ host: nickname, roomName: urlString })
    //     );
    //     history.push(`/room/${urlString}`);
    // };
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
                    // onSubmit={handleNewRoomSubmit}
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
