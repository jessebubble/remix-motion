import type { MetaFunction } from "@remix-run/node";
import { PageIntro } from "~/components/PageIntro";
import { AnimationSVG } from "~/components/Examples/AnimationSVG";
import { UseAnimateStagger } from "~/components/Examples/UseAnimate"
import { AnimateGrid } from "~/components/Examples/AnimateGrid";
import { MotionTBA } from "~/components/Examples/TBA";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix-Motion" },
    { name: "description", content: "Framer-Motion examples with the full-stack react framework Remix and TailwindCSS" },
  ];
};

export default function Index() {
  return (
    <>
      <PageIntro
        eyebrow="Remix + Framer-Motion"
        title="Remix-Motion"
        centered
      >
        <p>
          The synergy between Remix and Framer-Motion stems from their shared ability to utilize identical components and logic on both the server and client side
        </p>
      </PageIntro>

      <AnimationSVG />
      <AnimateGrid />
      <UseAnimateStagger />
      <MotionTBA />
    </>
  );
}
