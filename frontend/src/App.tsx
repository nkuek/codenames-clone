import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from './store/session';
import SplashPage from './components/Splash';
import CreateRoom from './components/CreateRoom';

import './App.css';
import GameRoom from './components/GameRoom';
import Navigation from './components/Navigation';

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(sessionActions.restoreUser());
        setIsLoaded(true);
    }, [dispatch]);

    return (
        <>
            <Navigation isLoaded={isLoaded} />
            {isLoaded && (
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
            )}
        </>
    );
}

export default App;
