import { SectionIntro } from "~/components/SectionIntro"
import { FadeIn } from "~/components/FadeIn"
import { Container } from "~/components/Container"
import { motion } from "framer-motion"
import { useState } from "react"
import clsx from "clsx"

export function AnimateGrid() {

    return (
        <div className="mt-24 sm:mt-32 lg:mt-40">
            <SectionIntro
                eyebrow="Animate Grid"
                title="Animate grid items on click"
            >
                <p>
                    Framer Motion's <strong>useAnimate</strong> hook offers manual control over animations by returning a <strong>scope</strong> ref and an <strong>animate</strong> function. 
                    The <strong>scope</strong> ref confines animations to a particular component, while the <strong>animate</strong> function initiates these animations
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <FadeIn>
                        <LayoutGrid cards={cards} />
                </FadeIn>
            </Container>
        </div>
    )
}

const LayoutGrid = ({ cards }: { cards: Card[] }) => {
    const [selected, setSelected] = useState<Card | null>(null);
    const [lastSelected, setLastSelected] = useState<Card | null>(null);

    const handleClick = (card: Card) => {
        setLastSelected(selected);
        setSelected(card);
    };
     
    const handleOutsideClick = () => {
        setLastSelected(selected);
        setSelected(null);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((card, index) => (
          <div key={index} className={clsx(card.className, "")}>
            <motion.div
                onClick={() => handleClick(card)}
                className={clsx(
                    card.className,
                    "relative h-96 rounded-3xl overflow-hidden cursor-pointer transition duration-300 hover:z-50 hover:scale-105",
                    selected?.id ? "pointer-events-none" : "pointer-events-auto",
                    lastSelected?.id ? "pointer-events-none" : "pointer-events-auto",

                )}
                layout
            >
                {selected?.id === card.id && <SelectedCard selected={selected} />}
                <BlurImage card={card} />
            </motion.div>
          </div>
        ))}
        <motion.div
            onClick={handleOutsideClick}
            className={clsx(
                "fixed inset-0 z-40 bg-neutral-950 bg-opacity-50",
                selected?.id ? "pointer-events-auto" : "pointer-events-none"
            )}
            animate={{ opacity: selected?.id ? 0.3 : 0 }}
        />
      </div>
    );
  };
   
  const BlurImage = ({ card }: { card: Card }) => {
    const [loaded, setLoaded] = useState(false);
    return (
      <img
        src={card.thumbnail}
        alt="thumbnail"
        className={clsx(
            "w-full h-full object-cover absolute inset-0 transition duration-200",
            loaded ? "blur-md" : "blur-none"
        )}
      />
    );
  };
   
  const SelectedCard = ({ selected }: { selected: Card | null }) => {
    return (
      <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-3xl shadow-2xl relative z-[60]">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.6,
          }}
          className="absolute inset-0 h-full w-full bg-neutral-950 opacity-60 z-10"
        />
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="relative px-8 pb-4 z-[70]"
        >
          {selected?.content}
        </motion.div>
      </div>
    );
  };



type Card = {
    id: number;
    content: JSX.Element | React.ReactNode | string;
    className: string;
    thumbnail: string;
};

const SkeletonOne = () => {
    return (
        <div>
            <p className="font-semibold text-4xl text-white">House in the woods</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            A serene and tranquil retreat, this house in the woods offers a peaceful
            escape from the hustle and bustle of city life.
            </p>
        </div>
    );
};
   
const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-semibold text-4xl text-white">House above the clouds</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Perched high above the world, this house offers breathtaking views and a
            unique living experience. It&apos;s a place where the sky meets home,
            and tranquility is a way of life.
            </p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className="font-semibold text-4xl text-white">Greens all over</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
            perfect place to relax, unwind, and enjoy life.
            </p>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div>
            <p className="font-semibold text-4xl text-white">Rivers are serene</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            A house by the river is a place of peace and tranquility. It&apos;s the
            perfect place to relax, unwind, and enjoy life.
            </p>
        </div>
    );
};
   
const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2",
        thumbnail: "https://res.cloudinary.com/jessebubble/image/upload/v1708123075/vision_txku5z.png",
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail: "https://res.cloudinary.com/jessebubble/image/upload/v1707761503/midjourney/eyes_psco51.png",
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail: "https://res.cloudinary.com/jessebubble/image/upload/v1707197890/midjourney/discover_wsdbtc.png",
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2",
        thumbnail: "https://res.cloudinary.com/jessebubble/image/upload/v1707761503/midjourney/fashion_g23p4k.png",
    },
];