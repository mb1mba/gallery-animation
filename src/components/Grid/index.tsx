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
    <ul className="grid grid-cols-main gap-y-14 grid-rows-main gap">
      {images.map((img) => 
      (
        <li
          key={img.id}
          style={{ gridColumnStart: img.col, gridRowStart: img.row }}
        >
          <motion.img
            transition={{ delay: img.id * .05, type: "spring", duration: 0.5, bounce: .1 }}
            height={150}
            width={175}
            layoutId={`${img.id}`}
            src={img.url}
          />
        </li>
      ))}
    </ul>
  );
};

export default Grid;
