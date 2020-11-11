import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose'

import { Link, withRouter } from 'react-router-dom';
import { withMultipleStyles, breakpointsStyle, commonStyles } from '../Styles';
import { Divider, Typography } from '@material-ui/core';
import { HeaderMenu } from '../Data/Defines'

import clsx from 'clsx'
import { Trans, withTranslation } from 'react-i18next';

const OPACITY = '7F'

const styles = theme => ({
    root: {

    },

    menu: {
        ...breakpointsStyle(theme,
            {
                key: ['paddingLeft', 'paddingRight'],
                value: [18, 18],
                variant: [3, 3],
                unit: ['px', 'px']
            }
        ),
        paddingTop: 5,
        paddingBottom: 5,
        position: 'relative'
    },

    menuItem: {
        fontWeight: 'bold',
        textAlign: 'left',
        textTransform: 'uppercase',
        color: 'inherit'
    },

    menuIcon: {
        color: 'inherit',
        ...breakpointsStyle(theme,
            {
                key: ['width'],
                value: [63],
                variant: [7],
                unit: ['px']
            }
        ),

        '&--custom-icon-1': {
            ...breakpointsStyle(theme,
                {
                    key: ['marginLeft'],
                    value: [30],
                    variant: [5],
                    unit: ['px']
                }
            )
        }

        // transition: theme.transitions.create(['color'], {
        //     duration: 300
        // }),

        // '&--hover': {
        //     color: 'white'
        // }
    },

    menuBorder: {
        border: 'none',

        '&--custom-border-1': {
            border: '1px solid #707070',
            ...breakpointsStyle(theme,
                {
                    key: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
                    value: [10, 10, 25, 25],
                    variant: [2, 2, 2, 2],
                    unit: ['px', 'px', 'px', 'px']
                }
            ),
            borderRadius: 7
        },

        '&--secondary': {
            '&--custom-border-1': {
                border: '1px solid #FFFFFF',
            }
        }
    },

    menuLink: {
        color: theme.palette.text.primary,
        transition: theme.transitions.create(['color'], {
            duration: 300
        }),

        '&--selected': {
            color: `${theme.palette.text.primary}${OPACITY}`,
        },

        '&--custom-color-1': {
            color: theme.palette.primary.secondary,

            '&--selected': {
                color: `${theme.palette.primary.secondary}${OPACITY}`,
            },
        },

        '&--secondary': {
            color: '#FFFFFF',

            '&--selected': {
                color: `#FFFFFF${OPACITY}`,
            },

            '&--custom-color-1': {
                color: '#000000',

                '&--selected': {
                    color: `#000000${OPACITY}`,
                },
            }
        },
    },

    underline: {
        width: 0,
        height: 2,
        maxWidth: '100%',
        backgroundColor: theme.palette.primary.main,
        transition: theme.transitions.create(['width'], {
            duration: 300
        }),
        userEvents: 'none',

        '&--hover': {
            width: '100%'
        },

        '&--custom-underline-color-1': {
            backgroundColor: theme.palette.primary.secondary
        },

        '&--secondary': {
            backgroundColor: 'white',

            '&--custom-underline-color-1': {
                backgroundColor: 'black'
            }
        },
    },

    underbackground: {
        backgroundColor: 'inherit',
        transition: theme.transitions.create(['background-color', 'color'], {
            duration: 300
        }),

        '&--hover': {
            color: 'white',
            backgroundColor: theme.palette.primary.main
        },

        '&--secondary': {
            '&--hover': {
                color: 'white',
                backgroundColor: 'black'
            },
        }
    }

});

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleMouseEnter = (link) => (evt) => {
        this.setState({
            [`hover_${link}`]: true
        })
    }

    handleMouseLeave = (link) => (evt) => {
        this.setState({
            [`hover_${link}`]: false
        })
    }

    renderMenu(menu) {
        const {
            classes,
            location: {
                pathname
            },
            shortMenu,
            t,
            secondary
        } = this.props

        let menuLink = t(menu.link)

        let isSelected = menuLink === pathname
        let isHover = this.state[`hover_${menuLink}`] === true

        let classMenuItem = clsx(classes.menuItem)

        let classMenuIcon = clsx(classes.menuIcon, {
            [classes.menuIcon + '--hover']: isHover,
            [classes.menuIcon + '--' + ((menu.customStyle && menu.customStyle.icon) || 'undefined')]: (menu.customStyle && menu.customStyle.icon)
        })

        let classMenuBorder = clsx(classes.menuBorder, {
            [classes.menuBorder + '--' + ((menu.customStyle && menu.customStyle.border) || 'undefined')]: (!shortMenu && menu.customStyle && menu.customStyle.border),

            [classes.menuBorder + '--secondary']: secondary,
            [classes.menuBorder + '--secondary--' + ((menu.customStyle && menu.customStyle.border) || 'undefined')]: (secondary && menu.customStyle && menu.customStyle.border)
        })

        let classUnderline = clsx(classes.underline, {
            [classes.underline + '--hover']: isHover,
            [classes.underline + '--' + ((menu.customStyle && menu.customStyle.underlineColor) || 'undefined')]: (menu.customStyle && menu.customStyle.underlineColor),

            [classes.underline + '--secondary']: secondary,
            [classes.underline + '--secondary--' + ((menu.customStyle && menu.customStyle.underlineColor) || 'undefined')]: (secondary && menu.customStyle && menu.customStyle.underlineColor),
        })

        let classUnderbackground = clsx(classes.underbackground, {
            [classes.underbackground + '--hover']: (!shortMenu && isHover && menu.underline === 'disable'),

            [classes.underbackground + '--secondary']: !shortMenu && secondary,
            [classes.underbackground + '--secondary--hover']: (!shortMenu && secondary && isHover && menu.underline === 'disable')
        })

        let classMenuLink = clsx(classes.menuLink, {
            [classes.menuLink + '--selected']: isSelected,

            [classes.menuLink + '--' + ((menu.customStyle && menu.customStyle.color) || 'undefined')]: (menu.customStyle && menu.customStyle.color),
            [classes.menuLink + '--' + ((menu.customStyle && menu.customStyle.color) || 'undefined') + '--selected']: (isSelected && menu.customStyle && menu.customStyle.color),

            [classes.menuLink + '--secondary']: secondary,
            [classes.menuLink + '--secondary--selected']: (isSelected && secondary),

            [classes.menuLink + '--secondary--' + ((menu.customStyle && menu.customStyle.color) || 'undefined')]: (secondary && menu.customStyle && menu.customStyle.color),
            [classes.menuLink + '--secondary--' + ((menu.customStyle && menu.customStyle.color) || 'undefined') + '--selected']: (isSelected && secondary && menu.customStyle && menu.customStyle.color)
        })

        return (

            <div key={menu.text} className={clsx(classes.divColumn, classes.divCenter, classes.menu)}>
                <Link to={menuLink} className={clsx(classMenuLink, classes.textLinkHidden)} onMouseEnter={this.handleMouseEnter(menuLink)} onMouseLeave={this.handleMouseLeave(menuLink)}>
                    <div className={clsx(classes.divRow, classes.divCenter, classUnderbackground, classMenuBorder)}>
                        <Typography className={clsx(classMenuItem, classes.textNormal)} noWrap >
                            <Trans i18nKey={menu.text} />
                        </Typography>
                        {
                            !shortMenu && menu.icon &&
                            <menu.icon className={classMenuIcon} />
                        }
                    </div>
                </Link>
                {
                    (shortMenu || menu.underline !== 'disable') &&
                    <Divider className={classUnderline} />
                }
            </div>
        )
    }

    render() {
        const {
            classes,
            shortMenu
        } = this.props

        let classRoot = shortMenu
            ? clsx(classes.root, classes.divColumn, classes.divLeft)
            : clsx(classes.root, classes.divRow, classes.divCenter)

        return (
            <div className={classRoot}>
                {
                    HeaderMenu.map(menu => (
                        this.renderMenu(menu)
                    ))
                }
            </div>
        );
    }


}

Menu.propTypes =
{
    classes: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    shortMenu: PropTypes.bool,
    secondary: PropTypes.bool
};

Menu.defaultProps = {
    shortMenu: false,
    secondary: false
}

export default compose(
    withMultipleStyles(commonStyles, styles),
    withTranslation(),
    withRouter
)(Menu);
