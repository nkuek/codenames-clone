import { useEffect, useState } from 'react';
import JoinRoom from '../JoinRoom';

const GameRoom = () => {
    const [session, setSession] = useState(false);
    const gameSession = JSON.parse(localStorage.getItem('gameSession')!);

    useEffect(() => {
        if (gameSession) setSession(true);
    }, [gameSession]);
    return !session ? (
        <JoinRoom setSession={setSession} />
    ) : (
        <div>Game Room</div>
    );
};

export default GameRoom;
