"use client";
import { useState, useRef, useLayoutEffect } from "react";
import { Header, Grid, Column, Stack } from "@/components";
import { AnimatePresence } from "framer-motion";
import { ReactLenis } from '@studio-freight/react-lenis';

export default function Home() {
  const [currentLayout, setCurrentLayout] = useState(1);
  const [columnHeight, setColumnHeight] = useState(0);
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (imagesContainerRef.current) {
      console.log(imagesContainerRef)
      setColumnHeight(imagesContainerRef.current.offsetHeight);
    }
  }, [currentLayout]);

  return (
    <ReactLenis root options={{ lerp: 0.03, duration: 2 }}>
      <Header setCurrentLayout={setCurrentLayout} />
      <main className="relative min-h-screen overflow-hidden pt-14 px-5">
        <AnimatePresence mode="wait">
          {currentLayout === 1 && <Grid images={IMAGES} currentLayout={currentLayout} />}
          {currentLayout === 2 && (
            <div ref={imagesContainerRef}>
              <Column images={IMAGES} currentLayout={currentLayout} ref={imagesContainerRef} columnHeight={columnHeight} />
            </div>
          )}
          {currentLayout === 3 && <Stack images={IMAGES} currentLayout={currentLayout} />}
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
    title: "Leaves",
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
