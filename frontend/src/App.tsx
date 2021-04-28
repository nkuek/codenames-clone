import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SplashPage from './components/Splash';
import CreateRoom from './components/CreateRoom';

import GameRoom from './components/GameRoom';

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <SplashPage />
                </Route>
                <Route exact path="/room/create">
                    <CreateRoom />
                </Route>
                <Route exact path="/room/:roomName">
                    <GameRoom />
                </Route>
                <Route>Page not found</Route>
            </Switch>
        </>
    );
}

export default App;
