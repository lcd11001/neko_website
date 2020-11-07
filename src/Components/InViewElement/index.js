import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import { withMultipleStyles, commonMotion } from '../../Styles'

const styles = theme => ({
    root: {
        overflow: 'hidden'
    }
})

const InViewElement = (props) => {
    const [isVisible, setVisible] = useState(false)
    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView && !isVisible) {
            setVisible(true)
            controls.start(props.animate)
        } else if (!inView && isVisible) {
            setVisible(false)
            controls.start(props.exit)
        }
    }, [controls, inView, isVisible, props.animate, props.exit])

    return (
        <div
            className={props.classes.root}
            ref={ref}
        >
            <motion.div
                animate={controls}
                initial={props.initial}
                variants={props.variants}
                transition={props.transition}
            >
                {
                    props.children
                }
            </motion.div>
        </div>
    )
}

InViewElement.propTypes = {
    children: PropTypes.element.isRequired,
    variants: PropTypes.object,
    transition: PropTypes.object,
    initial: PropTypes.string,
    animate: PropTypes.string,
    exit: PropTypes.string
}

InViewElement.defaultProps = {
    variants: commonMotion.inViewTransition,
    transition: commonMotion.transition,
    initial: 'hidden',
    animate: 'visible',
    exit: 'invisible'
}

export default withMultipleStyles(styles)(InViewElement)