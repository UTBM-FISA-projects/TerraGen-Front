import {
    XYPosition,
    Node,
} from 'reactflow';

let id = 1;

class Resource {
    protected readonly data: Object;
    private readonly id: string;
    private position: XYPosition;
    private readonly type: string;

    public constructor(label: string, type: string) {
        this.id = `${id++}`;
        this.position = { x: 0, y: 0 };
        this.data = { label };
        this.type = type;
    }

    public static create(label: string, type: string): Resource {
        return new Resource(label, type);
    }

    public setPosition(pos: XYPosition): this {
        this.position = pos;
        return this;
    }

    public toNode(): Node {
        return {
            id: this.id,
            position: this.position,
            type: this.type,
            data: this.data,
        };
    }
}

export default Resource;
