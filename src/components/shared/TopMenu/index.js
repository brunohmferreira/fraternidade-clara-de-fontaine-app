import React from 'react';
import PropTypes from 'prop-types';
import { StyledImage, StyledMenu, StyledMenuItem } from './index.style';
import { Pages } from '../../../shared/enums/Pages';
import { Menu } from 'semantic-ui-react'

const TopMenu = ({ activeItem,  handleChangePage, showLogo }) => {

    const pageOptions = Object.values(Pages);
    pageOptions.shift();

    return (
        <StyledMenu pointing secondary stackable>
            <Menu.Item style={{ width: '10%', padding: 0, cursor: 'pointer' }} position='left' onClick={() => handleChangePage(Pages.Home)}>
                { showLogo && <StyledImage src='\images\SimpleLogo.png' /> }
            </Menu.Item>
            {pageOptions.map((page) => {
                return (
                    <StyledMenuItem
                        id={page.id}
                        content={page.name}
                        active={activeItem.id === page.id}
                        position='right'
                        onClick={() => handleChangePage(page)}
                    />
                );
            })}
        </StyledMenu>
    );
};

TopMenu.propTypes = {
    showLogo: PropTypes.bool,
    activeItem: PropTypes.object,
    handleChangePage: PropTypes.func
};

TopMenu.defaultProps = {
    showLogo: false,
    activeItem: Pages.Home,
    handleChangePage: () => {}
};

export default TopMenu;