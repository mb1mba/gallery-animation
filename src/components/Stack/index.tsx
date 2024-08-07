import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface ImageProps {
  id: number;
  title: string;
  url: string;
  row?: number;
  col: number;
}

interface StackProps {
  images: ImageProps[];
  currentLayout: number;
  prevLayout: number;
}

const Column: React.FC<StackProps> = ({ images, currentLayout}) => 
{
  const [activeImage, setActiveImage] = useState<number>(0);

  return(
    <>
      <ul className="max-w-[50%] z-[999]">
        <AnimatePresence>
          {images.map((img) => 
          (
            <div className="overflow-hidden" key={img.id}>
              <motion.li
                initial={{ translateY: "100%" }}
                animate={{ translateY: currentLayout !== 3 ? "100%" : "0%" }}
                transition={{ delay: img.id * .05, type: "spring", duration: 1, bounce: 0 }}
                className="text-[50px] w-full translate-y-full"
                key={`${img.title}-${img.id}`}
                >
                <span
                  className="will-change-transform cursor-pointer "
                  onMouseEnter={() => setActiveImage(img.id)}
                >
                  {img.title}
                </span>
                </motion.li>
            </div>
          ))}
        </AnimatePresence>
      </ul>

      <ul className="absolute top-0 right-0 h-full grid gap-y-14 justify-end pt-14 px-5">
      {images.map((img) => 
      (
        <li
            key={img.id}
            style={{ gridColumnStart: 1, gridRowStart: 1, zIndex: activeImage === img.id ? 999 : 0}}
        >
          <motion.div 
            layoutId={img.title}
            transition={{ delay: img.id * .05, type: "spring", duration: 1, bounce: 0 }}
            key={`${img.id}-${img.title}`}
            className="overflow-hidden max-h-[450px]"
            >
            <Image 
              src={img.url}
              height={250}
              width={300}
              alt={img.title}
            />
          </motion.div>
        </li>
      ))
      }
    </ul>
    </>
  )
}

Column.displayName = "Column";

export default Column;