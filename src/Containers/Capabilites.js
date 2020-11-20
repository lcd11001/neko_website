import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'

import { withMultipleStyles, breakpointsStyle, commonStyles, commonMotion } from '../Styles';
import { Link, withRouter } from 'react-router-dom'
import { motion } from 'framer-motion'

import { Trans, withTranslation } from 'react-i18next'
import ID from '../Translations/ID.json'

import compose from 'recompose/compose'

import Utils from '../Utils'
import { withWidth, isWidthUp, Typography, GridList, GridListTile } from '@material-ui/core';

import InViewElement from '../Components/InViewElement'

const OPACITY = '7F'
const CELL_HEIGHT = 400
const CELL_HEIGHT_VARIANT = 25
const CELL_PADDING = 50
const CELL_PADDING_VARIANT = 5

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
        color: theme.palette.text.secondary
    },

    section1_txt1_dim: {
        color: '#FFFFFF'
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    section2: {
        paddingLeft: 0,
        paddingRight: 0
    },

    section2_grid_list: {
        ...breakpointsStyle(theme,
            {
                key: ['margin', 'paddingLeft', 'paddingRight'],
                value: [-CELL_PADDING, 0, 0],
                variant: [-CELL_PADDING_VARIANT, 0, 0],
                unit: ['px !important', 'px', 'px']
            }
        ),
    },

    section2_grid_list_title_root: {
        ...breakpointsStyle(theme,
            {
                key: ['paddingTop', 'paddingBottom'],
                value: [CELL_PADDING, CELL_PADDING],
                variant: [0, 0],
                unit: ['px !important', 'px !important']
            }
        ),
        paddingLeft: '0 !important',
        paddingRight: '0 !important'
    },

    section2_grid_list_title_tile: {
        ...breakpointsStyle(theme,
            {
                key: ['paddingLeft', 'paddingRight'],
                value: [450, 450],
                variant: [100, 100],
                unit: ['px', 'px']
            }
        ),
    },

    section2_container_img: {
        ...breakpointsStyle(theme,
            {
                key: ['--paddingWidth', 'height'],
                value: [CELL_PADDING, CELL_HEIGHT],
                variant: [CELL_PADDING_VARIANT, CELL_HEIGHT_VARIANT],
                unit: ['px', 'px']
            }
        ),
        overflow: 'hidden',
        position: 'relative'
    },

    section2_container_img_big: {
        width: '50%',
        display: 'flex'
    },

    section2_container_des_big: {
        height: '100%',
        width: '50%',
    },

    section2_container_des: {
        ...breakpointsStyle(theme,
            {
                key: ['--paddingWidth'],
                value: [CELL_PADDING],
                variant: [CELL_PADDING_VARIANT],
                unit: ['px']
            }
        ),
        padding: 'calc(var(--paddingWidth))',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    section2_container_img_small: {
        width: '100%',
    },

    section2_container_des_small: {
        width: '100%',
        paddingBottom: 0
    },

    section2_text_title: {
        color: 'inherit',
        fontWeight: 'bold',
        ...breakpointsStyle(theme,
            {
                key: ['marginTop'],
                value: [30],
                variant: [4],
                unit: ['px']
            }
        )
    },

    section2_text_description: {
        color: theme.palette.text.disabled,
    },

    section2_cell_link: {
        color: theme.palette.text.primary,
        '&--hover': {
            color: theme.palette.primary.main
        }
    }
});

