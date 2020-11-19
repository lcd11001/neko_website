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

const delayTransition = (delay) => ({
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            delay: delay,
            staggerChildren: 0.5
        }
    },
    invisible: {
        opacity: 0,
        transition: {
            when: 'afterChildren',
            staggerChildren: 0.5
        }
    }
})

const groupTransition = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.5
        }
    },
    invisible: {
        opacity: 0,
        transition: {
            when: 'afterChildren',
            staggerChildren: 0.5
        }
    }
}

const elementTransition = {
    hidden: {
        opacity: 0,
        y: '50px'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeOut',
            duration: 1,

            when: 'beforeChildren',
            staggerChildren: 0.5
        }
    },
    invisible: {
        opacity: 0,
        y: '50px',
        transition: {
            when: 'afterChildren',
            staggerChildren: 0.5
        }
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
        x: '3%',
        // opacity: 0,
        scale: 0.97
    },
    out: {
        // opacity: 0,
        x: '3%',
        scale: 0.97,
        transition: {
            duration: .5,
            ease: 'easeOut'
        }
    },
    in: {
        // opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: .5,
            ease: 'easeIn'
        }
    },
}

const backgroundTransition = {
    hidden: {
        opacity: 0,
    },
    in: {
        opacity: 1,
        transition: {
            // when: 'beforeChildren',
            duration: .5,
            ease: 'linear'
        }
    },
    out: {
        opacity: 0,
        transition: {
            // when: 'afterChildren',
            duration: .5,
            ease: 'linear'
        }
    }
}

const posTransition = (x, y, delay, duration) => ({
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
    delayTransition,
    groupTransition,
    elementTransition,
    inViewTransition,
    specializeTransition,
    backgroundTransition,
    posTransition
}