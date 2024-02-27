import { SectionIntro } from "~/components/SectionIntro"
import { FadeIn } from "~/components/FadeIn"
import { Container } from "~/components/Container"
import { motion } from "framer-motion"
import clsx from "clsx"

export function MotionTBA() {

    return (
        <div className="mt-24 sm:mt-32 lg:mt-40">
            <SectionIntro
                eyebrow="To be continued..."
                title="This section is still under construction"
            >
                <p>
                    This section will be updated with more examples soon!
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <FadeIn>
                </FadeIn>
            </Container>
        </div>
    )
}