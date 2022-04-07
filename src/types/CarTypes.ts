
export type BodyType = "suv" | "estate" | "sedan"

export type CarData = {
    id: string;
    modelName: string;
    bodyType: BodyType;
    modelType: string;
    imageUrl: string;
}