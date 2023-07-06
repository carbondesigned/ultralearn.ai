'use client';
import {useRoot} from '@/context/root';
import {memo, useState} from 'react';
import {Handle, NodeProps, Position, NodeChange} from 'reactflow';

const CustomNode = ({
  data,
  isConnectable,
  targetPosition = Position.Top,
  sourcePosition = Position.Bottom,
}: NodeProps) => {
  const {setSelectedNode, selectedNode} = useRoot();
  console.log(data);
  return (
    <div
      onClick={() => {
        if (!selectedNode) {
          setSelectedNode(data);
        } else {
          setSelectedNode(null);
        }
      }}
    >
      <Handle
        type='target'
        position={targetPosition}
        isConnectable={isConnectable}
      />

      {data?.label}

      <Handle
        type='source'
        position={sourcePosition}
        isConnectable={isConnectable}
      />
    </div>
  );
};

CustomNode.displayName = 'CustomNode';

export default memo(CustomNode);
