import { FlatList } from "react-native"
import { MOVIESWATCHING } from "../../utils/moviesWatching"
import { MoviesCard } from "../MovieCard"
import { MOVIESCRIME } from "../../utils/moviesCrimes"
import { styles } from "./styles"

export const ListMovies = () => {
    return (
        <>
            <FlatList 
                data={MOVIESWATCHING}
                keyExtractor={(item: any) => item.id}
                renderItem={({item}) => (
                    <MoviesCard 
                        movieURL={item.moviesURL}  
                    />
                )}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />

            <FlatList 
                data={MOVIESCRIME}
                keyExtractor={(item: any) => item.id}
                renderItem={({item}) => (
                    <MoviesCard 
                        movieURL={item.moviesURL}  
                    />
                )}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />
        </>
    )
}