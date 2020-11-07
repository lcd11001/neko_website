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
    out: {
        // opacity: 0,
        right: '-100vw',
        scale: 0.5,
        transition: {
            duration: .3
        }
    },
    in: {
        // opacity: 1,
        right: 0,
        scale: 1,
        transition: {
            duration: .3
        }
    },
}

const backgroundTransition = {
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

export default {
    transition,
    pageTransition,
    elementTransition,
    inViewTransition,
    specializeTransition,
    backgroundTransition
}