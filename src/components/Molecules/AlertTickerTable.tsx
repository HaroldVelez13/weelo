import useAlert from "../../hooks/useAlert"
import Alert from "../Atoms/Alert";

const AlertTickerTable = ():JSX.Element => {
    const { isOpen, handleClose } = useAlert();   

    return (
        <Alert isOpen={isOpen} handleClose={handleClose} >
            <div className="text-center fs-5" data-testid="alert_ticker_table">
                <p>
                    Test filtering the information in the option "Search Filter ..."
                    <br />
                    you can sort the table by columns with the icon <i className="fas fa-sort"></i>
                </p>
            </div>
        </Alert>
    )
}

export default AlertTickerTable;