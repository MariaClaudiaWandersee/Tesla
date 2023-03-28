import React, { useEffect, useRef} from 'react';
import useModel from '../useModel'
import { Container } from './styles';

interface Props extends React.HTMLAttributes <HTMLDivElement>{
    modelName: string;
    overLayNode: React.ReactNode;
}

const ModelSection: React.FC<Props> = ({
    modelName,
    overLayNode,
    children,
    ...props
}) => {

    const { registerModel } = useModel(modelName)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() =>{
        if(sectionRef.current) {
            registerModel({ modelName, overLayNode, sectionRef })
        }
    }, [modelName, overLayNode, registerModel])

    return (
        <Container {...props}>
            {children}
        </Container>
    );
};

export default ModelSection;