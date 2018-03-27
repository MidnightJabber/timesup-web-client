import React from 'react';
import Header from './Header/Header';
import UserSidePanel from './UserSidePanel/UserSidePanel';

const App = (props) => {
    return (
        <div className="container">
            <Header />
            <UserSidePanel
                userCoverImage="http://lorempixel.com/500/400"
                userProfileImage="http://static.businessinsider.com/image/595141eda3630f62588b5117-750.jpg"
                userName="Richard Henricks"
                />
            { props.children }
        </div>
    );
}

export default App;
