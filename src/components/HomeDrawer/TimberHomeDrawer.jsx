import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import ds145 from "../../assets/images/lamess/ds145.png";
import ds195 from "../../assets/images/lamess/ds195.png";
import FormControl from "@material-ui/core/FormControl";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyle = makeStyles({
    radioWithPhoto: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: 16,
    },
    radioImg: {
        width: 160,
        height: 160,
    },
});

export const TimberHomeDrawer = (stateSize, change) =>{

    const sizeL = useMediaQuery('(min-width:800px)');
    const sizeM = useMediaQuery('(min-width:600px)');

    const classes = useStyle({ sizeL, sizeM });
    return(
        <div className={classes.params}>
        <FormControl component="fieldset">
            <FormLabel component="legend">Брус</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={stateSize}>
                <FormControlLabel
                    value=""
                    control={
                        <div className={classes.radioWithPhoto}>
                            <Radio
                                value=""
                                checked={stateSize === ''}
                                onChange={change}
                            />{' '}
                            <img className={classes.radioImg} src={ds145} />
                        </div>
                    }
                    label="145x145"
                />
                <FormControlLabel
                    value="LSize"
                    control={
                        <div className={classes.radioWithPhoto}>
                            <Radio
                                value="LSize"
                                checked={stateSize === 'LSize'}
                                onChange={change}
                            />
                            <img className={classes.radioImg} src={ds195} />
                        </div>
                    }
                    label="145x195"
                />
            </RadioGroup>
        </FormControl>
        </div>
    )
}