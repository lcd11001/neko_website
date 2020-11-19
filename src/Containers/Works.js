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
import { Typography, Divider, withWidth, isWidthUp, Accordion, AccordionSummary, AccordionDetails, GridList, GridListTile } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import InViewElement from '../Components/InViewElement';

const OPACITY = '7F'

const styles = theme => ({
    section1: {
        backgroundColor: theme.palette.primary.main,
        ...breakpointsStyle(theme,
            {
                key: ['height'],
                value: [25],
                variant: [-2],
                unit: ['vw']
            }
        ),
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // paddingTop: '5% !important'
    },

    section1_txt1: {
        color: '#FFFFFF'
    },

    section1_txt1_dim: {
        color: '#FFFFFF40'
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    section2: {

    },

    menuContainer: {
        ...breakpointsStyle(theme,
            {
                key: ['paddingTop'],
                value: [50],
                variant: [5],
                unit: ['px']
            }
        ),
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

    menuLink: {
        color: `${theme.palette.text.primary}${OPACITY}`,
        transition: theme.transitions.create(['color'], {
            duration: 300
        }),

        '&--selected': {
            color: theme.palette.text.primary,
        },

        // '&--secondary': {
        //     color: `${theme.palette.text.primary}${OPACITY}`,
        //     '&--selected': {
        //         color: theme.palette.text.primary,
        //     }
        // }
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
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    section3: {
        paddingTop: '0 !important'
    },

    gridList: {
        ...breakpointsStyle(theme,
            {
                key: ['margin'],
                value: [-60],
                variant: [-10],
                unit: ['px !important']
            }
        ),
    },

    gridListTitle: {
        ...breakpointsStyle(theme,
            {
                key: ['height', 'padding'],
                value: [400, 60],
                variant: [20, 10],
                unit: ['px !important', 'px !important']
            }
        ),
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
        let totalWorks = 20
        return {
            totalWorks: totalWorks,
            allCategory: this.getAllCategory(totalWorks),
            category: this.getCurrentCategory()
        }
    }

    getAllCategory(totalWorks)
    {
        const { t } = this.props

        let allCategory = Array.apply(0, Array(totalWorks))
            .map((value, index) =>
            {
                let IMG = Utils.i18Image(t, ID.WORKS[`IMG_${index + 1}`])
                let CATEGORY = t(ID.WORKS[`CATEGORY_${index + 1}`]).split(',')
                    .map(item =>
                    {
                        return t(ID.MENU[item.replace(/MENU::/g, '').trim()])
                    })
                let TITLE = t(ID.WORKS[`TITLE_${index + 1}`])
                let LINK = Utils.i18Link(t, ID.WORKS[`LINK_${index + 1}`])

                return {
                    img: IMG,
                    category: CATEGORY,
                    title: TITLE,
                    link: LINK
                }
            })

        return allCategory
    }

    getCurrentCategory()
    {
        const {
            location: {
                pathname
            },
            t
        } = this.props

        let category = WorksMenu
            .filter(item =>
            {
                return t(item.link) === pathname
            })
            .reduce((name, item) =>
            {
                return t(item.text)
            }, '')

        return category
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

    renderMenu()
    {
        const {
            classes,
        } = this.props

        return (
            <div className={clsx(classes.divRow, classes.divCenter, classes.fullWidth, classes.menuContainer)}>
                {
                    WorksMenu.map(menu => this.renderMenuItem(menu, false))
                }
            </div>
        )
    }

    renderShortMenu()
    {
        const {
            classes,
            location: {
                pathname
            },
            t
        } = this.props

        return (
            <Accordion elevation={0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    {
                        WorksMenu.filter(menu => t(menu.link) === pathname).map(menu => this.renderMenuItem(menu, true))
                    }
                </AccordionSummary>
                <AccordionDetails>
                    <div className={clsx(classes.divColumn, classes.divLeft, classes.fullWidth)}>
                        {
                            WorksMenu.filter(menu => t(menu.link) !== pathname).map(menu => this.renderMenuItem(menu, true))
                        }
                    </div>
                </AccordionDetails>
            </Accordion>
        )
    }

    renderMenuItem(menu, isSecondary)
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
            [classes.menuLink + '--selected']: isSelected,

            [classes.menuLink + '--secondary']: isSecondary,
            [classes.menuLink + '--secondary--selected']: isSecondary && isSelected,
        })

        let classUnderline = clsx(classes.underline, {
            [classes.underline + '--hover']: isHover,

            // [classes.underline + '--secondary']: isSecondary,
            // [classes.underline + '--secondary--selected']: isSecondary && isSelected,
        })

        return (
            <div key={`${menu.text}-${isSecondary}`} className={clsx(classes.divColumn, classes.divCenter, classes.menu)}>
                <Link to={menuLink} className={clsx(classMenuLink, classes.textLinkHidden)} onMouseEnter={this.handleMouseEnter(menuLink)} onMouseLeave={this.handleMouseLeave(menuLink)}>
                    <Typography className={classes.textTitle}>{t(menu.text)}</Typography>
                </Link>
                <Divider className={classUnderline} />
            </div>
        )
    }

    renderWorksList()
    {
        const {
            classes,
            t,
            width
        } = this.props

        const {
            allCategory,
            category
        } = this.state

        let subCategory = allCategory.filter(item =>
        {
            if (category === t(ID.MENU.WORKS_ALL))
            {
                return true
            }
            return item.category.includes(category)
        })

        let maxColumns = isWidthUp('md', width) ? 2 : 1

        return (
            <GridList className={classes.gridList} cols={maxColumns} spacing={GRID_LIST_SPACING[width] || 50} >
                {
                    subCategory.map((item, index) => this.renderGridCell(item, index))
                }
            </GridList>
        )
    }

    renderGridCell(item, index)
    {
        const {
            classes,
            t,
            width
        } = this.props

        let maxColumns = isWidthUp('md', width) ? 2 : 1
        let cellColumns = index % 3 === 0 ? maxColumns : 1

        return (
            <GridListTile key={index} cols={cellColumns} className={classes.gridListTitle}>
                <InViewElement variants={commonMotion.groupTransition} key={`section3-${index}-${width}`}>
                    {
                        cellColumns === maxColumns
                            ? this.renderBigCell(item, index)
                            : this.renderSmallCell(item, index)
                    }

                </InViewElement>
            </GridListTile>
        )
    }

    renderBigCell(item, index)
    {
        const {
            classes,
            t,
            width
        } = this.props

        const containerFlex = isWidthUp('md', width) ? 2 : 1
        const imageFlex = isWidthUp('md', width)
            ? index % 2 === 0
                ? containerFlex * 0.6
                : 0.4
            : 1
        const textFlex = isWidthUp('md', width)
            ? containerFlex - imageFlex
            : 1

        return (
            <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divRow2Column, classes.fullWidth)} style={{ flex: containerFlex }}>
                <div style={{ flex: imageFlex }}>
                    <img alt={item.img} src={Utils.getUrl(item.img)} />
                </div>
                <div style={{ flex: textFlex }}>
                    <Typography>{item.title}</Typography>
                    <Typography>{item.category.join(', ')}</Typography>
                </div>
            </motion.div>
        )
    }

    renderSmallCell(item, index)
    {
        const {
            classes,
            t,
            width
        } = this.props

        return (
            <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divColumn, classes.fullWidth)}>
                <div >
                    <img alt={item.img} src={Utils.getUrl(item.img)} />
                </div>
                <div >
                    <Typography>{item.title}</Typography>
                    <Typography>{item.category.join(', ')}</Typography>
                </div>
            </motion.div>
        )
    }

    renderSection1()
    {
        const {
            classes,
            t,
            width
        } = this.props;

        return (
            <InViewElement variants={commonMotion.groupTransition} key={`section1-${width}`}>
                <motion.div variants={commonMotion.elementTransition} id={'section1'} className={clsx(classes.section, classes.section1)}>
                    <Typography className={clsx(classes.textBreak, classes.textSubHeader, classes.section1_txt1, classes.section1_txt1_dim)} >
                        <Trans
                            i18nKey={ID.WORKS.SECTION_1_TEXT_1}
                            components={{ span: <span /> }}
                            values={{
                                custom: clsx(classes.section1_txt1)
                            }}
                        />
                    </Typography>
                </motion.div>
            </InViewElement>
        )
    }

    renderSection2()
    {
        const {
            classes,
            width
        } = this.props;

        return (
            <InViewElement variants={commonMotion.groupTransition} key={`section2-${width}`}>
                <motion.div variants={commonMotion.elementTransition} id={'section2'} className={clsx(classes.section, classes.section2)}>
                    {
                        isWidthUp('md', width)
                            ? this.renderMenu()
                            : this.renderShortMenu()
                    }
                </motion.div>
            </InViewElement>
        )
    }

    renderSection3()
    {
        const {
            classes,
            width
        } = this.props;

        return (

            <div id={'section3'} className={clsx(classes.section, classes.section3)}>
                {

                    this.renderWorksList()
                }
            </div>

        )
    }

    render()
    {
        const {
            classes,
            t,
            category,
            width
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
                {
                    this.renderSection1()
                }
                {
                    this.renderSection2()
                }
                {
                    this.renderSection3()
                }
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
    withRouter,
    withWidth()
)(Works);

