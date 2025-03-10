import { Box, Button, Modal } from '@mui/material';
import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css'; 
import { HexColorPicker } from "react-colorful";

const centerColorPicker = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
};

export const ColorPicker = (props: { onColorChange?: (arg0: string) => void; })  => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [color, setColor] = useState("#aabbcc");

    const getLuminance = (hexColor: string) => {
        const r = parseInt(hexColor.slice(1, 3), 16) / 255;
        const g = parseInt(hexColor.slice(3, 5), 16) / 255;
        const b = parseInt(hexColor.slice(5, 7), 16) / 255;
    
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const getTextColor = (hexColor: string) => {
        const luminance = getLuminance(hexColor);
        return luminance > 0.5 ? '#000000' : '#ffffff';
    };

    useEffect(() => {
        if (props.onColorChange) {
            props.onColorChange(color)
        } 
    }, [color]);

    return (
        <div>
            <Button 
                onClick={handleOpen}
                size='large'
                fullWidth
                style={{
                    backgroundColor: color,
                    color: getTextColor(color),
                }}>
                {color}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={centerColorPicker}>
                    <HexColorPicker color={color} onChange={setColor} />
                </Box>
            </Modal>
        </div>
    );
}



