import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withMultipleStyles, breakpointsStyle } from '../Styles';
import { Drawer, List, ListItem, ListItemText, Toolbar, ListItemIcon, Tooltip, Divider, IconButton, Collapse } from '@material-ui/core';
import { DataMenu } from '../Data/Defines'

import { IconMenuShow, IconMenuHide } from '../Components/CmsIcons'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Utils from '../Utils'

import clsx from 'clsx'

const drawerStyle = theme => ({
    ...breakpointsStyle(theme, {
        key: 'width',
        value: theme.spacing(45),
        variant: theme.spacing(2),
        unit: 'px'
    }),
    '&--closed': {
        ...breakpointsStyle(theme, {
            key: 'width',
            value: theme.spacing(10),
            variant: theme.spacing(1),
            unit: 'px'
        })
    }
})

const styles = theme => ({
    root: {
        ...drawerStyle(theme),
        flexShrink: 0
    },
    verticalScrollContainer: {
        '&::-webkit-scrollbar': {
            '-webkit-appearance': 'none'
        },
        '&::-webkit-scrollbar:vertical': {
            height: 16
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            border: '2px solid white',
            backgroundColor: 'rgba(0, 0, 0, .3)',
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, .5)',
            }
        }
    },
    drawer: {
        ...drawerStyle(theme),
    },
    drawerContainer: {
        overflowY: 'auto',
        overflowX: 'hidden',
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    drawerFooter: {
        height: theme.spacing(6),
        // backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 10,
        '&--closed': {
            justifyContent: 'center',
            marginRight: 0
        }
    },
    drawerIcon: {
        '&:hover': {
            borderRadius: 5,
            border: '1px solid #D6D6D6',
            backgroundColor: '#F2F2F2'
        }
    },
    divMenu: {
        ...breakpointsStyle(theme, {
            key: ['marginLeft', 'marginRight'],
            value: [12, 12],
            variant: [1, 1],
            unit: ['px', 'px']
        }),
        '&--closed': {
            marginLeft: 0,
            marginRight: 0
        },
        marginTop: 4
    },
    divSubMenu: {
        display: 'flex',
        justifyContent: 'center',
        '&--closed': {
            marginLeft: 0,
            marginRight: 0
        },
    },
    divSubMenuWrapper: {
        width: '100%'
    },
    menuItem: {
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        '&--closed': {
            width: 32,
            height: 32,
            borderRadius: '50%'
        },
        '&--submenu': {
            ...breakpointsStyle(theme, {
                key: ['paddingLeft'],
                value: [30],
                variant: [5],
                unit: ['px']
            }),
            '&--closed': {
                width: 24,
                height: 24,
                borderRadius: '50%'
            }
        }
    },
    menuText: {
        ...breakpointsStyle(theme, {
            key: 'font-size',
            value: 1.0,
            variant: 0.05,
            unit: 'rem'
        }),
        '&--selected': {
            color: '#4A58B2'
        },
        '&--closed': {
            display: 'none'
        },
        '&--opened': {
            color: '#4A58B2'
        },
        marginLeft: 10,
        fontWeight: 500
    },
    menuIcon: {
        ...breakpointsStyle(theme, {
            key: 'font-size',
            value: 1.2,
            variant: 0.1,
            unit: 'rem'
        }),
        '&--selected': {
            color: '#4A58B2'
        },
        '&--opened': {
            color: '#4A58B2'
        }
    },
    icon: {
        color: '#525252',
        '&:hover': {
            color: '#4A58B2'
        }
    },
    listRoot: {
        width: '100%'
    },
    listPadding: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        '&--closed': {
            alignItems: 'center'
        }
    }
});

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isClosed: false,
            isMenuStateInit: false,
            userPermission: null
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const {
            location: {
                pathname
            }
        } = nextProps;

        if (pathname === '/login') {
            return null
        }

        let result = null

        if (!prevState.isMenuStateInit) {
            let menuState = DataMenu
                .filter(item => pathname.includes(item.link))
                .reduce((openMenu, item) => {
                    openMenu[item.text] = true
                    return openMenu
                }, {})

            result = Object.assign((result || {}), {
                ...menuState,
                isMenuStateInit: true
            })
        }

        if (nextProps.access_group !== null && nextProps.access !== null && prevState.userPermission === null) {
            result = Object.assign((result || {}), {
                userPermission: Utils.getDefaultPermission(nextProps.access_group, nextProps.access, nextProps.privilege)
            })
        }

        return result
    }

    _handleMenu = () => {
        this.setState((prevState, props) => ({
            isClosed: !prevState.isClosed
        }))
    }

    _handleParentMenu = (name) => {
        this.setState((prevState, props) => ({
            [name]: prevState[name] === undefined ? true : !prevState[name]
        }))
    }

    render() {
        const { classes } = this.props;
        const { isClosed } = this.state

        let classRoot = clsx(classes.root, {
            [classes.root + '--closed']: isClosed
        })

        let classDrawer = clsx(classes.drawer, {
            [classes.drawer + '--closed']: isClosed
        })

        let classDrawerFooter = clsx(classes.drawerFooter, {
            [classes.drawerFooter + '--closed']: isClosed
        })

        let classListPadding = clsx(classes.listPadding, {
            [classes.listPadding + '--closed']: isClosed
        })

        return (
            <Drawer
                className={classRoot}
                classes={{ paper: classDrawer }}
                anchor='left'
                variant='permanent'
                open={true}
            >
                <Toolbar />
                <div className={clsx(classes.drawerContainer, classes.verticalScrollContainer)}>
                    <List component={'nav'} classes={{ root: classes.listRoot, padding: classListPadding }}>
                        {
                            DataMenu.map((item, index) => (
                                this.renderMenuItem(item, false)
                            ))
                        }
                    </List>
                </div>
                <div className={classDrawerFooter}>
                    <IconButton className={classes.drawerIcon} size={'small'} onClick={this._handleMenu}>
                        {
                            isClosed
                                ? <IconMenuShow className={classes.icon} />
                                : <IconMenuHide className={classes.icon} />
                        }

                    </IconButton>
                </div>
            </Drawer>
        );
    }

    renderMenuItem(item, hasParent) {
        if (item.link === null) {
            return <Divider />
        }

        const {
            classes,
            location: {
                pathname
            },
            privilege
        } = this.props;

        const {
            userPermission
        } = this.state

        let hasPermission = Utils.checkLinkPermission(item.link, userPermission, privilege)
        if (!hasPermission) {
            return null
        }

        const {
            isClosed
        } = this.state

        let isSubmenuOpen = this.state[item.text] === undefined ? false : this.state[item.text]

        let isSelected = isSubmenuOpen
            ? pathname === item.link
            : pathname.includes(item.link)

        let hasSubmenu = item.hasOwnProperty('submenu')

        let classDivMenu = clsx(classes.divMenu, {
            [classes.divMenu + '--closed']: isClosed
        })

        let classMenuItem = clsx(classes.menuItem, {
            [classes.menuItem + '--closed']: (isClosed && !hasSubmenu),
            [classes.menuItem + '--submenu']: (hasParent && !isClosed),
            [classes.menuItem + '--submenu--closed']: (hasParent && isClosed)
        })

        let classMenuIcon = clsx(classes.menuIcon, {
            [classes.menuIcon + '--selected']: isSelected,
            [classes.menuText + '--opened']: (isSubmenuOpen && pathname.includes(item.link))
        })

        let classMenuText = clsx(classes.menuText, {
            [classes.menuText + '--selected']: isSelected,
            [classes.menuText + '--closed']: isClosed,
            [classes.menuText + '--opened']: (isSubmenuOpen && pathname.includes(item.link))
        })

        return (
            <div key={item.link} className={classDivMenu}>
                <ListItem
                    button
                    selected={isSelected}
                    component={Link}
                    to={item.link}
                    className={classMenuItem}
                    onClick={() => {
                        if (hasSubmenu) {
                            this._handleParentMenu(item.text)
                        }
                    }}
                    disableGutters={true}
                >
                    <Tooltip placement={'right'} title={isClosed ? item.text : ''}>
                        <ListItemIcon style={{ alignItems: 'center', justifyContent: 'center' }}>
                            {
                                item.icon && <item.icon className={classMenuIcon} />
                            }
                        </ListItemIcon>
                    </Tooltip>
                    <ListItemText primary={item.text} classes={{ primary: classMenuText }} primaryTypographyProps={{ noWrap: true }} />
                    {
                        hasSubmenu
                            ? (isSubmenuOpen ? <ExpandLess /> : <ExpandMore />)
                            : null
                    }
                </ListItem>
                {
                    this.renderSubMenuItem(item)
                }
            </div>
        );
    }

    renderSubMenuItem(item) {
        const {
            classes
        } = this.props
        const { isClosed } = this.state

        let classDivSubMenu = clsx(classes.divSubMenu, {
            [classes.divSubMenu + '--closed']: isClosed
        })

        let classListPadding = clsx(classes.listPadding, {
            [classes.listPadding + '--closed']: isClosed
        })

        if (item.hasOwnProperty('submenu')) {
            let isSubmenuOpen = this.state[item.text] === undefined ? false : this.state[item.text]
            return (
                <Collapse in={isSubmenuOpen} timeout={'auto'} unmountOnExit={true} classes={{ container: classDivSubMenu, wrapper: classes.divSubMenuWrapper }}>
                    <List component={'nav'} classes={{ root: classes.listRoot, padding: classListPadding }}>
                        {
                            item.submenu.map((subitem, index) => (
                                this.renderMenuItem(subitem, true)
                            ))
                        }
                    </List>
                </Collapse>
            )
        }
        return null
    }
}

Menu.propTypes =
{
    classes: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default withMultipleStyles(styles)(Menu);
