import React from 'react';
import PropTypes from 'prop-types';
import { withMultipleStyles, breakpointsStyle, commonStyles, commonMotion } from '../Styles';
import { Link, withRouter } from 'react-router-dom'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import { Trans, withTranslation } from 'react-i18next'
import ID from '../Translations/ID.json'

import compose from 'recompose/compose'

import Utils from '../Utils'
import PageUnderContruction from '../Components/PageError/PageUnderContruction';
import { withWidth, Typography, Button } from '@material-ui/core';

import InViewElement from '../Components/InViewElement'

import * as Icons from '../Components/NekoIcons'

const styles = theme => ({
    section1: {
        backgroundImage: `linear-gradient(${theme.palette.primary.secondary}, ${theme.palette.primary.main})`,
        minHeight: '100vh',

        // paddingTop: '5% !important'
    },

    section1_txt1: {
        color: 'white',
        maxWidth: '50%',
        textAlign: 'left',
        marginTop: 'calc(var(--spacing) / 3)',
        marginBottom: 'calc(var(--spacing) / 3)'
    },

    section1_txt2: {
        color: 'white',
        opacity: 0.25,
        maxWidth: '50%',
        textAlign: 'left',
        marginBottom: 'calc(var(--spacing) / 3)'
    },

    section1_txt3: {
        color: 'white',
        maxWidth: '50%',
        textAlign: 'left',
        marginBottom: 'calc(var(--spacing) / 4)'
    },

    section1_txt4: {
        color: 'white',
        maxWidth: '50%',
        textAlign: 'left',
        marginBottom: 'calc(var(--spacing) / 4)'
    },

    section1_button1: {
        backgroundColor: 'black',
        '&:hover': {
            backgroundColor: '#191919',
        },
        '&:active': {
            backgroundColor: '#323232',
        }
    }
});

class Streamline extends React.Component
{
    renderSection1() 
    {
        const {
            classes,
            t,
            width
        } = this.props;

        return (
            <InViewElement variants={commonMotion.groupTransition} key={`section1-${width}`}>
                <motion.div variants={commonMotion.elementTransition} id={'section1'} className={clsx(classes.divColumn, classes.divCenter, classes.divLeft, classes.section, classes.section1)}>
                    <Typography className={clsx(classes.textLimitMultiline, classes.text75, classes.section1_txt1)} >
                        <Trans
                            i18nKey={ID.STREAMLINE.SECTION_1_TEXT_1}
                        />
                    </Typography>

                    <Typography className={clsx(classes.textLimitMultiline, classes.text50, classes.section1_txt2)} >
                        <Trans
                            i18nKey={ID.STREAMLINE.SECTION_1_TEXT_2}
                        />
                    </Typography>

                    <Typography className={clsx(classes.textLimitMultiline, classes.text25, classes.section1_txt3)} >
                        <Trans
                            i18nKey={ID.STREAMLINE.SECTION_1_TEXT_3}
                        />
                    </Typography>

                    <Typography className={clsx(classes.textLimitMultiline, classes.text25, classes.section1_txt4)} >
                        <Trans
                            i18nKey={ID.STREAMLINE.SECTION_1_TEXT_4}
                        />
                    </Typography>

                    <Link to={Utils.i18Link(t, ID.STREAMLINE.SECTION_1_LINK_1)} className={classes.textLinkHidden}>
                        <Button
                            variant={'contained'}
                            color={'primary'}
                            endIcon={<Icons.IconMenuArrow className={classes.iconArrow} />}
                            type={'submit'}
                            classes={{ containedPrimary: classes.section1_button1 }}
                        >
                            <Trans
                                i18nKey={ID.STREAMLINE.SECTION_1_BUTTON_1}
                            />
                        </Button>
                    </Link>
                </motion.div>
            </InViewElement>
        )

    }

    render()
    {
        const { classes, t } = this.props;
        // console.log('Streamline::render', this.props)
        return (
            <motion.div
                className={clsx(classes.root, classes.spacing)}
                initial={'in'}
                animate={'in'}
                exit={'out'}
                transition={commonMotion.transition}
                variants={commonMotion.pageTransition}
            >
                {
                    this.renderSection1()
                }
                <PageUnderContruction />
            </motion.div>
        );
    }
}

Streamline.propTypes =
{
    classes: PropTypes.object.isRequired,
};

export default compose(
    withMultipleStyles(commonStyles, styles),
    withTranslation(),
    withWidth()
)(Streamline);

