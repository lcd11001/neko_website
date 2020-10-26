import React from 'react';
import PropTypes from 'prop-types';
import { withMultipleStyles, breakpointsStyle, commonStyles } from '../Styles';
import clsx from 'clsx'

import { Trans, withTranslation } from 'react-i18next'
import ID from '../Translations/ID.json'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import * as ActionGlobal from '../Redux/Actions/ActionGlobal'

import Utils from '../Utils'

import { Link } from 'react-router-dom';

import { Button, Divider, Fade, IconButton, Typography } from '@material-ui/core';

import * as Icons from '../Components/NekoIcons'

import AspectRatio from '../Components/AspectRatio';

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
        paddingTop: '5% !important'
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

    section2_title: {
        textTransform: 'uppercase',
        padding: '10% 0',
        fontWeight: 'bold'
    },

    section2_subtitle: {
        padding: '0 15%',
        textAlign: 'center',
        ...breakpointsStyle(theme,
            {
                key: ['minHeight'],
                value: [80],
                variant: [5],
                unit: ['px']
            }
        ),
    },

    section2_img: {
        backgroundColor: theme.palette.primary.secondary,
        ...breakpointsStyle(theme,
            {
                key: ['height', 'width', 'borderRadius'],
                value: [150, 150, 10],
                variant: [20, 20, 0],
                unit: ['px', 'px', 'px']
            }
        ),
        transform: 'rotate(-20deg)',
        marginBottom: '10%'
    },

    section2_btn: {
        padding: '10% 0',
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section3: {
        backgroundColor: '#F8F8F8',
        ...breakpointsStyle(theme,
            {
                key: ['height'],
                value: [35],
                variant: [-2],
                unit: ['vw']
            }
        ),
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: '5% !important'
    },

    section3_txt1: {
        textAlign: 'center',
        marginRight: '10%'
    },

    section3_txt1_custom: {
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
})

class About extends React.Component {

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    renderSection1() {
        const { classes } = this.props;
        return (
            <div id={'section1'} className={clsx(classes.section, classes.section1)}>
                <Typography className={clsx(classes.textBreak, classes.textSubHeader, classes.section1_txt1, classes.section1_txt1_dim)} >
                    <Trans
                        i18nKey={ID.ABOUT.SECTION_1_TEXT_1}
                        components={{ span: <span /> }}
                        values={{
                            custom: clsx(classes.section1_txt1)
                        }}
                    />
                </Typography>
            </div>
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    renderSection2() {
        const { classes } = this.props;
        const totalColumn = 2
        return (
            <div id={'section2'} className={clsx(classes.divRow, classes.divCenter, classes.section, classes.section2)} style={{ flex: totalColumn }}>
                {
                    Array.apply(0, Array(totalColumn))
                        .map((value, index) => (
                            this.renderSection2Contact(index)
                        ))
                }
            </div>
        )
    }

    renderSection2Contact(index) {
        const {
            classes,
            t
        } = this.props

        const TITILE = t(ID.ABOUT[`SECTION_2_TEXT_${index + 1}_A`])
        const SUB_TITILE = t(ID.ABOUT[`SECTION_2_TEXT_${index + 1}_B`])
        const LINK = Utils.i18Link(t, ID.ABOUT[`SECTION_2_BUTTON_${index + 1}_LINK`])
        const BUTTON = t(ID.ABOUT[`SECTION_2_BUTTON_${index + 1}`])

        return (
            <div key={index} id={`section2.${index + 1}`} className={clsx(classes.divColumn, classes.divBetween)} style={{ flex: 1 }}>
                <div className={classes.section2_img} />
                <Typography className={clsx(classes.textTitle, classes.section2_title)}>{TITILE}</Typography>
                <Typography className={clsx(classes.textSubTitle, classes.section2_subtitle)}>{SUB_TITILE}</Typography>
                <div className={classes.section2_btn}>
                    <Link to={LINK} className={classes.textLinkHidden}>
                        <Button variant={'contained'} color={'primary'}>
                            {BUTTON}
                            <Icons.IconMenuArrow className={classes.iconArrow} />
                        </Button>
                    </Link>
                </div>

            </div>
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    renderSection3() {
        const { classes } = this.props;
        return (
            <div id={'section3'} className={clsx(classes.section, classes.section3)}>
                <Typography className={clsx(classes.textBreak, classes.textHeader, classes.section3_txt1)} color={'textSecondary'} >
                    <Trans
                        i18nKey={ID.ABOUT.SECTION_3_TEXT_1}
                        components={{ span: <span /> }}
                        values={{
                            custom: clsx(classes.section3_txt1_custom)
                        }}
                    />
                </Typography>
            </div>
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    render() {
        const { classes } = this.props;
        // console.log('About::render', this.props)
        return (
            <div className={classes.root}>
                {
                    // cheat for removing '& div:first-child'
                }
                <div key={'cheat'} />
                {this.renderSection1()}
                {this.renderSection2()}
                {this.renderSection3()}
                {/* {this.renderSection4()}
                {this.renderSection5()} */}
            </div>
        );
    }
}

About.propTypes =
{
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    ...state.global,
    ...state.cms
})

const mapDispatchToProps = (dispatch) => ({
    SetTitle: (title) => {
        dispatch(ActionGlobal.SetTitle(title))
    }
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withMultipleStyles(commonStyles, styles),
    withTranslation()
)(About);