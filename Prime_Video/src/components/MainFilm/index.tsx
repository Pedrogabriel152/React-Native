import { Image, TouchableOpacity } from "react-native";

import MovieRheWhell from "../../assets/movies/the_wheel_of_time.png";
import { styles } from "./styles";

export const MainFilm = () => {
    return (
        <TouchableOpacity style={styles.movieImageThumb}>
            <Image style={styles.MovieImage} source={MovieRheWhell}/>
        </TouchableOpacity>
    )
}