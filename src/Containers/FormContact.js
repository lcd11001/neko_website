import React from 'react';
import PropTypes from 'prop-types';
import { withMultipleStyles, breakpointsStyle, commonStyles, commonMotion } from '../Styles';
import { withRouter } from 'react-router-dom'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import { Trans, withTranslation } from 'react-i18next'
import ID from '../Translations/ID.json'

import compose from 'recompose/compose'

import Utils from '../Utils'
import PageUnderContruction from '../Components/PageError/PageUnderContruction';
import { withWidth, Typography } from '@material-ui/core';

import InViewElement from '../Components/InViewElement'
import { AppLogo } from '../Data/Defines';
import Logo from './Logo';
import SendEmail from '../Components/SendEmail';

const styles = theme => ({
    pageRoot: {
        backgroundColor: '#F8F8F8',
        minHeight: '100vh'
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section1: {

    },

    section1_txt1: {
        color: theme.palette.text.primary,
        marginTop: 'calc(var(--spacing) / 2)'
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section3: {
        paddingTop: 0
    }
});

class FormContact extends React.Component
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
                <motion.div variants={commonMotion.elementTransition} id={'section1'} className={clsx(classes.divColumn, classes.divCenter, classes.section, classes.section1)}>
                    <Logo />
                    <Typography className={clsx(classes.textBreak, classes.text62, classes.section1_txt1)} >
                        <Trans
                            i18nKey={ID.FORM_CONTACT.SECTION_1_HEADER}
                        />
                    </Typography>
                </motion.div>
            </InViewElement>
        )

    }

    renderSection3() 
    {
        const {
            classes,
            t,
            width
        } = this.props;

        return (
            <InViewElement variants={commonMotion.groupTransition} key={`section3-${width}`}>
                <motion.div variants={commonMotion.elementTransition} id={'section3'} className={clsx(classes.divColumn, classes.divCenter, classes.section, classes.section3)}>
                    <SendEmail simpleForm={false} />
                </motion.div>
            </InViewElement>
        )
    }

    render()
    {
        const { classes, t } = this.props;
        // console.log('FormContact::render', this.props)
        return (
            <motion.div
                className={clsx(classes.root, classes.spacing, classes.pageRoot)}
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
                    this.renderSection3()
                }
            </motion.div>
        );
    }
}

FormContact.propTypes =
{
    classes: PropTypes.object.isRequired,
};

export default compose(
    withMultipleStyles(commonStyles, styles),
    withTranslation(),
    withWidth()
)(FormContact);

