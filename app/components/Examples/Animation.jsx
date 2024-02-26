import { SectionIntro } from "~/components/SectionIntro";
import { FadeIn } from "~/components/FadeIn";
import { Container } from "~/components/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Animation() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    return (
        <div className="mt-24 sm:mt-32 pb-24">
            <SectionIntro
                eyebrow="Animation"
                title="The Animate Prop"
            >
                <p>
                    The animate prop can accept an object of values. When one of them changes, the motion component will automatically animate to the new state.
                    The animation used can be configured using the transition prop
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <FadeIn> 
          
                </FadeIn>
            </Container>
        </div>
    );
}
