import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuElement from 'components/atoms/MenuElement/MenuElement';
import { Wrapper, StyledMenu, Logo } from './Navigation.styled';
import { menuElements as menuData } from 'data/MenuElements';

const Navigation = () => {
  const [menuElements, setMenuElements] = useState(menuData);

  return (
    <Wrapper>
      <Logo>
        <h1>
          Studdy
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledMenu>
        {menuElements.map(({ id, value, to, isCurrent }) => (
          <MenuElement
            value={value}
            to={to}
            key={id}
            isCurrent={isCurrent}
          ></MenuElement>
        ))}
      </StyledMenu>
    </Wrapper>
  );
};

Navigation.propTypes = {};

export default Navigation;
