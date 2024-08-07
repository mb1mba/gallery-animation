import Image from "next/image";
import { motion } from "framer-motion";

type ImageProps = {
  id: number;
  url: string;
  row?: number;
  col?: number;
  title: string;
}

type ColumnProps =  {
  images: ImageProps[];
  prevLayout: number;
}

const Column: React.FC<ColumnProps> = ({ images, prevLayout }) => 
{
  return (
    <>
      <ul className="max-w-[50%] z-[999]">
            {images.map((img) => 
            (
              <div className="overflow-hidden xl:min-h-6 2xl:min-h-20" key={img.id}>
                <motion.li
                  key={img.title}
                  initial={{translateY: prevLayout !== 3 ? "300%" : 0}}
                  animate={{translateY: "300%"}}
                  transition={{ delay: img.id * .05, type: "spring", duration: 1, bounce: 0 }}
                  className="text-3xl xl:text-[50px] w-full translate-y-full"
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
        
      <section className="block absolute top-0">
        <div id="minimap-container" className="relative h-screen flex  items-center">
          <motion.ul id="minimap" className='flex justify-center w-full gap-4 relative pr-5'>
            {images.map((img, i) => (
              <motion.li 
                key={`${img.id}-${img.title}`}
                transition={{ delay: img.id * .04, type: "spring", duration: 1, bounce: 0 }}
                layoutId={img.title}
              >
                <Image
                  alt={img.title}
                  src={img.url} 
                  height={200}
                  width={200}
                  className="w-48 h-[200px] object-cover"
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </>
  );
};


Column.displayName = "Column";

export default Column;
