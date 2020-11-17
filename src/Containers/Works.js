import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'

import { withMultipleStyles, breakpointsStyle, commonStyles, commonMotion } from '../Styles';
import { AnimatePresence, motion } from 'framer-motion'

import { Trans, withTranslation } from 'react-i18next'
import ID from '../Translations/ID.json'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import * as ActionGlobal from '../Redux/Actions/ActionGlobal'

import Utils from '../Utils'
import PageNotFound from '../Components/PageError/PageNotFound';

import { WorksMenu } from '../Data/Defines'
import { Link, withRouter } from 'react-router-dom';
import { Typography, Divider } from '@material-ui/core';

const OPACITY = '7F'

const styles = theme => ({
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

    menuLink: {
        color: theme.palette.text.primary,
        transition: theme.transitions.create(['color'], {
            duration: 300
        }),

        '&--selected': {
            color: `${theme.palette.text.primary}${OPACITY}`,
        }
    },

    underline: {
        width: 0,
        height: 2,
        maxWidth: '100%',
        backgroundColor: theme.palette.primary.main,
        transition: theme.transitions.create(['width'], {
            duration: 300
        }),
        pointerEvents: 'none',
        userSelect: 'none',

        '&--hover': {
            width: '100%'
        },
    }
});

class Works extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = this.resetState()
    }

    resetState()
    {
        return {
            allCategory: this.getAllCategory(),

        }
    }

    getAllCategory()
    {
        return {

        }
    }

    handleMouseEnter = (link) => (evt) =>
    {
        this.setState({
            [`hover_${link}`]: true,
        })
    }

    handleMouseLeave = (link) => (evt) =>
    {
        this.setState(
            {
                [`hover_${link}`]: false
            }
        )
    }

    renderMenu(menu)
    {
        const {
            classes,
            location: {
                pathname
            },
            t
        } = this.props

        let menuLink = t(menu.link)
        let isSelected = menuLink === pathname
        let isHover = this.state[`hover_${menuLink}`] === true

        let classMenuLink = clsx(classes.menuLink, {
            [classes.menuLink + '--selected']: isSelected
        })

        let classUnderline = clsx(classes.underline, {
            [classes.underline + '--hover']: isHover
        })

        return (
            <div key={menu.text} className={clsx(classes.divColumn, classes.divCenter, classes.menu)}>
                <Link to={menuLink} className={clsx(classMenuLink, classes.textLinkHidden)} onMouseEnter={this.handleMouseEnter(menuLink)} onMouseLeave={this.handleMouseLeave(menuLink)}>
                    <Typography>{t(menu.text)}</Typography>
                </Link>
                <Divider className={classUnderline} />
            </div>
        )
    }

    render()
    {
        const {
            classes,
            t,
            category
        } = this.props;

        console.log('Works::render', this.props, 'category', category)

        return (
            <motion.div
                className={classes.root}
                initial={'in'}
                animate={'in'}
                exit={'out'}
                transition={commonMotion.transition}
                variants={commonMotion.pageTransition}
            >
                <div className={clsx(classes.divRow, classes.divCenter, classes.fullWidth)}>
                    {
                        WorksMenu.map(menu => this.renderMenu(menu))
                    }
                </div>
            </motion.div>
        )
    }

}

Works.propTypes =
{
    classes: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired
};


export default compose(
    withMultipleStyles(commonStyles, styles),
    withTranslation(),
    withRouter
)(Works);

