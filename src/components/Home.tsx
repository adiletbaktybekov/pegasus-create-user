import React, {FC, ReactElement, useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {fetchActionHorse} from "../store/actions";
import {FaCopy} from "react-icons/fa";
import {Tooltip} from "antd";
import 'antd/dist/antd.min.css';
import '../style/style.css'
import {useTransitionState} from "@huse/transition-state";
import CopyToClipboard from "react-copy-to-clipboard";


interface Props {
    text: string;
    children: ReactElement;
}


const CopyButton: FC<Props> = ({text, children}) => {
    const [noticing, setNoticing] = useTransitionState(false, 2500);
    const copy = useCallback(() => setNoticing(true), [setNoticing]);

    return (
        <Tooltip visible={noticing} title="Copied">
            <CopyToClipboard text={text} onCopy={copy}>
                {children}
            </CopyToClipboard>
        </Tooltip>
    );
};


const Home: FC = () => {
    const horse = useAppSelector(state => state.horseSlice.horse)
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(fetchActionHorse() as any)
    }
    return (
        <section id="home">
            <div className="container">
            <div className="home">
                <div className="home-global">
                    <h3>{horse}</h3>
                    <CopyButton text={horse}>
                        <FaCopy style={{fontSize:"30px", cursor: 'pointer'}} className="copy" />
                    </CopyButton>
                </div>
                <button className="btn" onClick={handleClick}>Add
                </button>
            </div>
            </div>
        </section>

    )
}


export default Home;
