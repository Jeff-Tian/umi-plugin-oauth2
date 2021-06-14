import React from 'react';
import styles from './index.css';
import { useModel, Link, OAuth2UserContext } from 'umi';

const Home: React.FC = () => {
    const { initialState } = useModel('@@initialState');
    console.table(initialState);
    return (
        <OAuth2UserContext.Consumer>
            {({ user }) => (
                <div className={styles.normal}>
                    <div>{user ? user.name : ''}</div>
                    <Link to="/user">User</Link>
                </div>
            )}
        </OAuth2UserContext.Consumer>
    );
};

export default Home;
