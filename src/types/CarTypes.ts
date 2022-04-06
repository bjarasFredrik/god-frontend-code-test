
export type BodyType = "suv" | "estate" | "sedan"

export interface CarData {
    id: string;
    modelName: string;
    bodyType: BodyType;
    modelType: string;
    imageUrl: string;
}