import { View, Image } from "react-native";
import { styles } from "./styles";

import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";

export const Header = () => {
    return (
        <View style={styles.header}>
            <Image style={styles.primeLogoImg} source={PrimeVideoLogo}/>
            <Image style={styles.amazonLogoImg} source={AmazonLogo}/>
        </View>
    )
}