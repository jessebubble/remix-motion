# Remix + Framer Motion 
<p>
    Framer Motion is a simple yet powerful motion library for React
</p>
<P>
    It powers the amazing animations and interactions in Framer, the web builder for creative pros. Zero code, maximum speed
</p>

## Table of Contents
- [The `<motion />` Component](#the-motion--component)
- [Animations](#animations)
- [Gestures](#gestures)
- [Variants](#variants)
- [Scroll-triggered animations](#scroll-triggered-animations)
- [Server-side rendering](#server-side-rendering)
- [MotionValues](#motionvalues)
- [Layout Animations](#layout-animations)
- [Manual animations](#manual-animations)
- [Development](#development)
- [Deployment](#deployment)

<img alt="devSA terminal logo for Framer" src="https://res.cloudinary.com/jessebubble/image/upload/v1708973763/framer_viod8y.png" />

## The `<motion />` Component
Framer Motion's `<motion />` component is a special kind of component that has been enhanced with animation capabilities. You can **Think of it as a regular HTML or SVG element that has been "supercharged" with additional props and features for animation.**

> The `<motion />` component is the core of Framer Motion. It provides a simple and intuitive API for animating components, making it easy to add complex animations to your React applications

The `<motion />` component can be used as a drop-in replacement for any HTML or SVG element. For example, instead of using a `<div />` element, you can use a `<motion.div />` element. The `<motion.div />` element behaves just like a regular `<div />` element, but it also has additional props that you can use to animate it.

### Animations 
In Framer Motion, the `animate` prop is used to animate a component. You simply set the `animate` prop to the target values of the properties you want to animate.

In the provided example, a `<motion.div />` component is animated to move horizontally (along the x-axis) to a position of 100 pixels:

```jsx
<motion.div animate={{ x: 100 }} />
```

When the values provided to the `animate` prop change, Framer Motion automatically generates an animation to transition the component to these new values. For example, if you were to update the `animate` prop to `{ x: 200 }`, Framer Motion would automatically animate the component from its current position to 200 pixels along the x-axis.

By default, these animations are designed to feel natural and smooth. However, you can customize them using the `transition` prop. **The `transition` prop allows you to specify the duration, delay, type of easing, and other characteristics of the animation.**

Here's an example of how you might use the `transition` prop to customize the animation:

```jsx
<motion.div
  animate={{ x: 100 }}
  transition={{ duration: 2, ease: "easeInOut" }}
/>
```

In this example, the animation will last for 2 seconds and use an "ease in, ease out" easing function, which means the animation will start slowly, speed up in the middle, and then slow down again towards the end.

### Gestures
Framer Motion's `<motion />` component extends the standard React event system with additional gesture recognizers. This makes it easy to add interactive animations to your components.

```jsx
import { motion } from 'framer-motion'

function GestureDemo() {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
        />
    )
}
```
Here's what each prop does:

- `whileHover={{ scale: 1.2 }}`: This prop specifies that the scale of the component should animate to 1.2 when the mouse is hovering over it. When the mouse is no longer hovering over the component, it will animate back to its original scale.

- `whileTap={{ scale: 1.1 }}`: This prop specifies that the scale of the component should animate to 1.1 when it is being tapped or clicked. When the tap or click ends, it will animate back to its original scale.

 - `drag="x"`: This prop enables drag interactions on the component. The `"x"` value means that the component can only be dragged along the x-axis (horizontally).

- `dragConstraints={{ left: -100, right: 100 }}`: This prop sets constraints on the drag interaction. In this case, the component can be dragged 100 pixels to the left and 100 pixels to the right of its original position.

These props make it easy to add interactive animations to your components with just a few lines of code. You can use them to create a wide variety of effects, such as buttons that grow when hovered over, elements that can be dragged around the screen, and more.


### Variants
In Framer Motion, `variants` are a way to predefine animation states and transitions. They can be used to animate one or more components with a single `animate` prop. This makes it easier to manage complex animations and transitions. <br />

In the provided example, two variants are defined: `list` and `item`. <br />

The `list` variant has a `hidden` state that sets its opacity to 0. The `item` variant also has a `hidden` state, but it sets its x position to -10 and its opacity to 0. <br />

These variants are then used in a `motion.ul` and three `motion.li` components:

```jsx
import { motion } from 'framer-motion'

function VariantsDemo() {
    const list = { hidden: { opacity: 0 } }
    const item = { hidden: { x: -10, opacity: 0 } }

    return (
        <motion.ul animate="hidden" variants={list}>
            <motion.li variants={item} />
            <motion.li variants={item} />
            <motion.li variants={item} />
        </motion.ul>
    )
}
```

The `motion.ul` component is given the `list` variant and is set to animate to the `hidden` state. This means that it will animate its opacity to 0.

The `motion.li` components are each given the `item` variant. However, they don't have an `animate` prop, so they won't animate on their own. Instead, they inherit the `animate` prop from their parent `motion.ul` component. This means that they will also animate to the `hidden` state, moving their x position to -10 and their opacity to 0.

This is a powerful feature of Framer Motion, as it allows you to orchestrate complex animations across multiple components with a single `animate` prop.

### Scroll-triggered animations
Elements can animate as they `enter and leave the viewport` with the handy `whileInView` prop.

```jsx
import { motion } from 'framer-motion'

function ScrollTriggerDemo() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        />
    )
}
```

In this example, a `motion.div` is used, which is a special div provided by Framer Motion that can be animated.

The `initial={{ opacity: 0 }}` prop sets the initial opacity of the div to 0, making it invisible.

The `whileInView={{ opacity: 1 }}` prop sets the opacity of the div to 1 (fully visible) while it's in the viewport. This means that the div will fade in as it enters the viewport and fade out as it leaves the viewport.

### Server-side rendering
Framer Motion's initial prop is used to define the initial state of an animation. If you set `initial={{ x: 0 }}` and `animate={{ x: 100 }}`, the element will start at x: 0 and animate to x: 100 when the component mounts.

However, when you're server-side rendering (SSR) a React application, the JavaScript isn't executed until the page is loaded in the client's browser. This means that Framer Motion animations won't start until the JavaScript loads, which can cause a flash of unstyled content (FOUC) where the element is shown in its initial state before the animation starts.

To prevent this, you can set `initial={false}`. This tells Framer Motion to skip the initial state and start the element in its animated state. That way, the element is rendered in its final state on the server, and there's no FOUC when the JavaScript loads.

```jsx
import { motion } from 'framer-motion'

function SSRDemo() {
    return (
        <motion.div
            initial={false}
            animate={{ x: 100 }}
        />
    )
}
```

In this example, the motion.div will start at x: 100 even when the page is server-side rendered. There's no initial animation, but this prevents a flash of unstyled content.

### MotionValues
In Framer Motion, `MotionValues` are used to track the state and velocity of animating values. They exist outside of React's render lifecycle, which means they can be updated and read without causing a re-render of the component.

`MotionValues` are created automatically for every property you animate with a `motion` component. However, you can also create them manually using the `useMotionValue` hook. This is useful when you want to create complex animations or effects that depend on the state of other animations.

In the provided example, a MotionValue is created for the x position of a component:

```jsx
const x = useMotionValue(0)
```

This `MotionValue` is initialized with a value of 0. It will be updated whenever the x position of the component changes.

The `useTransform` hook is then used to create a new `MotionValue` for the opacity of the component:

```jsx
const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
```

This `MotionValue` is based on the `x MotionValue`. It maps the range of `-100` to `100` in the `x MotionValue` to the range of `0` to `1` in the `opacity MotionValue`. This means that when the x position of the component is `-100`, the opacity will be `0`. When the x position is `0`, the opacity will be `1`. And when the x position is `100`, the opacity will be `0` again.

These `MotionValues` are then used to animate a `<motion.div />` component:

```jsx
return <motion.div drag="x" style={{ x, opacity }} />
```

The `drag="x"` prop allows the component to be dragged along the x-axis. The `style={{ x, opacity }}` prop sets the x position and opacity of the component to the `x` and `opacity MotionValues`. This means that as the component is dragged, its x position and opacity will be updated automatically.

### Layout Animations
Framer Motion provides a feature called layout animations. This feature allows you to animate changes in the layout of your components using highly performant CSS transforms.

To enable layout animations for a component, you simply add the `layout` prop to a `motion` component:

```jsx
<motion.div layout />
```

When the `layout` prop is present, Framer Motion will automatically detect changes in the component's layout and animate them. For example, if the component's width, height, or position changes due to a re-render, Framer Motion will smoothly animate the component from its old layout to its new layout.

**This is done using CSS transforms, which are highly performant and can be hardware accelerated. This means that even complex layout animations can run smoothly and efficiently.**

>It's important to note that layout animations work best when the changes in layout are caused by changes in the component's props or state. If the layout changes due to changes in the DOM outside of the component, Framer Motion may not be able to detect and animate these changes.

### Manual animations
The `useAnimate` hook from Framer Motion provides a way to manually control animations. It returns a `scope` ref and an `animate` function. The `scope` ref is used to scope the animations to a specific component, and the `animate` function is used to start animations.

Here's an example of how you might use `useAnimate` to manually trigger an animation in an event handler:

```jsx
import { useAnimate } from 'framer-motion'

function UseAnimateDemo() {
  const [scope, animate] = useAnimate()

  const handleClick = () => {
    animate("yourClassName", { opacity: 0 })
  }

  return <div ref={scope} onClick={handleClick}>Click me</div>
}
```
In this example, the `useAnimate` hook is used to create a `scope` ref and an `animate` function. The `scope` ref is attached to a `<div />` element, and the `animate` function is used to animate all elements with the `yourClassName` selector when the `<div />` is clicked.

The `animate` function takes two arguments: a DOM selector and an animation target. The DOM selector is used to select the elements to animate, and the animation target is used to specify the end state of the animation.

`useAnimate` can also be used to orchestrate more complex animations. For example, you could use it to sequence multiple animations, control the playback of animations, or animate `MotionValues` directly. This makes it a powerful tool for creating complex, interactive animations.


## Development
- [Remix Docs](https://remix.run/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs/installation)
- [Framer Motion Docs](https://www.framer.com/motion/)

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
