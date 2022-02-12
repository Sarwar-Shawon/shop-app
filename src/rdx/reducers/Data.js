/**
 * @copyright Sarwar Hoshen
 */
export default ( state = {
    categories: [
        {id:1, name: 'Woman', img: require('../../assets/img/woman.jpg'), col1: [132,102,234,0.75],col2:[100,182,255,0.75]},
        {id:2, name: 'Man'  , img: require('../../assets/img/man.jpg'), col1: [255,88,88,0.75],col2:[251,88,149,0.75]},
        {id:3, name: 'Kids'  , img: require('../../assets/img/kids.jpg'), col1: [67,233,123,0.75],col2:[56,249,215,0.75]},
    ],
    items: [
        {id:1, name: 'Woman T-Shirt' , cat_id: 1 , price: 55.00 , cur: '$' , img: require('../../assets/img/woman-t-shirt-1.png') , featured: true , bestSell: false},
        {id:2, name: 'Man T-Shirt' , cat_id: 2 , price: 34.00 , cur: '$' , img: require('../../assets/img/man-t-shirt-1.png') , featured: true , bestSell: false},
        {id:3, name: 'Man T-Shirt' , cat_id: 1 , price: 45.00 , cur: '$' , img: require('../../assets/img/man-t-shirt-2.png') , featured: true , bestSell: true},
        {id:4, name: 'Woman T-Shirt' , cat_id: 1 , price: 35.00 , cur: '$' , img: require('../../assets/img/woman-t-shirt-2.png') , featured: false , bestSell: false},
        {id:5, name: 'Man T-Shirt' , cat_id: 2 , price: 44.00 , cur: '$' , img: require('../../assets/img/man-t-shirt-1.png') , featured: false , bestSell: false},
        {id:6, name: 'Woman T-Shirt' , cat_id: 1 , price: 52.00 , cur: '$' , img: require('../../assets/img/woman-t-shirt-2.png') , featured: false , bestSell: false},
        {id:7, name: 'Kids T-Shirt' , cat_id: 3 , price: 25.00 , cur: '$' , img: require('../../assets/img/kids-wear.png') , featured: false , bestSell: false},
        {id:8, name: 'Kids T-Shirt' , cat_id: 3 , price: 35.00 , cur: '$' , img: require('../../assets/img/kids-wear.png') , featured: false , bestSell: true},
        {id:9, name: 'Female T-Shirt' , cat_id: 3 , price: 65.00 , cur: '$' , img: require('../../assets/img/female-t-shirt.png') , featured: false , bestSell: true},
    ]
},action)=>{

    switch (action.type) {

        case 'user:auth':
            return {...state, auth: action.payload}
        default:
            return state
    }
}
