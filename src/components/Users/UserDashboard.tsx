import React, { useState } from 'react';
import { Archive, Image, Upload } from 'react-feather';
import UserLists from './UserLists';
import UserPosts from './UserPosts';
import UserPhotos from './UserPhotos';
import '../../styles/UserDashboard.scss';

const UserDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const renderContent = () => {
        switch (activeTab) {
            case 0:
                return <UserLists />;
            case 1:
                return <UserPhotos />;
            case 2:
                return <UserPosts />;
            default:
                return null;
        }
    };

    const tabButtons = [
        { name: "Utenti", image: <Archive /> },
        { name: "Immagini", image: <Image /> },
        { name: "Post", image: <Upload /> },
    ]

    return (
        <div className="dashboard">
            <div className="tabs">
                {tabButtons.map((tab, indx) => {
                    return (
                        <div key={indx} onClick={() => setActiveTab(indx)} className={activeTab === indx ? 'active' : ''}>
                            <span>{tab.image}</span>
                            <p>{tab.name}</p>
                        </div>
                    )
                })}
            </div>
            <div className="content">{renderContent()}</div>
        </div>
    );
};

export default UserDashboard;
