'use client';
import BasicFlow from '@/components/Flow';
import {useRoot} from '@/context/root';
import {MouseEvent, MouseEventHandler, useEffect, useState} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

export default function Home() {
  const {selectedNode} = useRoot();
  const [nodeName, setNodeName] = useState('Node 1');
  console.log(selectedNode);
  return (
    <main className='w-screen h-screen bg-dark-500 relative'>
      {selectedNode && (
        <div className='absolute right-0 top-0 h-screen w-2/4 bg-dark-400 z-50 p-12'>
          <input
            type='text'
            value={nodeName}
            onChange={(e) => setNodeName(e.target.value)}
            className='bg-transparent outline-none border-none text-white w-full text-2xl font-bold'
          />
        </div>
      )}
      <BasicFlow nodeName={nodeName} setNodeName={setNodeName} />
    </main>
  );
}
