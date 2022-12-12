import React, { useCallback } from 'react';
import {
    Background,
    Controls,
    ReactFlow,
    Node,
    Edge,
    NodeChange,
    applyNodeChanges,
    EdgeChange,
    applyEdgeChanges,
    Connection,
    addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';

import { Resource } from '../utils';

const Graph = () => {
    const [nodes, setNodes] = React.useState<Array<Node>>([
        Resource.create('WAF').toNode(),
        Resource.create('API Gateway').toNode(),
    ]);
    const [edges, setEdges] = React.useState<Array<Edge>>([]);

    const handleNodesChange = useCallback((changes: Array<NodeChange>) => {
        setNodes(applyNodeChanges(changes, nodes));
    }, [nodes]);
    const handleEdgesChange = useCallback((changes: Array<EdgeChange>) => {
        setEdges(applyEdgeChanges(changes, edges));
    }, [edges]);

    const handleConnect = React.useCallback((params: Connection) => {
        setEdges((prev) => addEdge(params, prev));
    }, []);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={handleNodesChange}
            onEdgesChange={handleEdgesChange}
            onConnect={handleConnect}
        >
            <Background />
            <Controls />
        </ReactFlow>
    );
};

export default Graph;
