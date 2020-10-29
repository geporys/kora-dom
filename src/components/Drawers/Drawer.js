import {makeStyles} from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import MUDrawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import {ArrowForward} from "@material-ui/icons";
import ImageGallery from "react-image-gallery";
import {Typography} from "@material-ui/core";
import MoreDetailesDialog from "../MoreDetailesDialog";

const useStyle = makeStyles({
    content: {
        maxWidth: ({sizeL}) => (sizeL ? 800 : '100%'),
        padding: '64px 24px 16px',
    },
    image: {
        width: '100%',
        height: ({sizeM}) => (sizeM ? 500 : '70vw'),
    },
    thumbnail: {
        width: ({sizeL}) => (sizeL ? 90 : 70),
        height: ({sizeL}) => (sizeL ? 70 : 60),
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 24,
        position: ({sizeL}) => !sizeL && 'fixed',
        bottom: ({sizeL}) => !sizeL && 0,
        left: ({sizeL}) => !sizeL && 0,
        width: ({sizeL}) => !sizeL && '100%',
        backgroundColor: 'white',
        padding: ({sizeL}) => !sizeL && 24,
        zIndex: 1000,
        boxShadow: ({sizeL}) =>
            !sizeL &&
            '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
    header: {
        paddingBottom: 24,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    paper: {
        width: ({sizeL}) => !sizeL && '100%',
    },
    price: {
        height: 32,
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 22,
        color: 'rgb(255, 255, 255)',
        backgroundColor: 'rgb(43, 45, 51)',
        borderRadius: 16,
        outline: 0,
        marginRight: ({sizeL}) => !sizeL && 40,
        '&:hover': {
            color: 'rgb(43, 45, 51)',
        },
    },
});

const Drawer = ({open, onClose, makeOrder, totalPrice, handleClick, data, children}) => {
    const sizeL = useMediaQuery('(min-width:800px)');
    const sizeM = useMediaQuery('(min-width:600px)');

    const classes = useStyle({sizeL, sizeM});

    const [dialogInfo, setDialogInfo] = React.useState(null);

    const closeDialog = () => {
        setDialogInfo(null);
    };

    return (
        <>
            <MUDrawer
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                onClose={onClose}
                anchor="right"
            >
                {data && (
                    <div className={classes.content}>
                        <div className={classes.header}>
                            <IconButton onClick={onClose}>
                                <ArrowForward style={{fontSize: 36}}/>
                            </IconButton>
                        </div>
                        {(data.imgs.length === 1) && <img alt="" className={classes.image} src={data.imgs}/>}
                        {(data.imgs.length > 1) &&
                        <ImageGallery
                            showPlayButton={false}
                            showFullscreenButton={false}
                            items={data.imgs.map((img) => ({
                                original: img,
                                sizes: '100x100',
                                renderItem: () => <img alt="item" className={classes.image} src={img}/>,
                                renderThumbInner: () => <img alt="thumb" className={classes.thumbnail} src={img}/>,
                            }))}
                        />
                        }
                        <div className={classes.title}>
                            <>
                                <Typography variant="h6">{data.title}</Typography>
                                <Chip
                                    onClick={handleClick}
                                    variant="outlined"
                                    className={classes.price}
                                    label={totalPrice + ' ₽'}
                                />
                            </>
                        </div>
                        {children}
                    </div>
                )}
            </MUDrawer>
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

export default Drawer;
