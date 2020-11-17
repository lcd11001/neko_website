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

});

class WorksDetail extends React.Component
{


    render()
    {
        const {
            classes,
            t,
            id
        } = this.props;
        console.log('WorksDetail::render', this.props, 'id', id)

        return (
            <motion.div
                className={classes.root}
                initial={'in'}
                animate={'in'}
                exit={'out'}
                transition={commonMotion.transition}
                variants={commonMotion.pageTransition}
            >
                <div>
                    <h3 >WorksDetail - {id}</h3>
                </div>
            </motion.div>
        );
    }
}

WorksDetail.propTypes =
{
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};


export default compose(
    withMultipleStyles(commonStyles, styles),
    withTranslation()
)(WorksDetail);

