const transition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96]
}

const pageTransition = {
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
}

const elementTransition = {
    hidden: {
        opacity: 0,
        top: '-100vh',
        position: 'relative'
    },
    in: {
        position: 'relative',
        opacity: 1,
        top: 0
    },
    out: {
        position: 'relative',
        opacity: 0.2,
        top: 0
    }
}

const inViewTransition = {
    hidden: {
        opacity: 0,
        y: '50px'
    },
    visible: {
        opacity: 1,
        y: 0
    },
    invisible: {
        opacity: 0.2,
        y: '50px'
    }
}

const specializeTransition = {
    hidden: {
        // x: '5px',
        opacity: 0.5,
        scale: 1.01
    },
    out: {
        opacity: 0.5,
        // x: '5px',
        scale: 0.99,
        transition: {
            duration: .1
        }
    },
    in: {
        opacity: 1,
        // x: 0,
        scale: 1,
        transition: {
            duration: .3
        }
    },
}

const backgroundTransition = {
    hidden: {
        opacity: 0
    },
    in: {
        opacity: 1,
        transition: {
            when: 'beforeChildren'
        }
    },
    out: {
        opacity: 0,
        transition: {
            when: 'afterChildren'
        }
    }
}

const dialogTransition = (x, y, delay, duration) => ({
    hidden: {
        opacity: 0,
        x: `${x}px`,
        y: `${y}px`,
        transition: {
            delay: 0
        }
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration,
            delay
        }
    },
    invisible: {
        opacity: 0,
        x: `${x}px`,
        y: `${y}px`,
        transition: {
            delay: 0,
            duration: 0.1
        }
    }
})

export default {
    transition,
    pageTransition,
    elementTransition,
    inViewTransition,
    specializeTransition,
    backgroundTransition,
    dialogTransition
}