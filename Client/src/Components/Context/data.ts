import { UserType } from "./type";

export const userData: UserType[] = [
    {
        name: 'Nam Thanh',
        id: '@nam_2013830',
        username: 'namthanh123',
        password: '2013830',
        avatar: 'https://source.unsplash.com/random',
        myDishes: [
            {
                id: 1,
                name:'Lagu gà nấu nho',
                owner:'Thanh Nam',
                ownerAvatar:'https://source.unsplash.com/random',
                like:4,
                heart:12,
                clap:1,
                imgUrl:'https://img-global.cpcdn.com/recipes/bbb3ca6fd468368f/1360x964cq70/lagu-ga-n%E1%BA%A5u-nho-t%C6%B0%C6%A1i-recipe-main-photo.webp',
                ingredient: ['gà', 'nho', 'khoai tây', 'cà rốt'],
                ingredientDetail: ['1/4 củ hành tây', '1 bát cơm nguội', 'Bơ, tỏi', '100g thịt thăn bò', '2 cọng măng tây hoặc loại củ tuỳ thích'],
        stepList: [
            {
                describe: 'Cắt thịt bò, hành tây thành miếng nhỏ tuỳ ý Trộn các gia vị trong nguyên liệu sốt trộn +1-2 nước kim chi cho đều',
                image: [
                    'https://img-global.cpcdn.com/steps/0161b080de7d9b53/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-1-photo.webp',
                ]
            },
            {
                describe: 'Phi hành tỏi, xào bò với 1m sốt trộn Bò chín tái chút ra để riêng',
                image: [
                    'https://img-global.cpcdn.com/steps/801d90575d514c9c/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-2-photo.webp',
                    'https://img-global.cpcdn.com/steps/db31d4f1e23a57a1/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-2-photo.webp',
                    'https://img-global.cpcdn.com/steps/f0c5a188fb73f6df/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-2-photo.webp'
                ]
            },
            {
                describe: 'Cho ít dầu vào chảo, cho hành tây vào phi kế đến lần lượt cho > cơm thịt bò > hành tây vào đảo cơm đều ráo lại',
                image: [
                    'https://img-global.cpcdn.com/steps/487496537258e0bc/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-3-photo.webp',
                    'https://img-global.cpcdn.com/steps/f248737b6782aa93/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-3-photo.webp',
                ]
            },
            {
                describe: 'Cho bò cùng hành ngò vào đảo lại là xong, Cho thêm trứng ốp lết ăn kèm nè, Thưởng thức thôi chờ chi nữa',
                image: [
                    'https://img-global.cpcdn.com/steps/65b2a1514c4acda2/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-4-photo.webp',
                    'https://img-global.cpcdn.com/steps/5e034592d3e296fc/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-4-photo.webp',
                ]
            }
        ]
            },
            {   
                id: 2,
                name:'Salad nho',
                owner:'Thanh Nam',
                ownerAvatar:'https://source.unsplash.com/random',
                like:4,
                heart:12,
                clap:1,
                imgUrl:'https://img-global.cpcdn.com/recipes/8f8ed80113dec336/1360x964cq70/salad-nho-xanh-recipe-main-photo.webp',
                ingredient: ['gà', 'nho', 'xà lách'],
                ingredientDetail: ['1/4 củ hành tây', '1 bát cơm nguội', 'Bơ, tỏi', '100g thịt thăn bò', '2 cọng măng tây hoặc loại củ tuỳ thích'],
        stepList: [
            {
                describe: 'Cắt thịt bò, hành tây thành miếng nhỏ tuỳ ý Trộn các gia vị trong nguyên liệu sốt trộn +1-2 nước kim chi cho đều',
                image: [
                    'https://img-global.cpcdn.com/steps/0161b080de7d9b53/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-1-photo.webp',
                ]
            },
            {
                describe: 'Phi hành tỏi, xào bò với 1m sốt trộn Bò chín tái chút ra để riêng',
                image: [
                    'https://img-global.cpcdn.com/steps/801d90575d514c9c/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-2-photo.webp',
                    'https://img-global.cpcdn.com/steps/db31d4f1e23a57a1/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-2-photo.webp',
                    'https://img-global.cpcdn.com/steps/f0c5a188fb73f6df/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-2-photo.webp'
                ]
            },
            {
                describe: 'Cho ít dầu vào chảo, cho hành tây vào phi kế đến lần lượt cho > cơm thịt bò > hành tây vào đảo cơm đều ráo lại',
                image: [
                    'https://img-global.cpcdn.com/steps/487496537258e0bc/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-3-photo.webp',
                    'https://img-global.cpcdn.com/steps/f248737b6782aa93/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-3-photo.webp',
                ]
            },
            {
                describe: 'Cho bò cùng hành ngò vào đảo lại là xong, Cho thêm trứng ốp lết ăn kèm nè, Thưởng thức thôi chờ chi nữa',
                image: [
                    'https://img-global.cpcdn.com/steps/65b2a1514c4acda2/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-4-photo.webp',
                    'https://img-global.cpcdn.com/steps/5e034592d3e296fc/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-4-photo.webp',
                ]
            }
        ]
            },
            {
                id: 3,
                name:'Trà nho dầm',
                owner:'Thanh Nam',
                ownerAvatar:'https://source.unsplash.com/random',
                like:4,
                heart:12,
                clap:1,
                imgUrl:'https://img-global.cpcdn.com/recipes/0197f486b55772a6/1360x964cq70/sp0781-tra-nho-d%E1%BA%A7m-recipe-main-photo.webp',
                ingredient: ['trà', 'nho'],
                ingredientDetail: ['1/4 củ hành tây', '1 bát cơm nguội', 'Bơ, tỏi', '100g thịt thăn bò', '2 cọng măng tây hoặc loại củ tuỳ thích'],
        stepList: [
            {
                describe: 'Cắt thịt bò, hành tây thành miếng nhỏ tuỳ ý Trộn các gia vị trong nguyên liệu sốt trộn +1-2 nước kim chi cho đều',
                image: [
                    'https://img-global.cpcdn.com/steps/0161b080de7d9b53/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-1-photo.webp',
                ]
            },
            {
                describe: 'Phi hành tỏi, xào bò với 1m sốt trộn Bò chín tái chút ra để riêng',
                image: [
                    'https://img-global.cpcdn.com/steps/801d90575d514c9c/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-2-photo.webp',
                    'https://img-global.cpcdn.com/steps/db31d4f1e23a57a1/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-2-photo.webp',
                    'https://img-global.cpcdn.com/steps/f0c5a188fb73f6df/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-2-photo.webp'
                ]
            },
            {
                describe: 'Cho ít dầu vào chảo, cho hành tây vào phi kế đến lần lượt cho > cơm thịt bò > hành tây vào đảo cơm đều ráo lại',
                image: [
                    'https://img-global.cpcdn.com/steps/487496537258e0bc/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-3-photo.webp',
                    'https://img-global.cpcdn.com/steps/f248737b6782aa93/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-3-photo.webp',
                ]
            },
            {
                describe: 'Cho bò cùng hành ngò vào đảo lại là xong, Cho thêm trứng ốp lết ăn kèm nè, Thưởng thức thôi chờ chi nữa',
                image: [
                    'https://img-global.cpcdn.com/steps/65b2a1514c4acda2/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-4-photo.webp',
                    'https://img-global.cpcdn.com/steps/5e034592d3e296fc/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-4-photo.webp',
                ]
            }
        ]
            },
            {
                id: 4,
                name:'Kem nho',
                owner:'Thanh Nam',
                ownerAvatar:'https://source.unsplash.com/random',
                like:4,
                heart:12,
                clap:1,
                imgUrl:'https://img-global.cpcdn.com/recipes/54cc98a848fd911a/1360x964cq70/kem-nho-nguyen-qu%E1%BA%A3-recipe-main-photo.webp',
                ingredient: ['nho'],
                ingredientDetail: ['1/4 củ hành tây', '1 bát cơm nguội', 'Bơ, tỏi', '100g thịt thăn bò', '2 cọng măng tây hoặc loại củ tuỳ thích'],
        stepList: [
            {
                describe: 'Cắt thịt bò, hành tây thành miếng nhỏ tuỳ ý Trộn các gia vị trong nguyên liệu sốt trộn +1-2 nước kim chi cho đều',
                image: [
                    'https://img-global.cpcdn.com/steps/0161b080de7d9b53/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-1-photo.webp',
                ]
            },
            {
                describe: 'Phi hành tỏi, xào bò với 1m sốt trộn Bò chín tái chút ra để riêng',
                image: [
                    'https://img-global.cpcdn.com/steps/801d90575d514c9c/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-2-photo.webp',
                    'https://img-global.cpcdn.com/steps/db31d4f1e23a57a1/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-2-photo.webp',
                    'https://img-global.cpcdn.com/steps/f0c5a188fb73f6df/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-2-photo.webp'
                ]
            },
            {
                describe: 'Cho ít dầu vào chảo, cho hành tây vào phi kế đến lần lượt cho > cơm thịt bò > hành tây vào đảo cơm đều ráo lại',
                image: [
                    'https://img-global.cpcdn.com/steps/487496537258e0bc/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-3-photo.webp',
                    'https://img-global.cpcdn.com/steps/f248737b6782aa93/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-3-photo.webp',
                ]
            },
            {
                describe: 'Cho bò cùng hành ngò vào đảo lại là xong, Cho thêm trứng ốp lết ăn kèm nè, Thưởng thức thôi chờ chi nữa',
                image: [
                    'https://img-global.cpcdn.com/steps/65b2a1514c4acda2/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-4-photo.webp',
                    'https://img-global.cpcdn.com/steps/5e034592d3e296fc/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-4-photo.webp',
                ]
            }
        ]
            },
            {
                id: 5,
                name:'Cooktail nho',
                owner:'Thanh Nam',
                ownerAvatar:'https://source.unsplash.com/random',
                like:4,
                heart:12,
                clap:1,
                imgUrl:'https://img-global.cpcdn.com/recipes/903cc7a06662dd28/1360x964cq70/cocktail-trai-cay-recipe-main-photo.webp',
                ingredient: ['nho', 'rượu'],
                ingredientDetail: ['1/4 củ hành tây', '1 bát cơm nguội', 'Bơ, tỏi', '100g thịt thăn bò', '2 cọng măng tây hoặc loại củ tuỳ thích'],
        stepList: [
            {
                describe: 'Cắt thịt bò, hành tây thành miếng nhỏ tuỳ ý Trộn các gia vị trong nguyên liệu sốt trộn +1-2 nước kim chi cho đều',
                image: [
                    'https://img-global.cpcdn.com/steps/0161b080de7d9b53/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-1-photo.webp',
                ]
            },
            {
                describe: 'Phi hành tỏi, xào bò với 1m sốt trộn Bò chín tái chút ra để riêng',
                image: [
                    'https://img-global.cpcdn.com/steps/801d90575d514c9c/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-2-photo.webp',
                    'https://img-global.cpcdn.com/steps/db31d4f1e23a57a1/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-2-photo.webp',
                    'https://img-global.cpcdn.com/steps/f0c5a188fb73f6df/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-2-photo.webp'
                ]
            },
            {
                describe: 'Cho ít dầu vào chảo, cho hành tây vào phi kế đến lần lượt cho > cơm thịt bò > hành tây vào đảo cơm đều ráo lại',
                image: [
                    'https://img-global.cpcdn.com/steps/487496537258e0bc/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-3-photo.webp',
                    'https://img-global.cpcdn.com/steps/f248737b6782aa93/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-3-photo.webp',
                ]
            },
            {
                describe: 'Cho bò cùng hành ngò vào đảo lại là xong, Cho thêm trứng ốp lết ăn kèm nè, Thưởng thức thôi chờ chi nữa',
                image: [
                    'https://img-global.cpcdn.com/steps/65b2a1514c4acda2/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-4-photo.webp',
                    'https://img-global.cpcdn.com/steps/5e034592d3e296fc/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-4-photo.webp',
                ]
            }
        ]
            },
        
        ],
        saveDishes: [
            {
                id: 6,
                name:'Bò Beefsteak',
                owner:'Arary Green',
                ownerAvatar:'https://source.unsplash.com/random',
                like:4,
                heart:12,
                clap:1,
                imgUrl:'https://img-global.cpcdn.com/recipes/bfdd9e71bf86261b/256x352cq50/beefsteak-bit-t%E1%BA%BFt-b%C6%A1-t%E1%BB%8Fi-recipe-main-photo.webp',
                ingredient: ['thịt bò'],
                ingredientDetail: ['1/4 củ hành tây', '1 bát cơm nguội', 'Bơ, tỏi', '100g thịt thăn bò', '2 cọng măng tây hoặc loại củ tuỳ thích'],
        stepList: [
            {
                describe: 'Cắt thịt bò, hành tây thành miếng nhỏ tuỳ ý Trộn các gia vị trong nguyên liệu sốt trộn +1-2 nước kim chi cho đều',
                image: [
                    'https://img-global.cpcdn.com/steps/0161b080de7d9b53/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-1-photo.webp',
                ]
            },
            {
                describe: 'Phi hành tỏi, xào bò với 1m sốt trộn Bò chín tái chút ra để riêng',
                image: [
                    'https://img-global.cpcdn.com/steps/801d90575d514c9c/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-2-photo.webp',
                    'https://img-global.cpcdn.com/steps/db31d4f1e23a57a1/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-2-photo.webp',
                    'https://img-global.cpcdn.com/steps/f0c5a188fb73f6df/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-2-photo.webp'
                ]
            },
            {
                describe: 'Cho ít dầu vào chảo, cho hành tây vào phi kế đến lần lượt cho > cơm thịt bò > hành tây vào đảo cơm đều ráo lại',
                image: [
                    'https://img-global.cpcdn.com/steps/487496537258e0bc/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-3-photo.webp',
                    'https://img-global.cpcdn.com/steps/f248737b6782aa93/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-3-photo.webp',
                ]
            },
            {
                describe: 'Cho bò cùng hành ngò vào đảo lại là xong, Cho thêm trứng ốp lết ăn kèm nè, Thưởng thức thôi chờ chi nữa',
                image: [
                    'https://img-global.cpcdn.com/steps/65b2a1514c4acda2/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-4-photo.webp',
                    'https://img-global.cpcdn.com/steps/5e034592d3e296fc/320x256cq70/c%C6%A1m-chien-kimchi-bo-xuc-xich-recipe-step-4-photo.webp',
                ]
            }
        ]
            },
        ]
    }
]