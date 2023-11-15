import React, { FC, ReactNode } from 'react';

interface TagProps {
  tagName: ReactNode;
}

export const Tag: FC<TagProps> = ({ tagName }) => {
  const tagStyle = {
    color: "var(--Primary, #6C5DD3)",
    fontFamily: "Open Sans",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    

  };

  return <ul className='w-80  flex  justify-between' style={tagStyle}>{tagName}</ul>;
};
