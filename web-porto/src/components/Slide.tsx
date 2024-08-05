import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    id: string;
}

function Slide({ children, id }: Props) {
    return (
        <div className="container card" id={id}>
                {children}
        </div>
    );
}

export default Slide;