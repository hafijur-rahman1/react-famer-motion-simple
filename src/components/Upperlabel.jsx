import { useRef } from "react";
import Card from "./Card";

const Upperlabel = () => {
  const data = [
    {
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quis quod similique qui quam eaque, iusto eius natus explicabo quidem",
      fileSize: "9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quis quod similique qui quam eaque, iusto eius natus explicabo quidem",
      fileSize: "9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quis quod similique qui quam eaque, iusto eius natus explicabo quidem",
      fileSize: "9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "red" },
    },
  ];
  const ref = useRef();
  return (
    <div
      ref={ref}
      className="fixed z-[3] top-0 left-0 w-full h-screen flex gap-10 flex-wrap p-5"
    >
      {data.map((item, i) => (
        <Card data={item} key={i} reference={ref} />
      ))}
    </div>
  );
};

export default Upperlabel;
