import React from 'react';
import PropTypes from 'prop-types';
import { withMultipleStyles, breakpointsStyle } from '../Styles';

import { Trans, withTranslation } from 'react-i18next'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import * as ActionGlobal from '../Redux/Actions/ActionGlobal'

import TEXT from '../Data/Text'
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
    componentDidMount() {
        const {
            SetTitle
        } = this.props

        SetTitle(TEXT.MENU_Home)
    }

    render() {
        const { classes, t, i18n } = this.props;
        // console.log('Home::render', this.props)
        return (
            <div className={classes.root}>
                <div>
                    <h1>{t('welcome.title', { framework: 'react-i18-next' })}</h1>
                </div>
                <Trans i18nKey='welcome.intro'>
                    <font style={{color: 'blue'}}><code>src/App.js</code></font>
                </Trans>
                <div>
                    <Button onClick={() => i18n.changeLanguage('en')}>EN</Button>
                    <Button onClick={() => i18n.changeLanguage('vn')}>VN</Button>
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

