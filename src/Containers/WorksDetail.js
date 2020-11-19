import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'

import { withMultipleStyles, breakpointsStyle, commonStyles, commonMotion } from '../Styles';
import { withRouter } from 'react-router-dom'
import { motion } from 'framer-motion'

import { Trans, withTranslation } from 'react-i18next'
import ID from '../Translations/ID.json'

import compose from 'recompose/compose'

import Utils from '../Utils'
import { Typography, withWidth } from '@material-ui/core';
import InViewElement from '../Components/InViewElement'

const OVERLAP_Y = 150

const styles = theme => ({
    section1: {

    },

    section1_text_title: {
        color: 'inherit',
        fontWeight: 'bold'
    },

    section1_text_category: {
        color: theme.palette.text.disabled,
        ...breakpointsStyle(theme,
            {
                key: ['marginTop'],
                value: [30],
                variant: [4],
                unit: ['px']
            }
        ),
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section2: {
        // check commonStyles.toolbar for more detail
        ...breakpointsStyle(theme,
            {
                key: ['paddingRight'],
                value: [100],
                variant: [22],
                unit: ['px']
            }
        ),
        zIndex: 1,
        position: 'relative'
    },



    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section3: {
        transform: `translateY(${-OVERLAP_Y}px)`,
        backgroundColor: 'black',
        color: 'white'
    },

    section3_text_content: {
        ...breakpointsStyle(theme,
            {
                key: ['line-height'],
                value: [50],
                variant: [5],
                unit: ['px']
            }
        ),
        color: 'inherit',
        fontWeight: 'bold',
        marginTop: OVERLAP_Y
    }
});

class WorksDetail extends React.Component
{
    constructor(props)
    {
        super(props)

        console.log('WorksDetail', props)
        this.state = this.resetState()
    }

    resetState()
    {
        const {
            location: {
                query
            },
            id,
            t
        } = this.props

        if (query)
        {
            return query
        }

        if (id)
        {
            let IMG = Utils.i18Image(t, ID.WORKS[`IMG_${id}`])
            let CATEGORY = t(ID.WORKS[`CATEGORY_${id}`]).split(',')
                .map(item =>
                {
                    return t(ID.MENU[item.replace(/MENU::/g, '').trim()])
                })
            let TITLE = t(ID.WORKS[`TITLE_${id}`])
            let CONTENT = t(ID.WORKS[`CONTENT_${id}`])
            let LINK = Utils.i18Link(t, ID.WORKS[`LINK_${id}`])

            return {
                img: IMG,
                category: CATEGORY,
                title: TITLE,
                content: CONTENT,
                link: LINK
            }
        }

        return {}
    }

    renderSection1()
    {
        const {
            classes
        } = this.props

        const {
            img,
            category,
            title,
            link
        } = this.state

        return (
            <InViewElement variants={commonMotion.groupTransition}>
                <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divColumn, classes.section, classes.section1)}>
                    <Typography className={clsx(classes.textCaption, classes.section1_text_title)}>{title}</Typography>
                    <Typography className={clsx(classes.textSubTitle2x, classes.section1_text_category)}>{category.join(', ')}</Typography>
                </motion.div>
            </InViewElement>
        )
    }

    renderSection2()
    {
        const {
            classes
        } = this.props

        const {
            img,
            category,
            title,
            link
        } = this.state

        return (
            <InViewElement variants={commonMotion.groupTransition}>
                <motion.div variants={commonMotion.elementTransition} className={clsx(classes.fullWidth, classes.section2)}>
                    <img className={classes.imgMotion} alt={img} src={Utils.getUrl(img)} />
                </motion.div>
            </InViewElement>
        )
    }

    renderSection3()
    {
        const {
            classes
        } = this.props

        const {
            img,
            category,
            title,
            content,
            link
        } = this.state

        return (
            <InViewElement variants={commonMotion.groupTransition}>
                <div className={clsx(classes.divColumn, classes.section, classes.section3)}>
                    <motion.div variants={commonMotion.elementTransition}>
                        <Typography className={clsx(classes.textTitle, classes.section3_text_content)}>{content}</Typography>
                    </motion.div>
                </div>
            </InViewElement>
        )
    }

    render()
    {
        const {
            classes,
            t,
            id,
        } = this.props;


        console.log('WorksDetail::render', this.props, 'id', id)

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
        );
    }
}

WorksDetail.propTypes =
{
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};


export default compose(
    withMultipleStyles(commonStyles, styles),
    withTranslation(),
    withRouter,
    withWidth()
)(WorksDetail);

