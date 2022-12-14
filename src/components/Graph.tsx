import React, {
    useCallback,
    useRef,
    useState,
} from 'react';
import {
    Background,
    Controls,
    ReactFlow,
    Connection,
    addEdge,
    useNodesState,
    useEdgesState,
    ReactFlowInstance,
    ReactFlowRefType,
} from 'reactflow';
import { useEuiTheme } from '@elastic/eui';

import 'reactflow/dist/style.css';

import { Resource } from '../utils';

const Graph = () => {
    const reactFlowWrapper = useRef<ReactFlowRefType>(null);
    const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);

    const [nodes, setNodes, handleNodesChange] = useNodesState([]);
    const [edges, setEdges, handleEdgesChange] = useEdgesState([]);

    const { colorMode } = useEuiTheme();

    const handleConnect = React.useCallback((params: Connection) => {
        setEdges((prev) => addEdge(params, prev));
    }, [setEdges]);

    const onDragOver = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback((event: React.DragEvent) => {
        event.preventDefault();

        if (reactFlowInstance === null || reactFlowWrapper.current === null) {
            return;
        }

        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData('application/reactflow');

        const position = reactFlowInstance.project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
        });
        const newNode = Resource.create(type, type)
            .setPosition(position)
            .toNode();

        setNodes((prev) => prev.concat(newNode));
    }, [reactFlowInstance, setNodes]);

    return (
        <div ref={reactFlowWrapper} style={{ width: '100%', height: '100%' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={handleNodesChange}
                onEdgesChange={handleEdgesChange}
                onConnect={handleConnect}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onInit={setReactFlowInstance}
            >
                <Background style={{ backgroundColor: colorMode === 'LIGHT' ? 'white' : 'black' }} />
                <Controls />
            </ReactFlow>
        </div>
    );
};

export default Graph;
