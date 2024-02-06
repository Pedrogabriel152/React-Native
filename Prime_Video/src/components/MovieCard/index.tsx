import { Image, ImageProps, TouchableOpacity } from "react-native"
import { styles } from "./styles"

interface Props {
    movieURL: ImageProps | Readonly<ImageProps>
}

export const MoviesCard = ({movieURL}: Props) => {
    return (
        <TouchableOpacity>
            <Image style={styles.img} source={movieURL}/>
        </TouchableOpacity>
    )
}