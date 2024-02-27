import { SectionIntro } from "~/components/SectionIntro"
import { FadeIn } from "~/components/FadeIn"
import { Container } from "~/components/Container"
import { motion, stagger, useAnimate } from "framer-motion"
import { useEffect, useRef } from "react"
import clsx from "clsx"

export function UseAnimateStagger() {

    return (
        <div className="mt-24 sm:mt-32 lg:mt-40">
            <SectionIntro
                eyebrow="Staggered Text Animation"
                title="Manually control animations with the useAnimate hook"
            >
                <p>
                    Framer Motion's <strong>useAnimate</strong> hook offers manual control over animations by returning a <strong>scope</strong> ref and an <strong>animate</strong> function. 
                    The <strong>scope</strong> ref confines animations to a particular component, while the <strong>animate</strong> function initiates these animations
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <FadeIn>
                    <StaggeredText words={words} className="mt-8" />
                </FadeIn>
            </Container>
        </div>
    )
}

const words = `Tools are just tools. They don't really matter—especially to the people trying to use the websites you build. The same goes for frameworks too. The most important thing is that you stick to the key principles`

const StaggeredText = ({
    words,
    className,
}: {
    words: string
    className?: string
}) => {
    const [scope, animate] = useAnimate()
    const wordsArray = words.split(" ")
    const ref = useRef(null)

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.2),
            }
        );
    }, [scope.current]);    
    
    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, index) => {
                    return (
                        <motion.span
                            key={word + index}
                            className="text-centroIndigo opacity-0 leading-snug tracking-wide text-balance"
                        >
                            {word}{" "}
                        </motion.span>
                    )
                })}
            </motion.div>
        )
    }
    
    return (
        <div className={clsx(
            "max-w-2xl mx-auto",
            "flex items-center justify-center",
            className
        )}
        >
            <div className="text-2xl sm:text-3xl">
                {renderWords()}
            </div>
        </div>
    )
}