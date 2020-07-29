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
        marginBottom: 10,
    }
});

const info = {
    warmCorner: {
        title: 'Технология «Теплый угол»',
        text:
            'Тёплый угол – это специальный метод углового соединения в брусе посредством системы «шип-паз». Брус профилированный поставляется на стройплощадку в заготовке длиной6м и там уже опытными плотниками запиливается соединительный узел. Если правильно соблюдены параметры,  угол получается герметичным, и в нём не наблюдаются «мостика холода». Разумеется, дерево запиливается таким образом, чтобы все детали плотно прилегали друг к другу. К этому добавляется давление венцов, и в результате сооружение становится более устойчивым и надёжным. Основным преимуществом данного метода является экономичность, т.к. торцевые части бруса не выступают за стены и клиент не переплачивает за данную кубатуру.',
        img: hotCorn,
    },
    bowl: {
        title: 'Технология «В чашу»',
        text:
            'Данный метод углового соединения в брусе считается самым надежным. Чаша и торцовка деталей выполняется на нашем производстве с использованием высокоточного оборудования лидирующих мировых производителей и поставляется на стройплощадку уже готовый домокомплект. Используемая нами чаша считается самой сложной по своей конфигурации, т.к. она выпилена со всех сторон и с двух сторон имеет смещение. Помимо того, что данное узловое соединение полностью исключает продувание угла, оно не требует дополнительной отделки снаружи.',
        img: bowl,
    }
};

export const FieldSetHomeDrawer = (props) => {

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
                value={props.value}
                control={
                    !props.infoAboutImg ?
                        <Radio/> :
                        <div className={classes.radioWithPhoto}>
                            <Radio
                                value={props.value}
                                checked={props.checked}
                                onChange={props.onChange}
                            />{' '}
                            <img className={classes.radioImg} src={props.img}/>
                        </div>
                }
                label={
                    !props.infoAboutDetails ?
                        props.label :
                        (<div className={classes.labelImg}>
                            {' '}
                            {props.name}{' '}
                            <Chip
                                onClick={() => {
                                    openDialog(props.infoTechnology)
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

export const InfoFieldSetFromHomeDrawer = (props) => {
    return(
        <FormControl className={props.classesTest} component="fieldset">
            <FormLabel component="legend">{props.value}</FormLabel>
            <Typography>Уточняется по телефону</Typography>
        </FormControl>
    )
}