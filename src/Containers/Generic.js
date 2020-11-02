import React from 'react';
import PropTypes from 'prop-types';
import { withMultipleStyles, breakpointsStyle, commonStyles, commonMotion } from '../Styles';
import { withRouter } from 'react-router-dom'
import { motion } from 'framer-motion'

import { Trans, withTranslation } from 'react-i18next'
import ID from '../Translations/ID.json'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import * as ActionGlobal from '../Redux/Actions/ActionGlobal'

import Utils from '../Utils'
import PageUnderContruction from '../Components/PageError/PageUnderContruction';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%'
    }
});

class Generic extends React.Component {
    componentDidMount() {
        const {
            SetTitle
        } = this.props

        SetTitle(TEXT.MENU_GENERIC)
    }

    render() {
        const { classes, t } = this.props;
        // console.log('Generic::render', this.props)
        return (
            <motion.div
                className={classes.root}
                exit={{
                    opacity: 0
                }}
                transition={commonMotion.transition}
            >
                <PageUnderContruction />
            </motion.div>
        );
    }
}

Generic.propTypes =
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
    withTranslation()
)(Generic);

