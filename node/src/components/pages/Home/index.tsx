import React from 'react';
import styled from 'styled-components';
import { Url } from '../../../Env';

import { Header } from '../../molecules/Header';
import { ChatInterface } from '../../atoms/ChatInterface';

export const Home: React.FC = () => {
    const title = 'Calen';
    const navItems = [
        { text: 'Home', url: Url.HOME },
        { text: 'Diorama', url: Url.HOME },
        { text: 'Outline', url: Url.HOME },
        { text: 'Drawing', url: Url.HOME },
    ];
    return (
        <StyledHome>
            <Header title={title} navLinks={navItems} />
            <main style={{ padding: '20px', textAlign: 'center' }}>
                <h2>おかえりなさい</h2>
                <p>ごはんにしますか？</p>
            </main>
            {/* <ChatInterface /> */}
        </StyledHome>
    );
}

const StyledHome = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #30AC71;
    // background-image: url(${Url.BACKGROUND_HOME});
    background-size: cover;
    background-position: center;
    color: #ffffff;
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;