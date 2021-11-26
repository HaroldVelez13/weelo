import { ReactNode } from "react";

interface Props {
    isOpen: boolean | undefined
    handleClose: () => any
    children?:ReactNode
}

const Alert = ({ children,isOpen, handleClose }:Props):JSX.Element => {
    return (
        <>
            {isOpen
                ? <div className="alert alert-dismissible alert-info">
                    <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={handleClose}></button>
                    
                        {children}
                    
                </div>
                : null}

        </>
    )
}

export default Alert;