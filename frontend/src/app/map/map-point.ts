export class MapPoint {

    private hoverd: boolean = false;
    private active: boolean = false;
    private x: number;
    private y: number;
    private name: string;
    private description: string;

    public setHoverdState(isHoverd: boolean): void {
        this.hoverd = isHoverd;
    }

    public isHoverd(): boolean {
        return this.hoverd;
    }

    public setActiveState(isActtive: boolean): void {
        this.active = isActtive;
    }

    public isActive(): boolean {
        return this.active;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }
    
    public getX(): number {
        return this.x;
    }
    
    public getY(): number {
        return this.y;
    }
    
    public constructor(name: string, description: string, x: number, y: number) {
        this.name = name;
        this.description = description;
        this.x = x;
        this.y = y;
    }
}
