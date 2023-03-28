import React from 'react';

export interface CarModel {
    modelName: string
    overLayNode: React.ReactNode;
    sectionRef: React.RefObject<HTMLElement>
}
interface ModelsContext {
    wrapperRef: React.RefObject<HTMLElement>
    registeredModel: CarModel[]
    registerModel: (model: CarModel) => void
    unregisterModel: (modelName: string) => void
    getModelByName: (modelName: string) => CarModel | null
}

export default React.createContext<ModelsContext>({} as ModelsContext)