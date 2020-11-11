import {makeStyles} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Chip from "@material-ui/core/Chip";
import MoreDetailesDialog from "../MoreDetailesDialog";
import FormLabel from "@material-ui/core/FormLabel";
import {Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import hotCorn from "../../assets/images/lamess/hotCorn.png";
import bowl from "../../assets/images/lamess/bowl.png";

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
    labelImg: {
        textAlign: 'center',
    },
    firstFormControl: {
        marginBottom: 16,
    }
});


export const FieldSetHomeDrawer = ({value, infoAboutImg, checked, onChange, img, infoAboutDetails, label, name, infoTechnology}) => {

    const sizeL = useMediaQuery('(min-width:800px)');
    const sizeM = useMediaQuery('(min-width:600px)');
    const classes = useStyle({sizeL, sizeM});

    const [dialogInfo, setDialogInfo] = React.useState(null);
    const openDialog = (info) => {
        setDialogInfo(info);
    };
    const closeDialog = () => {
        setDialogInfo(null);
    };

    return (
        <>
            <FormControlLabel
                value={value}
                control={
                    !infoAboutImg ?
                        <Radio/> :
                        <div className={classes.radioWithPhoto}>
                            <Radio
                                value={value}
                                checked={checked}
                                onChange={onChange}
                            />{' '}
                            <img className={classes.radioImg} src={img}/>
                        </div>
                }
                label={
                    !infoAboutDetails ?
                        label :
                        (<div className={classes.labelImg}>
                            {' '}
                            {name}{' '}
                            <Chip
                                onClick={() => {
                                    openDialog(infoTechnology)
                                }}
                                size="small"
                                label="Подробней"
                            />{' '}
                        </div>)
                }
            />
            {Boolean(dialogInfo) && (
                <MoreDetailesDialog
                    open={Boolean(dialogInfo)}
                    onClose={closeDialog}
                    title={dialogInfo.title}
                    text={dialogInfo.text}
                    img={dialogInfo.img}
                />
            )}
        </>
    );
};

