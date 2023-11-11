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
    display:'flex'

  };

  return <ul style={tagStyle}>{tagName}</ul>;
};
