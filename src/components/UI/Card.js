// Wrapper which provides html,css for any content
// Can use at any place
import classes from "./Card.module.css";

const Card = props => {
    return <div className={classes.card}>
        {props.children}
    </div>
};

export default Card;