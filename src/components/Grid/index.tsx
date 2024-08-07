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
  prevLayout: number;
}

const Grid: React.FC<GridProps> = ({ images, prevLayout }) => 
{
  return (
  <>
    <ul className="max-w-[50%] z-[999]">
      {images.map((img) => 
      (
        <div className="overflow-hidden" key={img.id}>
          <motion.li
            key={img.title}
            initial={{translateY: prevLayout !== 3 ? "100%" : 0}}
            animate={{translateY: "100%"}}
            transition={{ delay: img.id * .05, type: "spring", duration: 1, bounce: 0 }}
            className="text-[50px] w-full "
            layoutId={`${img.id}_${img.title}`}
          >
            <span
              className="will-change-transform cursor-pointer"
            >
              {img.title}
            </span>
            </motion.li>
        </div>
      ))}
    </ul>

    <ul className="grid grid-cols-main gap-y-14 grid-rows-main absolute top-14">
      {images.map((img) => 
      (
        <motion.li
            initial={{translateY: "600%"}}
            animate={{translateY: 0}}
            transition={{ delay: img.id * .05, type: "spring", duration: 1, bounce: 0 }}
            style={{ gridColumnStart: img.col, gridRowStart: img.row }}
            key={`${img.id}-${img.title}`}
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
  </>
  );
};

Grid.displayName = "Grid";


export default Grid;