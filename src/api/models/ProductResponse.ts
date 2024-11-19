export type ProductResponse = {
    id: number,
    title: string;
    price: number,
    description: string,
    category: CategoryResponse
    images: string[],
    creationAt: string,
    updatedAt: string
}
type CategoryResponse = {
    id: number;
    name: string;
    image: string
    creationAt: string,
    updatedAt: string
}
