import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose'
import { withMultipleStyles, breakpointsStyle } from '../Styles';
import clsx from 'clsx'
import { AppBar, Toolbar, Typography, withWidth, Button, Menu, MenuItem, Divider, Badge, Tooltip } from '@material-ui/core';
import { Notifications as IconNotification } from '@material-ui/icons'
import TEXT from '../Data/Text'
import Utils from '../Utils'

import { ApplayduLogo, DataProfileMenu } from '../Data/Defines'
import { IconLogout as Icon } from '../Components/CmsIcons'

const userInfoStyle = theme => ({
    ...breakpointsStyle(
        theme,
        {
            key: ['minWidth', 'padding'],
            value: [250, 10],
            variant: [20, 1],
            unit: ['px', 'px']
        }
    )
})

const styles = theme => ({

    appBar: {
        flexGrow: 1,
        zIndex: theme.zIndex.drawer + 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        marginLeft: 10,
        ...breakpointsStyle(
            theme,
            {
                key: ['font-size'],
                value: [1.4],
                variant: [0.15],
                unit: 'rem'
            }
        ),
    },
    icon: {
        color: 'white',
        ...breakpointsStyle(
            theme,
            {
                key: ['width', 'height'],
                value: [0.9, 0.9],
                variant: [0.15, 0.15],
                unit: 'em'
            }
        )
    },
    logo: {
        ...breakpointsStyle(
            theme,
            {
                key: ['width', 'height'],
                value: [80, 40],
                variant: [5, 2.5],
                unit: 'px'
            }
        )
    },
    divInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    divNotify: {
        paddingLeft: 10,
        paddingRight: 0
    },
    buttonLogOut: {
        textTransform: 'none',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
        },
        ...breakpointsStyle(
            theme,
            {
                key: ['marginLeft'],
                value: [45],
                variant: [5],
                unit: 'px'
            }
        ),
        fontWeight: 300
    },
    info: {
        ...breakpointsStyle(
            theme,
            {
                key: ['font-size'],
                value: [0.9],
                variant: [0.05],
                unit: 'rem'
            }
        ),
        marginLeft: 5,
        fontWeight: 500
    },
    textLogout: {
        ...breakpointsStyle(
            theme,
            {
                key: ['font-size'],
                value: [0.9],
                variant: [0.05],
                unit: 'rem'
            }
        ),
        fontWeight: 300
    },
    profileMenu: {
        ...userInfoStyle(theme),
        marginTop: 5,
        borderRadius: 5,
        border: '1px solid #D6D6D6',
        backgroundColor: 'white'
    },
    profileItem: {
        ...breakpointsStyle(
            theme,
            {
                key: ['minHeight'],
                value: [48],
                variant: [8],
                unit: 'px'
            }
        ),
    },
    profileItemText: {
        ...breakpointsStyle(
            theme,
            {
                key: ['font-size'],
                value: [1.0],
                variant: [0.1],
                unit: 'rem'
            }
        ),
    },
    profileItemUser: {
        backgroundColor: 'white',
        '&:active': {
            border: 'none',
            outline: 'none'
        },
        '&:focus': {
            border: 'none',
            outline: 'none'
        }
    },
    profileRole: {
        ...breakpointsStyle(
            theme,
            {
                key: ['font-size'],
                value: [0.9],
                variant: [0.1],
                unit: 'rem'
            }
        ),
    }
});

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            menuAnchor: null
        }
    }

    _handleOpenProfileMenu = (evt) => {
        this.setState({
            menuAnchor: evt.currentTarget
        })
    }

    _handleCloseProfileMenu = () => {
        this.setState({
            menuAnchor: null
        })
    }

    _handleProfileMenu = (link) => () => {
        const {
            history
        } = this.props

        if (link === '/logout') {
            this._handleLogOut()
            return
        }

        history.push(link)
        this._handleCloseProfileMenu()
    }

    _handleLogOut = () => {
        const {
            Logout
        } = this.props

        Logout()
    }

    MatchScreenSize(size) {
        const isMatch = (size === this.props.width)
        return isMatch
    }

    renderProfileMenu() {
        const {
            menuAnchor
        } = this.state

        const {
            classes,
            email,
            username,
            privilege
        } = this.props

        return (
            <Menu
                classes={{
                    paper: classes.profileMenu
                }}
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                anchorEl={menuAnchor}
                keepMounted={true}
                open={Boolean(menuAnchor)}
                onClose={this._handleCloseProfileMenu}
            >
                <MenuItem key={-1} button={false} classes={{ root: clsx(classes.profileItem, classes.profileItemUser) }}>
                    <div>
                        <Typography className={classes.profileItemText} noWrap={true} style={{ color: '#1B1F43', fontWeight: 'bold' }}>
                            {
                                username || email.substring(0, email.indexOf('@'))
                            }
                        </Typography>
                        <Typography className={classes.profileRole} style={{ color: '#ABABAB', fontWeight: 'lighter' }}>
                            {
                                privilege
                            }
                        </Typography>
                    </div>
                </MenuItem>
                {
                    DataProfileMenu.map((menu, index) => {
                        if (menu.link === null) {
                            return <Divider key={index} />
                        }
                        return (
                            <MenuItem key={index} classes={{ root: classes.profileItem }} onClick={this._handleProfileMenu(menu.link)}>
                                <Typography color={'textPrimary'} className={classes.profileItemText}>
                                    {menu.text}
                                </Typography>
                            </MenuItem>
                        )
                    })
                }
            </Menu >
        )
    }

    render() {
        const { classes, isLoggedIn, email, username, expire_warning } = this.props;

        return (
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <img
                        className={classes.logo}
                        src={Utils.getIconUrl(ApplayduLogo)}
                        alt={'ApplayduLogo'}
                    />
                    <Typography variant="h6" className={classes.title} color={'textSecondary'} noWrap={true}>
                        {
                            this.MatchScreenSize('xs') || this.MatchScreenSize('sm')
                                ? TEXT.APP_BAR_TITLE_SHORT
                                : TEXT.APP_BAR_TITLE
                        }
                    </Typography>
                    {
                        isLoggedIn && (
                            <div className={classes.divInfo}>
                                <Typography color={'textSecondary'} noWrap={true} className={classes.info}>
                                    {
                                        Utils.parseString(TEXT.TTILE_APP_HEADER, username || email.substring(0, email.indexOf('@')))
                                    }
                                </Typography>
                                <div className={classes.divNotify} style={{ display: expire_warning !== -1 ? 'block' : 'none' }}>
                                    <Badge badgeContent={'!'} color={'error'}>
                                        <Tooltip
                                            title={Utils.parseString(TEXT.PROFILE_DIALOG_CHANGE_PASSWORD_EXPIRE, expire_warning)}
                                            placement={'bottom'}
                                            /*
                                            // for debug
                                            open={true}
                                            disableFocusListener
                                            disableHoverListener
                                            disableTouchListener
                                            */
                                        >
                                            <IconNotification />
                                        </Tooltip>
                                    </Badge>
                                </div>
                                <Button
                                    className={classes.buttonLogOut}
                                    startIcon={<Icon className={classes.icon} />}
                                    disableRipple={true}
                                    disableFocusRipple={true}
                                    disableElevation={true}
                                    onClick={this._handleLogOut}
                                >
                                    <Typography color={'textSecondary'} noWrap={true} className={classes.textLogout}>
                                        {
                                            TEXT.MENU_LOGOUT
                                        }
                                    </Typography>
                                </Button>
                            </div>
                        )
                    }
                </Toolbar>
            </AppBar>
        );
    }
}

Header.propTypes =
{
    classes: PropTypes.object.isRequired,
};

export default compose(
    withWidth(),
    withMultipleStyles(styles, { withTheme: true })
)(Header);