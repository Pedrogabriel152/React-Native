import { FlatList, ScrollView, Text } from "react-native"
import { MOVIESWATCHING } from "../../utils/moviesWatching"
import { MoviesCard } from "../MovieCard"
import { MOVIESCRIME } from "../../utils/moviesCrimes"
import { styles } from "./styles"

export const ListMovies = () => {
    return (
        <ScrollView 
            style={styles.contentMovies}
        >
            <Text style={styles.movieText}>Continue Watching</Text>
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

            <Text style={styles.movieText}>Crime Movies</Text>

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
        </ScrollView>
    )
}