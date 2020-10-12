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
import PageUnderContruction from '../Components/PageError/PageUnderContruction';
import { Button, Typography } from '@material-ui/core';

import * as Icons from '../Components/NekoIcons'

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%'
    },

    secondaryText: {
        color: theme.palette.text.secondary
    },

    iconArrow: {
        color: 'inherit',
        ...breakpointsStyle(theme,
            {
                key: ['width', 'marginLeft'],
                value: [45, 30],
                variant: [7, 5],
                unit: ['px', 'px']
            }
        ),
    },

    section1_img1: {
        width: '45%',
        objectFit: 'contain',
        ...breakpointsStyle(theme,
            {
                key: ['padding-left'],
                value: [50],
                variant: [5],
                unit: ['px']
            }
        ),
    },

    section1_img2: {
        width: '60%',
        objectFit: 'contain',
        ...breakpointsStyle(theme,
            {
                key: ['padding-right'],
                value: [50],
                variant: [5],
                unit: ['px']
            }
        ),
    },

    section1_img3: {
        width: '15%',
        objectFit: 'contain',
        backgroundColor: `${theme.palette.primary.secondary}1E`, // 1E = 12%
        borderRadius: '50%',
        transform: 'translateX(-25%) scaleX(-1)'
    },

    section1_txt1: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [55, 65],
                variant: [10, 12],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 500
    },

    section1_txt2: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [40, 65],
                variant: [7, 8],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 500
    },

    section1_txt3: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [15, 17],
                variant: [2, 2],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 500
    },

    section1_btn1: {
        ...breakpointsStyle(theme,
            {
                key: ['padding-top'],
                value: [40],
                variant: [5],
                unit: ['px']
            }
        ),
    }
});

class Home extends React.Component {
    renderSection1 = () => {
        const { classes, t, theme } = this.props

        return (
            <div id={'section1'} className={clsx(classes.divColumn)}>
                <div id={'section1.1'} className={clsx(classes.divRow, classes.divCenter)}>
                    <div className={clsx(classes.divColumn, classes.divColumn)}>
                        <Typography className={clsx(classes.textBreak, classes.section1_txt1)}>
                            <Trans
                                i18nKey={ID.HOME.SECTION_1_TEXT_1}
                                components={{ span: <span /> }}
                                values={{
                                    custom: clsx(classes.secondaryText)
                                }}
                            />
                        </Typography>
                        <div className={classes.section1_btn1}>
                            <Button variant={'contained'} color={'primary'}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_1_BUTTON_1}
                                />
                                <Icons.IconMenuArrow className={classes.iconArrow} />
                            </Button>
                        </div>
                    </div>
                    <img alt={'but_chi_nho.png'} src={Utils.getImageUrl('home/but_chi_nho.png')} className={classes.section1_img1} />
                </div>
                <div id={'section1.2'} className={clsx(classes.divRow, classes.divCenter)}>
                    <img alt={'Con_Meo0001_nho.png'} src={Utils.getImageUrl('home/Con_Meo0001_nho.png')} className={classes.section1_img2} />
                    <div className={clsx(classes.divColumn, classes.divColumn)}>
                        <div className={clsx(classes.divRow, classes.divCenter, classes.divTop)}>
                            <Typography className={clsx(classes.textBreak, classes.section1_txt2)}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_1_TEXT_2}
                                    components={{ span: <span /> }}
                                    values={{
                                        custom: clsx(classes.secondaryText)
                                    }}
                                />
                            </Typography>
                            <img alt={'magic-wand.png'} src={Utils.getImageUrl('home/magic-wand.png')} className={classes.section1_img3} />
                        </div>
                        <Typography className={clsx(classes.textBreak, classes.section1_txt3)}>
                            <Trans
                                i18nKey={ID.HOME.SECTION_1_TEXT_3}
                                components={{ span: <span /> }}
                                values={{
                                    custom: clsx(classes.secondaryText)
                                }}
                            />
                        </Typography>
                        <div className={classes.section1_btn1}>
                            <Button variant={'contained'} color={'primary'}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_1_BUTTON_2}
                                />
                                <Icons.IconMenuArrow className={classes.iconArrow} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { classes, t, i18n } = this.props;
        // console.log('Home::render', this.props)
        return (
            <div className={classes.root}>
                {this.renderSection1()}
                <PageUnderContruction />
            </div>
        );
    }
}

Home.propTypes =
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
    withMultipleStyles(commonStyles, styles, { withTheme: true }),
    withTranslation()
)(Home);

