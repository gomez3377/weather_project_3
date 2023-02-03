import React from "react";

const HighlightCard = ({ highlightType, highlightData, measurement  }) => {
  return (
    <div className="w-[328px] bg-darkBlue pt-[22px] text-nearWhite text-center">
     <h4>{highlightType}</h4>
     <h1 className='highlight-data font-bold text-[64px]'>{highlightData} <span>{measurement}</span> </h1>
    </div>
  );
};

export default HighlightCard;
