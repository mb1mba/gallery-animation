"use client";
import { useState } from "react";
import { Header, Grid, Column, Stack } from "@/components";
import { AnimatePresence } from "framer-motion";
import { ReactLenis } from '@studio-freight/react-lenis';

export default function Home() {
  const [currentLayout, setCurrentLayout] = useState(1);
  const [prevLayout, setPrevLayout] = useState(1);

  return (
    <ReactLenis root options={{ lerp: 0.03, duration: 2 }}>
      <Header setCurrentLayout={setCurrentLayout} setPrevLayout={setPrevLayout} currentLayout={currentLayout}/>
      <main className="relative min-h-screen h-screen overflow-hidden pt-14 px-5 ">
        <AnimatePresence mode="wait">
          <section className="hidden lg:block lg:h-full h-full overflow-hidden">
            { currentLayout === 1 && <Grid images={IMAGES}  prevLayout={prevLayout} /> }
            { currentLayout === 2 && <Column images={IMAGES} prevLayout={prevLayout} /> }
            { currentLayout === 3 && <Stack images={IMAGES} currentLayout={currentLayout} prevLayout= {prevLayout}/>}
          </section>

          <section className="block lg:hidden">
            <h1>You need to go on greater screen</h1>
          </section>
        </AnimatePresence>
      </main>
    </ReactLenis>
  );
}

const IMAGES = [
  {
    id: 1,
    title: "Leaves",
    url: "/image1.avif",
    row: 1,
    col: 1
  },
  {
    id: 2,
    title: "Boat",
    url: "/image2.avif",
    row: 1,
    col: 3,
  },
  {
    id: 3,
    title: "Gameboy Connect",
    url: "/image3.avif",
    row: 1,
    col: 8,
  },
  {
    id: 4,
    title: "Orpheum",
    url: "/image4.avif",
    row: 1,
    col: 11,
  },
  {
    id: 5,
    title: "Plane",
    url: "/image5.avif",
    row: 2,
    col: 1
  },
  {
    id: 6,
    title: "Blue",
    url: "/image6.avif",
    row: 2,
    col: 5,
  },
  {
    id: 7,
    title: "Star",
    url: "/image7.avif",
    row: 2,
    col: 13,
  },
  {
    id: 8,
    title: "Shibuya",
    url: "/image8.avif",
    row: 2,
    col: 15,
  },
  {
    id: 9,
    title: "Hiking trip",
    url: "/image9.avif",
    row: 3,
    col: 8,
  },
  {
    id: 10,
    title: "Leaves II",
    url: "/image10.avif",
    row: 3,
    col: 11,
  },
  {
    id: 11,
    title: "Sunset",
    url: "/image11.avif",
    row: 4,
    col: 1,
  },
  {
    id: 12,
    title: "Parking",
    url: "/image12.avif",
    row: 4,
    col: 11,
  },
  {
    id: 13,
    title: "Carrera",
    url: "/image13.avif",
    row: 4,
    col: 13,
  },
  {
    id: 14,
    title: "New York",
    url: "/image14.avif",
    row: 4,
    col: 16,
  }
];
