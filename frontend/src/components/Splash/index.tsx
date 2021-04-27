import { useHistory } from 'react-router-dom';
import './SplashPage.css';
const SplashPage = () => {
    const history = useHistory();
    const handleCreateRoom = () => {
        history.push('/room/create');
    };
    return (
        <>
            <div className="splash-page-container">
                <div className="splash-page-header-container">
                    <h1>Codenames Online</h1>
                    <div>Play with your friends</div>
                </div>
                <div className="splash-page-create-room-container">
                    <div onClick={handleCreateRoom}>Create Room</div>
                </div>
                <div className="splash-page-how-to-play-container">
                    <div className="how-to-play">
                        <div>How to play:</div>
                        <ol>
                            <li>Create a room</li>
                            <li>Select game settings and start the game</li>
                            <li>Connect with your friends</li>
                            <li>Share the room URL with your friends</li>
                            <li>Enjoy</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SplashPage;
