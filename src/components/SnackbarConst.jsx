import React from "react";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
const SnackbarConst = (props) => {
/*    return(
        <Snackbar open={props.open} autoHideDuration={props.autoHideDuration} onClose={props.onClose}>
            <Alert onClose={props.onClose} severity={props.state.severity}>
                {props.state.text}
            </Alert>
        </Snackbar>
    )*/

    return(
        props.stateSnackbar != null ?
            (<Snackbar open={Boolean(props.stateSnackbar)} autoHideDuration={6000} onClose={props.onClose}>
            <Alert onClose={props.onClose} severity={props.stateSnackbar.severity}>
                {props.stateSnackbar.text}
            </Alert>
        </Snackbar>) : null
    )
}

export default SnackbarConst;