import { useState, useRef, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

interface ImageProps {
  id: number;
  url: string;
  row?: number;
  col?: number;
}

interface ColumnProps {
  images: ImageProps[];
}

const Column: React.FC<ColumnProps> = ({ images }) => {
  const container = useRef<HTMLDivElement>(null);
  const sideContainer = useRef<HTMLDivElement>(null);
  const imagesContainer = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imagesContainer,
  });

  const imagesContainerY = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, 100]);

  const minimapScroll = useTransform(
    scrollYProgress, 
    [0, 1],
    [-16986,0] 
  );

  return (
    <section className="block" ref={container} style={{ position: 'relative' }}>
      <div id="scale">
        <motion.div 
        initial={{ transform:"translateY(100vh)"}}
        animate={{ transform:"translateY(0)"}}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="flex flex-col items-center gap-4 relative will-change-transform" ref={imagesContainer}>
          {images.map((img, i) => (
            <motion.div style={{ y: imagesContainerY}}>
              <img key={img.url + i} src={img.url} height={"auto"} width={800} alt={`Image ${img.id}`}   />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="sticky top-0 h-0 z-10 block">
        <div id="minimap-container" className="relative h-screen w-fit translate-y-1/2" style={{ left: "10vw"}}>
          <div id="scope" className='border border-solid rounded-md h-[112px] w-24 absolute top-1/2 -left-2 z-20' style={{ transform: 'translateY(-50%)' }}></div>
          <motion.div ref={sideContainer} id="minimap" className='flex flex-col w-fit gap-4 relative will-change-transform' style={{ transform: `translateY(-16986px)` }}>
            {images.map((img, i) => (
              <motion.img 
                layoutId={`${img.id}`} 
                transition={{ delay: img.id * .04, ease: "easeInOut", duration: 0.3 }}
                alt="" 
                key={img.url + i} 
                src={img.url} 
                height={100}
                width={100}
                className="w-20 h-24 object-cover" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Column;
