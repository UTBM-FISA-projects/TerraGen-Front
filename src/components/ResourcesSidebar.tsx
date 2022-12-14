import React from 'react';
import { EuiPanel } from '@elastic/eui';

const RESOURCES = [
    'WAF',
    'API Gateway',
];

const ResourcesSidebar = () => {
    const onDragStart = (event: React.DragEvent, type: string) => {
        event.dataTransfer.setData('application/reactflow', type);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <EuiPanel grow paddingSize="s">
            {RESOURCES.map((res) => (
                <EuiPanel
                    key={res}
                    style={{ margin: '1em', cursor: 'grab' }}
                    paddingSize="s"
                    onDragStart={(e: React.DragEvent) => {onDragStart(e, res);}}
                    draggable
                >
                    {res}
                </EuiPanel>
            ))}
        </EuiPanel>
    );
};

export default ResourcesSidebar;
