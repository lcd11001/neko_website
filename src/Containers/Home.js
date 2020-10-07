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

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%'
    },

});

class Home extends React.Component {
    renderSection1 = () => {
        const { classes, t, theme } = this.props
        const t1 = t(ID.HOME.SECTION_1_TEXT_1, { styles: `style="color:${theme.palette.text.secondary}"` })
        console.log('t1', t1)
        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: t1 }} className={classes.textBreak} />
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

