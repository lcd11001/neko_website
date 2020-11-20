import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useInView } from 'react-intersection-observer'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'

import { withMultipleStyles, commonMotion } from '../../Styles'

const styles = theme => ({
    root: {
        // overflow: 'hidden'
        width: '100%',
        height: '100%'
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
            controls.stop()
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
            style={{ ...props.style }}
        >
            <AnimatePresence key={`${isDidMount}-${inView}`}>
                {
                    // inView &&
                    <motion.div
                        className={props.classes.root}
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
    children: PropTypes.node.isRequired,
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
    options: {
        triggerOnce: true
    }
}

export default withMultipleStyles(styles)(InViewElement)