import React, { FC, useState } from 'react';

interface Props {
    setSession: Function;
}

const JoinRoom: FC<Props> = ({ setSession }) => {
    const [errors, setErrors] = useState<string[]>([]);
    const [nickname, setNickname] = useState('');

    const handleJoinRoom = (e: React.FormEvent<HTMLFormElement>) => {
        const errors = [];
        if (!nickname) {
            errors.push('Please enter a nickname!');
            setErrors(errors);
        }
        e.preventDefault();
        setSession(true);
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
                <form onSubmit={handleJoinRoom} className="create-room-form">
                    <div>To enter the room, first enter a nickname</div>
                    <input
                        required
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="Enter your nickname"
                    ></input>
                    <button>Join Room</button>
                </form>
            </div>
        </div>
    );
};

export default JoinRoom;
