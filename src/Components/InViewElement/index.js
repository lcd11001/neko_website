import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useInView } from 'react-intersection-observer'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'

import { withMultipleStyles, commonMotion } from '../../Styles'

const styles = theme => ({
    root: {
        // overflow: 'hidden'
    }
})

const InViewElement = (props) =>
{
    const [isDidMount, setDidMount] = useState(false)
    useEffect(() =>
    {
        setDidMount(true)

        return () =>
        {
            setDidMount(false)
        }
    }, [])

    const controls = useAnimation()
    const [ref, inView] = useInView(props.options)

    useEffect(() =>
    {
        if (isDidMount)
        {
            if (inView)
            {
                controls.start(props.animate, props.transition)
            }
            else
            {
                controls.start(props.exit, props.transition)
            }
        }
        else
        {
            controls.stop()
        }
    }, [controls, inView, isDidMount, props.animate, props.exit])

    return (
        <div
            className={props.classes.root}
            ref={ref}
        >
            <AnimatePresence key={`${isDidMount}-${inView}`}>
                {
                    inView &&
                    <motion.div
                        animate={controls}
                        initial={props.initial}
                        variants={props.variants}
                        // transition={props.transition}
                    >
                        {
                            props.children
                        }
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

InViewElement.propTypes = {
    children: PropTypes.element.isRequired,
    variants: PropTypes.object,
    transition: PropTypes.object,
    initial: PropTypes.string,
    animate: PropTypes.string,
    exit: PropTypes.string,
    options: PropTypes.shape({
        root: PropTypes.element,
        rootMargin: PropTypes.string,
        threshold: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
        triggerOnce: PropTypes.bool,
        skip: PropTypes.bool,
        initialInView: PropTypes.bool,
        trackVisibility: PropTypes.bool,
        delay: PropTypes.number
    })
}

InViewElement.defaultProps = {
    variants: commonMotion.inViewTransition,
    transition: commonMotion.transition,
    initial: 'hidden',
    animate: 'visible',
    exit: 'invisible',
    options: {}
}

export default withMultipleStyles(styles)(InViewElement)