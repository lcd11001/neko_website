import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose'

import { Link, withRouter } from 'react-router-dom';
import { withMultipleStyles, breakpointsStyle, commonStyles } from '../Styles';
import { Divider, Typography } from '@material-ui/core';
import { DataMenu } from '../Data/Defines'

import clsx from 'clsx'
import { Trans, withTranslation } from 'react-i18next';


const styles = theme => ({
    root: {

    },

    menu: {
        padding: '0 18px',
        position: 'relative'
    },

    menuItem: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [15, 18],
                variant: [2, 2],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 500,
        textAlign: 'left',
        textTransform: 'uppercase',
        color: 'inherit',

        '&--selected': {
            fontWeight: 700
        }
    },

    menuIcon: {
        color: 'inherit',
        // transition: theme.transitions.create(['color'], {
        //     duration: 300
        // }),

        // '&--hover': {
        //     color: 'white',
        //     transition: theme.transitions.create(['color'], {
        //         duration: 300
        //     }),
        // }
    },

    menuLink: {
        textDecoration: 'none',
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
            width: '100%',
            transition: theme.transitions.create(['width'], {
                duration: 300
            }),
        }
    },

    underbackground: {
        backgroundColor: 'white',
        transition: theme.transitions.create(['background-color', 'color'], {
            duration: 300
        }),

        '&--hover': {
            color: 'white',
            backgroundColor: theme.palette.primary.main,
            transition: theme.transitions.create(['background-color', 'color'], {
                duration: 300
            }),
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
            }
        } = this.props

        let isSelected = menu.link === pathname

        let classMenuItem = clsx(classes.menuItem, {
            [classes.menuItem + '--selected']: isSelected
        })

        let classMenuIcon = clsx(classes.menuIcon, {
            [classes.menuIcon + '--hover']: this.state[`hover_${menu.link}`] === true
        })

        let classUnderline = clsx(classes.underline, {
            [classes.underline + '--hover']: this.state[`hover_${menu.link}`] === true
        })

        let classUnderbackground = clsx(classes.underbackground, {
            [classes.underbackground + '--hover']: (this.state[`hover_${menu.link}`] === true && menu.underline === 'disable')
        })

        return (

            <div key={menu.text} className={clsx(classes.divColumn, classes.divCenter, classes.menu)}>
                <Link to={menu.link} className={classes.menuLink} onMouseEnter={this.handleMouseEnter(menu.link)} onMouseLeave={this.handleMouseLeave(menu.link)}>
                    <div className={clsx(classes.divRow, classes.divCenter, classUnderbackground)} style={menu.customStyle}>
                        <Typography className={classMenuItem} noWrap color={'textPrimary'} >
                            <Trans i18nKey={menu.text} />
                        </Typography>
                        {
                            menu.icon &&
                            <menu.icon className={classMenuIcon} style={menu.customIconStyle} />
                        }
                    </div>
                </Link>
                {
                    menu.underline !== 'disable' &&
                    <Divider className={classUnderline} style={{ backgroundColor: menu.customStyle ? menu.customStyle.color : null }} />
                }
            </div>
        )
    }

    render() {
        const {
            classes
        } = this.props

        return (
            <div className={clsx(classes.root, classes.divRow, classes.divCenter)}>
                {
                    DataMenu.map(menu => (
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
    location: PropTypes.object.isRequired
};

export default compose(
    withMultipleStyles(commonStyles, styles),
    withTranslation(),
    withRouter
)(Menu);
