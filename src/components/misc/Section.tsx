import { ReactNode } from "react";
import Dash from "./Dash";

interface Props {
    dash?: boolean;
    children: ReactNode[] | ReactNode
}

export default ({ dash, children }: Props) => {
    return (
        <>
            {children}
            {dash ? <Dash/> : <></>}
        </>
 )
}