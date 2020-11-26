import React from 'react';
import PropTypes from 'prop-types';
import { withMultipleStyles, breakpointsStyle, commonStyles, commonMotion } from '../Styles';
import { withRouter } from 'react-router-dom'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import { Trans, withTranslation } from 'react-i18next'

import * as Icons from '../Components/NekoIcons'

import ID from '../Translations/ID.json'

import compose from 'recompose/compose'

import Utils from '../Utils'

import { withWidth, Typography, FormControl, Button, Grid, TextField } from '@material-ui/core';

import AspectRatio from '../Components/AspectRatio'
import InViewElement from '../Components/InViewElement'
import SendEmail from '../Components/SendEmail'

const styles = theme => ({
    pageRoot: {
        position: 'relative',
        backgroundColor: '#FFFFFF',
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section1: {
        backgroundColor: theme.palette.primary.main,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
        marginRight: 'calc(var(--spacing) / 2)',
        marginTop: 'calc(var(--spacing) / 2)'
    },

    section2_avatar_container: {
        marginBottom: 'calc(var(--spacing) / 4)'
    },

    section2_avatar: {
        borderColor: theme.palette.primary.secondary,
        transform: 'rotate(-15deg)',
        transformOrigin: 'top left'
    },

    section2_txt1: {
        wordBreak: 'break-word',
        whiteSpace: 'normal',
        marginBottom: 'calc(var(--spacing) / 4)'
    },

    section2_txt_contact: {
        marginBottom: 'calc(var(--spacing) / 8)'
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    section3: {
        backgroundColor: 'white',
        marginLeft: 'calc(var(--spacing) / 2)',
        marginTop: 'calc(-1 * var(--spacing))'
    }
});

class Contact extends React.Component
{
    renderSection1() 
    {
        const {
            classes,
            t,
            width
        } = this.props;

        let ImageUrl = `url(${Utils.getUrl(t(ID.IMAGE.BACKGROUND_CONTACT))})`

        return (
            <InViewElement variants={commonMotion.groupTransition} key={`section1-${width}`}>
                <motion.div
                    variants={commonMotion.elementTransition}
                    id={'section1'}
                    className={clsx(classes.section, classes.section1)}
                    style={{
                        backgroundImage: ImageUrl
                    }}
                >
                    <Typography className={clsx(classes.textBreak, classes.text62, classes.section1_txt1, classes.section1_txt1_dim)} >
                        <Trans
                            i18nKey={ID.CONTACT.SECTION_1_TEXT_1}
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
            t,
            width
        } = this.props;

        return (
            <InViewElement variants={commonMotion.groupTransition} key={`section2-${width}`}>
                <div className={clsx(classes.divRow2Column, classes.section)} style={{ flex: 2 }}>
                    {
                        this.renderSection2Left()
                    }
                    {
                        this.renderSection2Right()
                    }
                </div>
            </InViewElement>
        )
    }

    renderSection2Left()
    {
        const {
            classes,
            t,
            width
        } = this.props;

        return (

            <motion.div
                variants={commonMotion.elementTransition}
                id={'section2'}
                className={clsx(classes.divColumn, classes.divLeft, classes.section2)}
                style={{ flex: 1 }}
            >
                <div className={clsx(classes.section2_avatar_container)}>
                    <AspectRatio
                        ratio={1}
                        classes={{
                            outerWrapper: classes.avatarOuter,
                            innerWrapper: classes.avatarInner,
                        }}
                    >
                        <div className={clsx(classes.avatarBorder, classes.section2_avatar)}>

                        </div>
                    </AspectRatio>
                </div>
                <Typography className={clsx(classes.text62, classes.section2_txt1)} >
                    <Trans i18nKey={ID.CONTACT.SECTION_2_TEXT_1} />
                </Typography>
                <Grid container >
                    <Grid item xs={2}>
                        <Typography className={clsx(classes.text18, classes.section2_txt_contact)} color={'textSecondary'} >
                            <Trans i18nKey={ID.CONTACT.SECTION_2_TEXT_2_1} />
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography className={clsx(classes.text18, classes.section2_txt_contact)} color={'textSecondary'}>
                            <Trans i18nKey={ID.CONTACT.SECTION_2_TEXT_2_2} />
                        </Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography className={clsx(classes.text18, classes.section2_txt_contact)} color={'textSecondary'}>
                            <Trans i18nKey={ID.CONTACT.SECTION_2_TEXT_3_1} />
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography className={clsx(classes.text18, classes.section2_txt_contact)} color={'textSecondary'}>
                            <Trans i18nKey={ID.CONTACT.SECTION_2_TEXT_3_2} />
                        </Typography>
                    </Grid>
                </Grid>
            </motion.div>

        )
    }

    renderSection2Right()
    {
        const {
            classes,
            t,
            width
        } = this.props;

        return (
            <motion.div
                variants={commonMotion.elementTransition}
                id={'section3'}
                className={clsx(classes.divBox, classes.section3)}
                style={{ flex: 1 }}
            >
                <SendEmail />
            </motion.div>
        )
    }

    render()
    {
        const { classes, t } = this.props;
        // console.log('Contact::render', this.props)
        return (
            <motion.div
                className={clsx(classes.root, classes.pageRoot, classes.spacing)}
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

Contact.propTypes =
{
    classes: PropTypes.object.isRequired,
};

export default compose(
    withMultipleStyles(commonStyles, styles),
    withTranslation(),
    withWidth()
)(Contact);

