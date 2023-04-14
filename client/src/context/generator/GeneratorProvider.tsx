import { FC } from 'react'
import { GeneratorContext } from './GeneratorContext'
import { useGenerator } from '../../hooks/useGenerator'

type providerProps = {
    children: JSX.Element | JSX.Element[]
}

export const GeneratorProvider: FC<providerProps> = ({children})=>{

    const {
        loading,
        models,
        handleChange,
        handleSurpriseMe,
        handleRandomNegativePrompt,
        handleSubmit,
        createPost,
        handleModel,
        removerModel,
        handleSize
      } = useGenerator();

    return (
        <GeneratorContext.Provider value={{
            loading,
            models,
            handleChange,
            handleSurpriseMe,
            handleRandomNegativePrompt,
            handleSubmit,
            createPost,
            handleModel,
            removerModel,
            handleSize
        }}>
            {children}
        </GeneratorContext.Provider>
    )
}