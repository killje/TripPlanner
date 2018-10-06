
export class NavItem {

    private name: string;
    private link: string;
    private active: boolean = true;
    private matchStrict: boolean;

    public constructor(name: string, link: string, matchStrict: boolean = false) {
        this.name = name;
        this.link = link;
        this.matchStrict = matchStrict;
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
    
    public isMatchStrict(): boolean {
        return this.matchStrict;
    }
}
