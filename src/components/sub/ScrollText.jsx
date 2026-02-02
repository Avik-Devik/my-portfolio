'use client'
import { useRef } from 'react'
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from 'framer-motion'
// import { wrap } from '@motionone/utils'

const wrap = (min, max, v) => {
    const rangeSize = max - min
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

const ParallaxText = ({ children, baseVelocity = 100 }) => {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    })
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    })

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

    const directionFactor = useRef(1)
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get()

        baseX.set(baseX.get() + moveBy)
    })

    return (
        <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
            <motion.div className="flex whitespace-nowrap gap-10 flex-nowrap" style={{ x }}>
                <span className="block text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-800 dark:text-zinc-200 mr-8">{children}</span>
                <span className="block text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-800 dark:text-zinc-200 mr-8">{children}</span>
                <span className="block text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-800 dark:text-zinc-200 mr-8">{children}</span>
                <span className="block text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-800 dark:text-zinc-200 mr-8">{children}</span>
            </motion.div>
        </div>
    )
}

const ScrollText = () => {
    return (
        <div className="w-full flex flex-col gap-4 py-10 overflow-hidden relative z-0">
            <ParallaxText baseVelocity={-2}>Yes, This is Me • Yes, This is Me •</ParallaxText>
            <ParallaxText baseVelocity={2}>Yes, This is Me • Yes, This is Me •</ParallaxText>
            <ParallaxText baseVelocity={-2}>Yes, This is Me • Yes, This is Me •</ParallaxText>
        </div>
    )
}

export default ScrollText
