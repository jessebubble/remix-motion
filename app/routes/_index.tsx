import type { MetaFunction } from "@remix-run/node";
import { PageIntro } from "~/components/PageIntro";


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
        eyebrow="Framer-Motion"
        title="Remix-Motion"
        centered
      >
        <p>
          This is a Remix app with Framer Motion animations. Check out the
          <a href="https://remix.run">Remix documentation</a> to learn more.
        </p>
      </PageIntro>

    </>
  );
}
