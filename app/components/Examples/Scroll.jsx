import { SectionIntro } from "~/components/SectionIntro";
import { FadeIn } from "~/components/FadeIn";
import { Container } from "~/components/Container";
import { motion } from "framer-motion";

export function Scroll() {

    return (
        <div className="mt-24 sm:mt-32 pb-24">
            <SectionIntro
                eyebrow="Scroll Animations"
                title="Scroll-linked and scroll-triggered animations"
            >
                <p>
                    There are two predominant types of scroll animations, both of which can be achieved with Framer Motion.
                    Scroll-linked animations are when the progress of an animation is directly tied to scroll progress. Scroll-triggered animations are when a normal animation is triggered when an element enters or leaves the viewport
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <FadeIn>
    
                </FadeIn>
            </Container>
        </div>
    );
}

