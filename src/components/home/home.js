/**
 *  @copyright Sarwar Hoshen
 */
import React, {useEffect, useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../../rdx/actions'
import Category from './category'
function Home(props) {
    console.log("props.__data",props.__data)
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
    const RenderItem = ({item}) =>
    {
        return (

            <Category item={item}
                      {...props}
            />
        )
    }
    return(
        <View style={{flex:1}}>
            <View style={{height: 100}}>
                <Text style={{fontSize: 20,color: '#434343', marginLeft: 15}}>
                    Categories
                </Text>
                <FlatList
                    horizontal
                    data={props.__data.categories}
                    keyExtractor={(item) => item.id}
                    renderItem={RenderItem}
                    initialNumToRender={5}
                    showsHorizontalScrollIndicator={false}
                    // maxToRenderPerBatch={1}
                    // extraData={props.__data.categories}
                />
            </View>
            <View style={{flex:1}}>
                <Text style={{color: '#434343'}}>Featured</Text>
                <FlatList
                    horizontal
                    data={featuredList}
                    keyExtractor={(item) => item.id}
                    renderItem={RenderItem}
                    initialNumToRender={5}
                    showsHorizontalScrollIndicator={false}
                    // maxToRenderPerBatch={1}
                    // extraData={props.__data.categories}
                />
            </View>
            <View style={{flex:1}}>
                <Text style={{color: '#434343'}}>Best Sell</Text>
                <FlatList
                    horizontal
                    data={bestSellList}
                    keyExtractor={(item) => item.id}
                    renderItem={RenderItem}
                    initialNumToRender={5}
                    showsHorizontalScrollIndicator={false}
                    // maxToRenderPerBatch={1}
                    // extraData={props.__data.categories}
                />
            </View>
        </View>
    )
}

// export default Authentication
/**
 */
const mapStateToProps = (state) => {
    return state;
}; //
/**
 */
export default connect(mapStateToProps, actions)(Home);
