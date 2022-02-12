/**
 *  @copyright Sarwar Hoshen
 */
import React, {useEffect, useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList, StyleSheet
} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../../rdx/actions'
import Category from './category'
import Item from './item'
function Home(props) {
    const [featuredList,setFeaturedList] = useState([])
    const [bestSellList,setBestSellList] = useState([])
    /**
     */
    useEffect(()=>{

        setFeaturedList(props.__data.items.filter(x=>x.featured))
        setBestSellList(props.__data.items.filter(x=>x.bestSell))

    },[])
    /**
     */
    const RenderCategory = ({item}) =>
    {
        return (

            <Category item={item}
                      {...props}
            />
        )
    }
    /**
     */
    const RenderItem = ({item}) =>
    {
        return (

            <Item item={item}
                      {...props}
            />
        )
    }
    return(
        <ScrollView style={{flex:1, marginTop: 20}}>
            <View style={{flex:1}}>
                <Text style={styles.catHeader}>
                    Categories
                </Text>
                <FlatList
                    horizontal
                    data={props.__data.categories}
                    keyExtractor={(item) => item.id}
                    renderItem={RenderCategory}
                    initialNumToRender={5}
                    showsHorizontalScrollIndicator={false}
                    // maxToRenderPerBatch={1}
                    // extraData={props.__data.categories}
                />
            </View>
            <View style={{flex:1}}>
                <Text style={styles.catHeader}>
                    Featured
                </Text>
                <FlatList
                    horizontal
                    data={featuredList}
                    keyExtractor={(item) => item.id}
                    renderItem={RenderItem}
                    initialNumToRender={5}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={{flex:1}}>
                <Text style={styles.catHeader}>
                    Best Sell
                </Text>
                <FlatList
                    horizontal
                    data={bestSellList}
                    keyExtractor={(item) => item.id}
                    renderItem={RenderItem}
                    initialNumToRender={5}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    catHeader: {
        fontSize: 20,
        color: '#434343',
        marginLeft: 15,
        marginTop:10,
        marginBottom:10,
    }
});
/**
 */
const mapStateToProps = (state) => {
    return state;
}; //
/**
 */
export default connect(mapStateToProps, actions)(Home);
