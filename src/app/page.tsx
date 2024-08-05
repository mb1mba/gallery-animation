"use client";

import { useEffect, useState } from "react";
import { Grid, Column, Header } from "@/components";
import { AnimatePresence } from "framer-motion";
import { ReactLenis } from '@studio-freight/react-lenis'

export default function Home() {
  const [currentLayout, setCurrentLayout] = useState(1);

  return (
  <ReactLenis root options={{ lerp: 0.03, duration: 2 }}>
    <Header setCurrentLayout={setCurrentLayout} />
    <main className="overflow-hidden pt-14 px-5">
      <AnimatePresence mode="wait">
      {currentLayout === 1 ? (
      <Grid images={IMAGES} />
      ) : (
        <Column images={IMAGES} />
      )}
      </AnimatePresence>
    </main>
  </ReactLenis>
  );
}

const IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1722494285961-9bc4bb89ad93?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    row: 1,
    col: 1
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1722494285961-9bc4bb89ad93?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    row: 1,
    col: 3,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1722494285961-9bc4bb89ad93?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    row: 1,
    col: 8,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1722494285961-9bc4bb89ad93?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    row: 1,
    col: 11,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1722494285961-9bc4bb89ad93?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    row: 2,
    col: 1
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1722494285961-9bc4bb89ad93?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    row: 2,
    col: 5,
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1722494285961-9bc4bb89ad93?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    row: 2,
    col: 13,
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1722494285961-9bc4bb89ad93?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    row: 2,
    col: 15,
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1722494285961-9bc4bb89ad93?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    row: 3,
    col: 8,
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1722494285961-9bc4bb89ad93?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    row: 3,
    col: 11,
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1722494285961-9bc4bb89ad93?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    row: 4,
    col: 1,
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1722494285961-9bc4bb89ad93?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    row: 4,
    col: 11,
  },
  {
    id: 13,
    url: "https://images.unsplash.com/photo-1722494285961-9bc4bb89ad93?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    row: 4,
    col: 13,
  },
  {
    id: 14,
    url: "https://images.unsplash.com/photo-1722494285961-9bc4bb89ad93?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    row: 4,
    col: 16,
  }
];
