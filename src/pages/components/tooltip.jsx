import React from "react";
import { Tooltip } from "@nextui-org/tooltip";

const Tippy = ({ text, element }) => {
  return (
    <Tooltip
      content={text}
      delay={0}
      closeDelay={0}
      classNames={{
        base: "py-2 px-2 bg-background border-[1px] border-solid border-grey rounded text-grey",
      }}
      motionProps={{
        variants: {
          exit: {
            opacity: 0,
            transition: {
              duration: 0.1,
              ease: "easeIn",
            },
          },
          enter: {
            opacity: 1,
            transition: {
              duration: 0.15,
              ease: "easeOut",
            },
          },
        },
      }}
    >
      {element}
    </Tooltip>
  );
};

export default Tippy;
