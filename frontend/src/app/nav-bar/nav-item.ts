
export class NavItem {

    private name: string;
    private link: string;
    private active: boolean = true;

    public constructor(name: string, link: string) {
        this.name = name;
        this.link = link;
    }

    public getName(): string {
        return this.name;
    }

    public getLink(): string {
        return this.link;
    }

    public isActive(): boolean {
        return this.active;
    };

    public setActive(active: boolean): void {
        this.active = active;
    };
}
