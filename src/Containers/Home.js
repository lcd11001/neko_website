import React from 'react';
import PropTypes from 'prop-types';
import { withMultipleStyles, breakpointsStyle } from '../Styles';

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import * as ActionGlobal from '../Redux/Actions/ActionGlobal'

import TEXT from '../Data/Text'
import Utils from '../Utils'
import PageUnderContruction from '../Components/PageError/PageUnderContruction';

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
        const { classes } = this.props;
        // console.log('Home::render', this.props)
        return (
            <div className={classes.root}>
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
    withMultipleStyles(styles)
)(Home);

