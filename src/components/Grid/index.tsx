import { motion } from "framer-motion";

interface ImageProps {
  id: number;
  url: string;
  row?: number;
  col: number;
}

interface GridProps {
  images: ImageProps[];
}

const Grid: React.FC<GridProps> = ({ images }) => 
{
  return (
    <ul className="grid grid-cols-main gap-y-14 grid-rows-main">
      {images.map((img) => 
      (
        <motion.li
            initial={{translateY: "500%"}}
            animate={{translateY: 0}}
            transition={{ delay: img.id * .05, type: "spring", duration: 0.7, bounce: .15 }}
            key={img.id}
            style={{ gridColumnStart: img.col, gridRowStart: img.row }}
        >
          <motion.img
            transition={{ delay: img.id * .05, type: "spring", duration: 0.7, bounce: .15 }}
            height={150}
            width={175}
            layoutId={`${img.id}`}
            src={img.url}
          />
        </motion.li>
      ))}
    </ul>
  );
};

export default Grid;