class Capabilites extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = this.resetState()
    }

    resetState()
    {
        let totalCapabilities = 5
        return {
            allBlogs: this.getAllCapabilities(totalCapabilities)
        }
    }

    getAllCapabilities(totalBlogs)
    {
        const { t } = this.props

        let allBlogs = Array.apply(0, Array(totalBlogs))
            .map((value, index) =>
            {
                let IMG = Utils.i18Image(t, ID.CAPABILITIES[`IMG_${index + 1}`])
                let BUTTON = t(ID.CAPABILITIES[`BUTTON_${index + 1}`])
                let TITLE = t(ID.CAPABILITIES[`TITLE_${index + 1}`])
                let DESCRIPTION = t(ID.CAPABILITIES[`DESCRIPTION_${index + 1}`])
                let LINK = Utils.i18Link(t, ID.CAPABILITIES[`LINK_${index + 1}`])

                return {
                    img: IMG,
                    button: BUTTON,
                    title: TITLE,
                    description: DESCRIPTION,
                    link: LINK
                }
            })

        return allBlogs
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
                            i18nKey={ID.CAPABILITIES.SECTION_1_TEXT_1}
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
        const { classes } = this.props

        return (

            <div id={'section2'} className={clsx(classes.section, classes.section2)}>
                {

                    this.renderBlogsList()
                }
            </div>

        )
    }

    renderBlogsList() 
    {
        const {
            classes,
            t,
            width
        } = this.props

        const {
            allBlogs
        } = this.state

        return (
            <GridList className={classes.section2_grid_list} cols={1} cellHeight={'auto'}>
                {
                    allBlogs.map((item, index) => this.renderGridCell(item, index))
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

        let cellColumns = isWidthUp('md', width) ? 2 : 1

        let cellLink = item.link

        let isHover = this.state[`hover_${cellLink}`] === true

        let classCellLink = clsx(classes.section2_cell_link, {
            [classes.section2_cell_link + '--hover']: isHover
        })

        const showDot = index % 3 === 2

        return (
            <GridListTile key={index} cols={1} classes={{
                root: clsx(classes.section2_grid_list_title_root, showDot ? classes.divDot : ''),
                tile: classes.section2_grid_list_title_tile
            }}
            >
                <InViewElement variants={commonMotion.groupTransition} key={`section2-${index}-${width}`}>
                    <Link
                        to={{
                            pathname: cellLink,
                            query: item
                        }}
                        className={clsx(classCellLink, classes.textLinkHidden)}
                        onMouseEnter={this.handleMouseEnter(cellLink)}
                        onMouseLeave={this.handleMouseLeave(cellLink)}
                    >
                        {
                            cellColumns > 1
                                ? this.renderBigCell(item, index)
                                : this.renderSmallCell(item, index)
                        }
                    </Link>
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

        const flexContainer = isWidthUp('md', width)
            ? index % 2 === 1 ? 'row' : 'row-reverse'
            : null

        const styleDes = isWidthUp('md', width)
            ? index % 2 === 1 ? { paddingLeft: 'calc(2 * var(--paddingWidth))', paddingRight: 0 } : { paddingLeft: 0 }
            : null

        const styleImg = isWidthUp('md', width)
            ? index % 2 === 1 ? { justifyContent: 'flex-start' } : { justifyContent: 'flex-end' }
            : null

        return (
            <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divRow2Column, classes.fullWidth, classes.fullHeight)} style={{ flexDirection: flexContainer }}>
                <div className={clsx(classes.section2_container_img, classes.section2_container_img_big)} style={styleImg}>
                    <motion.img
                        className={classes.imgMotionContain}
                        alt={item.img}
                        src={Utils.getUrl(item.img)}
                        whileHover={{
                            scale: 1.1
                        }}
                        transition={commonMotion.transition}
                    />
                </div>
                <div className={clsx(classes.section2_container_des, classes.section2_container_des_big)} style={styleDes}>
                    <Typography className={clsx(classes.textTitle2x, classes.section2_text_title)}>{item.title}</Typography>
                    <Typography className={clsx(classes.textSubTitle2x, classes.section2_text_description)}>{item.description}</Typography>
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
            <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divColumn, classes.fullWidth, classes.fullHeight)}>
                <div className={clsx(classes.section2_container_img, classes.section2_container_img_small)}>
                    <motion.img
                        className={classes.imgMotionContain}
                        alt={item.img}
                        src={Utils.getUrl(item.img)}
                        whileHover={{
                            scale: 1.1
                        }}
                        transition={commonMotion.transition}
                    />
                </div>
                <div className={clsx(classes.divColumn, classes.divLeft, classes.divBetween, classes.section2_container_des, classes.section2_container_des_small)}>
                    <Typography className={clsx(classes.textTitle2x, classes.section2_text_title)}>{item.title}</Typography>
                    <Typography className={clsx(classes.textSubTitle2x, classes.section2_text_description)}>{item.description}</Typography>
                </div>
            </motion.div>
        )
    }

    render()
    {
        const { classes, t } = this.props;
        // console.log('Capabilites::render', this.props)
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
            </motion.div>
        );
    }
}

Capabilites.propTypes =
{
    classes: PropTypes.object.isRequired,
};

export default compose(
    withMultipleStyles(commonStyles, styles),
    withTranslation(),
    withWidth()
)(Capabilites);

