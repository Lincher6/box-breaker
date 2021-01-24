import React, {useState} from "react"
import { Container, Toggle } from './styles';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CloseIcon from '@material-ui/icons/Close';
import { soundManager } from 'lib/soundManager';

export const Rules = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        if (!open) {
            soundManager.playPopup();
        }
        setOpen(!open)
    }

    return (
        <>
            <Toggle onClick={handleClick}>
                {open ? <CloseIcon/> : <AssignmentIcon/>}
            </Toggle>

            {
                open && <Container>
                    <h1>Game Rules</h1>
                    <p>Simple clicker game, hit as many boxes as you can during one minute.</p>
                    <br/>
                    <p>Controls:</p>
                    <ul>
                        <li>L-Click - destroy box</li>
                        <li>SPACE to pause</li>
                        <li>Clocks subtract 5s if not destroyed in time</li>
                        <li>Armored blockes absorb up to 4 hits</li>
                        <li>UFO gives a lot of points</li>
                    </ul>
                    <br/>
                    <p>Cheat:</p>
                    <p>edit time while game is paused</p>
                </Container>
            }
        </>
    )
}