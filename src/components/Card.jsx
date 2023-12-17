/* eslint-disable react/prop-types */
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={1.5}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-60 h-60 bg-zinc-800/95 rounded-xl text-white px-5 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-xs leading-none mt-5">{data.description}</p>

      <div className="footer absolute w-full  bottom-0 left-0">
        <div className="flex justify-between p-4 items-center">
          <h4>{data.fileSize}</h4>
          <span className="h-7 w-7 bg-zinc-600 rounded-full flex justify-center items-center">
            {data.close ? (
              <MdOutlineClose />
            ) : (
              <MdOutlineFileDownload color="white" />
            )}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`bg-${data.tag.tagColor}-400 w-full flex justify-center items-center py-2`}
          >
            <h4 className="text-sm ">{data.tag.tagTitle}</h4>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
