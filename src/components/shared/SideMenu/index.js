import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledIcon, StyledButton } from './index.style';
import { Pages } from '../../../shared/enums/Pages';
import { Menu, Sidebar } from 'semantic-ui-react';
import LogoAndName from '../LogoAndName';

const SideMenu = ({ activeItem, handleChangePage, showLogo, children }) => {

    const [visible, setVisible] = useState(false);

    const pageOptions = Object.values(Pages);
    pageOptions.shift();

    return (
        <>
            <StyledButton
                onClick={() => setVisible(!visible)}
                color='brown'
                basic
                compact
                size='tiny'
            >
                <StyledIcon
                    name='sidebar'
                    size='large'
                />
            </StyledButton>
            <Sidebar.Pushable>
                <Sidebar
                    as={Menu}
                    style={{ paddingTop: 40, backgroundColor: 'var(--color-secondary-hover)' }}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={() => setVisible(false)}
                    vertical
                    visible={visible}
                    width='thin'
                >
                    <Menu.Item
                        as='a'
                        style={{ width: '90%', padding: 5, cursor: 'pointer' }}
                        position='left'
                        onClick={() => handleChangePage(Pages.Home)}
                    >
                        { showLogo && <LogoAndName imageWidth='80%' imageHeight='100%' /> }
                    </Menu.Item>
                    {pageOptions.map((page) => (
                        <Menu.Item
                            as='a'
                            key={page.id}
                            content={page.name}
                            active={activeItem.id === page.id}
                            onClick={() => handleChangePage(page)}
                        />
                    ))}
                </Sidebar>

                <Sidebar.Pusher dimmed={visible}>
                    {children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </>
    );
};

SideMenu.propTypes = {
    showLogo: PropTypes.bool,
    activeItem: PropTypes.object,
    handleChangePage: PropTypes.func,
    children: PropTypes.element
};

SideMenu.defaultProps = {
    showLogo: false,
    activeItem: Pages.Home,
    handleChangePage: () => {},
    children: <></>
};

export default SideMenu;