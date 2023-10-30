import React, { useContext } from 'react';
import { authContext } from '../../providers/AuthProvider';

const Home = () => {
    const user = useContext(authContext);

    return (
        <div>
            <h2>this is Home {user && <span>{user.displayName}</span>} </h2>
        </div>
    );
};

export default Home;