import { useRef, forwardRef, RefObject, useLayoutEffect, useState } from "react";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";

interface ImageProps {
  id: number;
  url: string;
  row?: number;
  col?: number;
  title: string;
}

interface ColumnProps {
  images: ImageProps[];
  currentLayout?: number;
  columnHeight: number;
}

const Column = forwardRef<HTMLDivElement, ColumnProps>(({ images, columnHeight, currentLayout }, ref) => {
  const container = useRef<HTMLDivElement>(null);
  const sideContainer = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const scrollTargetRef = ref as RefObject<HTMLDivElement>;

  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ["start end", "end start"],
    layoutEffect: false, 
  });

  const imagesContainerY = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, 100]
  );

  const minimapScroll = useTransform(
    scrollYProgress, 
    [0, 1],
    [-columnHeight, 0]
  );

  useLayoutEffect(() => {
    if (scrollTargetRef.current) {
      setHeight(scrollTargetRef.current?.clientHeight)
      console.log(scrollTargetRef.current?.clientHeight)
    }
  }, [currentLayout]);


  return (
    <section className="block" ref={container} style={{ position: 'relative' }}>
      <div id="scale">
        <ul className="flex flex-col items-center gap-4 relative will-change-transform">
          {images.map((img, i) => (
            <motion.li
              key={img.url + i}
              style={{ y: imagesContainerY }}
            >
              <motion.div
                initial={{ transform: "translateY(200%)" }}
                animate={{ transform: "translateY(0)" }}
                transition={{ delay: .5, duration: 1.5, ease: [.075, .82, .165, 1] }}
                className="will-change-transform"
              >
                <Image
                  priority
                  src={img.url} 
                  alt={`Image ${img.id}`}
                  height={700}
                  width={800}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
      
      <div className="sticky top-0 h-0 z-10 block">
        <div id="minimap-container" className="relative h-screen w-fit translate-y-1/2" style={{ left: "10vw" }}>
          <div id="scope" className='border border-solid rounded-md h-[112px] w-24 absolute top-1/2 -left-2 z-20' style={{ transform: 'translateY(-50%)' }}></div>
          <motion.div ref={sideContainer} id="minimap" className='flex flex-col w-fit gap-4 relative' style={{ transform: `translateY(-${columnHeight}px)` }}>
            {images.map((img, i) => (
              <motion.div 
                key={img.title + img.id}
                transition={{ delay: img.id * .04, type: "spring", duration: 1, bounce: 0 }}
                layoutId={img.title}
              >
                <Image
                  alt="" 
                  src={img.url} 
                  height={100}
                  width={100}
                  className="w-20 h-24 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Column;
