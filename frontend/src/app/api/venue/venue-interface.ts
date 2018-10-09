export interface VenueInterface {
    id: string,
    name: string,
    description?: string,
    address: string[],
    latitude: number,
    longitude: number,
    categories: {
        name: string;
        pluralName: string;
        icon: string;
    }[],
    images: {
        shotAt: string;
        photographer: string;
        photographerImage: string;
        horizontalRectangleURL: string;
        squareURL: string;
    },
    url?: string,
    openingHours?: string,
    popularHours?: string,
    price?: string,
    rating?: string,
    ratingColor?: string,
    peopleNow: string,
    likes: number;
}
