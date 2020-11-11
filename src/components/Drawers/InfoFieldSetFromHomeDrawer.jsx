import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {Typography} from "@material-ui/core";
import React from "react";

export const InfoFieldSetFromHomeDrawer = ({classesName, value}) => {
    return(
        <FormControl className={classesName} component="fieldset">
            <FormLabel component="legend">{value}</FormLabel>
            <Typography>Уточняется по телефону</Typography>
        </FormControl>
    )
}