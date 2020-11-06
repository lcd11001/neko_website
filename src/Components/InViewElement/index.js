import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import { commonMotion } from '../../Styles'

const InViewElement = (props) => {
    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            controls.start(props.animate)
        } else {
            controls.start(props.exit)
        }
    }, [controls, inView, props.animate, props.exit])

    return (
        <div
            style={{
                overflow: "hidden"
            }}
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

export default InViewElement