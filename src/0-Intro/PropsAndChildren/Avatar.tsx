import classes from './Avatar.module.css';

export function Avatar({name}: {name: string}) {
    const imegeSrc = `https://cataas.com/cat?${name}`;

    return (
        <div className={classes.container}>
            <img src={imegeSrc} alt="Cat" className={classes.image}/>
            <div className={classes.captiop}>{name}</div>
        </div>
    )
}