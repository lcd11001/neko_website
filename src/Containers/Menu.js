import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose'

import { Link, withRouter } from 'react-router-dom';
import { withMultipleStyles, breakpointsStyle, commonStyles } from '../Styles';
import { Divider, Typography } from '@material-ui/core';
import { HeaderMenu } from '../Data/Defines'

import clsx from 'clsx'
import { Trans, withTranslation } from 'react-i18next';


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
        fontWeight: 400,
        textAlign: 'left',
        textTransform: 'uppercase',
        color: 'inherit',

        '&--selected': {
            fontWeight: 600
        },

        '&--custom-color-1': {
            color: theme.palette.primary.secondary
        }
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
                    key: ['borderRadius', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
                    value: [10, 10, 10, 25, 25],
                    variant: [1, 2, 2, 2, 2],
                    unit: ['px', 'px', 'px', 'px', 'px']
                }
            )
        }
    },

    menuLink: {
        color: theme.palette.text.primary
    },

    underline: {
        width: 0,
        height: 2,
        maxWidth: '100%',
        backgroundColor: theme.palette.primary.main,
        transition: theme.transitions.create(['width'], {
            duration: 300
        }),

        '&--hover': {
            width: '100%'
        },

        '&--custom-underline-color-1': {
            backgroundColor: theme.palette.primary.secondary
        }
    },

    underbackground: {
        backgroundColor: 'white',
        transition: theme.transitions.create(['background-color', 'color'], {
            duration: 300
        }),

        '&--hover': {
            color: 'white',
            backgroundColor: theme.palette.primary.main
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
            t
        } = this.props

        let menuLink = t(menu.link)

        let isSelected = menuLink === pathname
        let isHover = this.state[`hover_${menuLink}`] === true

        let classMenuItem = clsx(classes.menuItem, {
            [classes.menuItem + '--selected']: isSelected,
            [classes.menuItem + '--' + ((menu.customStyle && menu.customStyle.color) || 'undefined')]: (menu.customStyle && menu.customStyle.color)
        })

        let classMenuIcon = clsx(classes.menuIcon, {
            [classes.menuIcon + '--hover']: isHover,
            [classes.menuIcon + '--' + ((menu.customStyle && menu.customStyle.icon) || 'undefined')]: (menu.customStyle && menu.customStyle.icon)
        })

        let classMenuBorder = clsx(classes.menuBorder, {
            [classes.menuBorder + '--' + ((menu.customStyle && menu.customStyle.border) || 'undefined')]: (!shortMenu && menu.customStyle && menu.customStyle.border)
        })

        let classUnderline = clsx(classes.underline, {
            [classes.underline + '--hover']: isHover,
            [classes.underline + '--' + ((menu.customStyle && menu.customStyle.underlineColor) || 'undefined')]: (menu.customStyle && menu.customStyle.underlineColor)
        })

        let classUnderbackground = clsx(classes.underbackground, {
            [classes.underbackground + '--hover']: (!shortMenu && isHover && menu.underline === 'disable')
        })

        return (

            <div key={menu.text} className={clsx(classes.divColumn, classes.divCenter, classes.menu)}>
                <Link to={menuLink} className={clsx(classes.menuLink, classes.textLinkHidden)} onMouseEnter={this.handleMouseEnter(menuLink)} onMouseLeave={this.handleMouseLeave(menuLink)}>
                    <div className={clsx(classes.divRow, classes.divCenter, classUnderbackground, classMenuBorder)}>
                        <Typography className={clsx(classMenuItem, classes.textNormal)} noWrap color={'textPrimary'} >
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
    shortMenu: PropTypes.bool
};

Menu.defaultProps = {
    shortMenu: false
}

export default compose(
    withMultipleStyles(commonStyles, styles),
    withTranslation(),
    withRouter
)(Menu);
