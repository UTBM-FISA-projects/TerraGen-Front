import {
    XYPosition,
    Node,
} from 'reactflow';

let id = 1;

class Resource {
    protected readonly data: Object;
    private readonly id: string;
    private readonly position: XYPosition;

    public constructor(label: string = 'Resource') {
        this.id = `${id++}`;
        this.position = { x: 0, y: 0 };
        this.data = { label };
    }

    public static create(label: string = 'Resource'): Resource {
        return new Resource(label);
    }

    public toNode(): Node {
        return {
            id: this.id,
            position: this.position,
            data: this.data,
        };
    }
}

export default Resource;
