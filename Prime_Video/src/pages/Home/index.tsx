import { View, Text, Image } from "react-native"
import { styles } from "./styles"
import { Header } from "../../components/Header"
import { Category } from "../../components/Category"
import { MainFilm } from "../../components/MainFilm"
import { ListMovies } from "../../components/ListMovies"

export const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Category />
            <MainFilm />
            <ListMovies />
        </View>
    )
}