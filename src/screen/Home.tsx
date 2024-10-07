import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
function Home() {
    const [count, setCount] = useState(0);
    const [dataApi, setDataApi] = useState([]);


    useEffect(() => {
        const getApi = async () => {
            const data = await fetch('https://rickandmortyapi.com/api/character');
            const res = await data.json();
            setDataApi(res.results);
        };
        getApi();
    }, []);




    const increment = () => {
        setCount(count - 1);
    };
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
                {dataApi.map((rick) => (
                    <View key={rick.id}>
                        <Text>Name: {rick.name}</Text>
                        <Text>Status: {rick.status}</Text>
                        <Text>Species: {rick.species}</Text>
                        <Image source={{ uri: rick.image }} style={{ width: 100, height: 100 }} />
                    </View>
                ))}
            </View>

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
export default Home;
