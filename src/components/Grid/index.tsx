import { motion } from "framer-motion";
import Image from "next/image";

interface ImageProps {
  id: number;
  url: string;
  row?: number;
  col: number;
  title: string;
}

interface GridProps {
  images: ImageProps[];
  currentLayout: number;
}

const Grid: React.FC<GridProps> = ({ images, currentLayout }) => 
{
  return (
    <ul className="grid grid-cols-main gap-y-14 grid-rows-main">
      {images.map((img) => 
      (
        <motion.li
            // initial={{translateY: "600%"}}
            // animate={{translateY: 0}}
            transition={{ delay: img.id * .05, type: "spring", duration: 1, bounce: 0 }}
            key={img.id}
            style={{ gridColumnStart: img.col, gridRowStart: img.row }}
        >
          <motion.div
            transition={{ delay: img.id * .05, type: "spring", duration: 1, bounce: 0 }}
            layoutId={img.title}
          >
            <Image
              src={img.url}
              height={150}
              width={175}
              key={img.title}
              alt={img.title}
              style={{maxHeight: "260px"}}
            />
          </motion.div>

        </motion.li>
      ))}
    </ul>
  );
};

export default Grid;