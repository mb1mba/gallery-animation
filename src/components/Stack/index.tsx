import { motion } from "framer-motion";
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
}

const Column: React.FC<StackProps> = ({ images, currentLayout}) => 
{
  return(
    <>
      {/* <ul className="max-w-[50%]">
        {images.map((img) => 
        (
          <li 
            className="text-[50px] cursor-pointer w-full overflow-hidden"
          >
            <motion.span
              initial={{ transform:"translateY(100%)"}}
              className="will-change-transform"
            >
              {img.title}
            </motion.span>
          </li>
        ))}
      </ul> */}

      <ul className="absolute top-0 right-0 h-full grid gap-y-14 justify-end pt-14 px-5">
      {images.map((img) => 
      (
        <li
            key={img.id}
            style={{ gridColumnStart: 1, gridRowStart: 1 }}
        >
          <motion.div 
            layoutId={img.title}
            transition={{ delay: img.id * .05, type: "spring", duration: 1, bounce: 0 }}
            key={img.title}
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

export default Column;