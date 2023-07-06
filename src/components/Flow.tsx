'use client';
import {useCallback, useEffect, useState} from 'react';
import ReactFlow, {
  Node,
  addEdge,
  Background,
  Edge,
  Connection,
  useNodesState,
  useEdgesState,
} from 'reactflow';

import CustomNode from './CustomNode';

import 'reactflow/dist/style.css';
import {useRoot} from '@/context/root';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    className: 'bg-dark-400 p-6 rounded-xl',
    data: {label: 'Custom Node', id: '1'},
    position: {x: 400, y: 200},
  },
  {
    id: '2',
    type: 'custom',
    className: 'bg-dark-400 p-6 rounded-xl',
    data: {label: 'Custom Node', id: '2'},
    position: {x: 400, y: 200},
  },
];

const nodeTypes = {
  custom: CustomNode,
};

const BasicFlow = ({
  nodeName,
  setNodeName,
}: {
  nodeName: string;
  setNodeName: (name: string) => void;
}) => {
  const {selectedNode} = useRoot();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        console.log(node);
        if (node.id === selectedNode?.id) {
          // it's important that you create a new object here
          // in order to notify react flow about the change
          node.data = {
            ...node.data,
            label: nodeName,
          };
        }

        return node;
      })
    );
  }, [nodeName, setNodes, selectedNode]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
    >
      <Background />
    </ReactFlow>
  );
};

export default BasicFlow;
