import React from 'react';
import PropTypes from 'prop-types';
import { withMultipleStyles, breakpointsStyle } from '../Styles';

import { Trans, withTranslation } from 'react-i18next'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import * as ActionGlobal from '../Redux/Actions/ActionGlobal'

import ID from '../Translations/ID.json'
import Utils from '../Utils'
import PageUnderContruction from '../Components/PageError/PageUnderContruction';
import { Button } from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%'
    }
});

class Home extends React.Component {

    render() {
        const { classes, t, i18n } = this.props;
        // console.log('Home::render', this.props)
        return (
            <div className={classes.root}>
                <div>
                    <Button onClick={() => i18n.changeLanguage(ID.COMMON.LANGUAGE_EN)}>
                        <Trans i18nKey={ID.COMMON.LANGUAGE_EN} />
                    </Button>
                    <Button onClick={() => i18n.changeLanguage(ID.COMMON.LANGUAGE_VN)}>
                        <Trans i18nKey={ID.COMMON.LANGUAGE_VN} />
                    </Button>
                </div>
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
    withMultipleStyles(styles),
    withTranslation('common')
)(Home);

