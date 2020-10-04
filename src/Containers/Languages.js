import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose'

import { withMultipleStyles, breakpointsStyle, commonStyles } from '../Styles';

import { ENFlag, VNFlag } from '../Data/Defines'
import ID from '../Translations/ID.json'
import Utils from '../Utils'

import clsx from 'clsx'
import { withTranslation } from 'react-i18next';
import { Icon, IconButton } from '@material-ui/core';


const styles = theme => ({
    root: {

    },

    buttonRoot: {
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    icon: {
        height: 30,
        width: 'auto',
        objectFit: 'cover'
    }
});

class Languages extends React.Component {
    render() {
        const {
            classes,
            i18n
        } = this.props

        return (
            <div className={clsx(classes.root, classes.divRow, classes.divCenter)}>
                <IconButton
                    classes={{ root: classes.buttonRoot }}
                    onClick={() => i18n.changeLanguage(ID.COMMON.LANGUAGE_EN)}
                >
                    <img className={classes.icon} alt={'EN'} src={Utils.getImageUrl(ENFlag)} />
                </IconButton>
                <IconButton
                    classes={{ root: classes.buttonRoot }}
                    onClick={() => i18n.changeLanguage(ID.COMMON.LANGUAGE_VN)}
                >
                    <img className={classes.icon} alt={'VN'} src={Utils.getImageUrl(VNFlag)} />
                </IconButton>
            </div>
        );
    }
}

Languages.propTypes =
{
    classes: PropTypes.object.isRequired
};

export default compose(
    withMultipleStyles(commonStyles, styles),
    withTranslation()
)(Languages);
