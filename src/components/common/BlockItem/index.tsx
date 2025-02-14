import React from 'react';

interface BlockItemProps {
  title: string;
  content: string;
}

const BlockItem: React.FC<BlockItemProps> = ({ title, content }) => {
  return (
    <div className="block-item"> {/* Apply appropriate styling */}
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default BlockItem;