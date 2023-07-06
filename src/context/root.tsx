import React, {useEffect, useState} from 'react';

type Node = {
  label: string;
  id: string;
};

interface RootContext {
  selectedNode: null | Node;
  setSelectedNode: (node: any) => void;
}

const RootContext = React.createContext<RootContext>({} as any);

// This hook can be used to access the user info.
export function useRoot() {
  return React.useContext(RootContext);
}

export function RootProvider(props: {children: React.ReactNode}) {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <RootContext.Provider
      value={{
        selectedNode,
        setSelectedNode,
      }}
    >
      {props.children}
    </RootContext.Provider>
  );
}
