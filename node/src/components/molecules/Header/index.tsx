import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  title: string;
  navLinks: { text: string; url: string }[];
}

export const Header: React.FC<HeaderProps> = ({ title, navLinks }) => {
  return (
    <StyledHeader>
      <Container>
        <Title>{title}</Title>
        <nav>
          <NavList>
            {navLinks.map((link, index) => (
              <NavItem key={index}>
                <NavLink href={link.url}>{link.text}</NavLink>
              </NavItem>
            ))}
          </NavList>
        </nav>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: transparent;
  padding: 1rem 0;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column; /* これを追加 */
  align-items: center;   /* これを追加: 中央揃えにする */
  padding: 0 20px;
`;

const Title = styled.h1`
  margin: 0 0 10px 0; /* 下に少しマージンを追加してナビとの間にスペースを作る */
  font-size: 1.8rem;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex; /* ナビリスト内の項目は横並びを維持 */
  gap: 20px;
`;

const NavItem = styled.li`
  /* リストアイテム個別のスタイルがあればここに記述 */
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color:rgb(251, 184, 97); /* ホバー時の色 */
  }
`;
