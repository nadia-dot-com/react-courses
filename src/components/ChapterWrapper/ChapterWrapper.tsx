import { ReactElement, ReactNode } from "react";
import {useNavigate} from 'react-router';
import {cn} from 'utils/cn'
import {EmojiButton} from '../EmojiButton/EmojiButton';
import {FlexFiller} from "../FlexFiller/FlexFiller"
import classes from './ChapterWrapper.module.css';
import { useCounter } from "1-HooksBasics/CustomHooks/useCounter";

export type ChapterWrapperProps = {
    title: string | ReactElement;
    subtitle?: string | ReactElement;
    contentClassName?: string;
    children: ReactNode;
    rerender?: () => void;
}

export function ChapterWrapper(props: ChapterWrapperProps) {
    const { title, subtitle, children, rerender, contentClassName} = props;
    const {value: childrenKey, increase: remount} = useCounter();
    // const navigate = useNavigate();
    // const closeChapter = () => navigate('/');

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.title}>
                    <h2>{title}</h2>
                    <FlexFiller/>
                    {rerender &&<EmojiButton emoji="🔄" tooltip="Rerender" onClick={rerender}/>}
                    <EmojiButton emoji="♻" tooltip="REmount" onClick={remount}/>
                    {/* <EmojiButton emoji="❌" tooltip="Close" onClick={closeChapter} /> */}
                </div>
                <h3>{subtitle}</h3>
            </div>
            <div key={childrenKey} className={cn(classes.content, contentClassName)}>{children}</div>
        </div>
    )


}




