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

const styles = theme => ({
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

    render()
    {
        const { classes, t } = this.props;
        // console.log('Contact::render', this.props)
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
                <PageUnderContruction />
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
