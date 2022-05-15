import {ReactComponent as StarFull} from 'assets/img/starFull.svg';
import {ReactComponent as StarHalf} from 'assets/img/starHalf.svg';
import {ReactComponent as StarEmpty} from 'assets/img/starBlank.svg';
import "./styles.css";

export default function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}