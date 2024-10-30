
const BackgroundStoreModel =require("../Models/backgroundStoreModel");
const Widget = [
    { name: 'pen', action: 'draw', icon:'https://journalimagestore.s3.ap-south-1.amazonaws.com/pencil.png' },
    { name: 'Sticker', action: 'stick', icon:'https://journalimagestore.s3.ap-south-1.amazonaws.com/star+(1).png' },
    { name: 'Image', action: 'add' ,icon:'https://journalimagestore.s3.ap-south-1.amazonaws.com/picture.png'},
    { name: 'posters', action: 'paste' ,icon:'https://journalimagestore.s3.ap-south-1.amazonaws.com/post.png' },
    { name: 'background', action: 'paste', icon:'https://journalimagestore.s3.ap-south-1.amazonaws.com/image+(7).png' },
    { name: 'fonts', action: 'paste', icon:'https://journalimagestore.s3.ap-south-1.amazonaws.com/font+(1).png' },
    { name: 'lists', action: 'paste', icon:'https://journalimagestore.s3.ap-south-1.amazonaws.com/list.png' },
    { name: 'emoji', action: 'paste', icon :'https://journalimagestore.s3.ap-south-1.amazonaws.com/smile+(1).png' },
    { name: 'tags', action: 'paste', icon:'https://journalimagestore.s3.ap-south-1.amazonaws.com/tag.png' },
    { name: 'location', action: 'paste',icon:'https://journalimagestore.s3.ap-south-1.amazonaws.com/map.png' }
];

exports.getWidget = (req, res) => {
    try {
        res.status(200).json({ widget: Widget });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
};

exports.getBackgroundsStore = async (req, res) => {
    try {
        const backgrounds = await BackgroundStoreModel.find();
        return res.status(200).json({code:200,
            success: true,
            data: backgrounds
        });
    } catch (error) {
        
        return res.status(500).json({
            success: false,
            message: 'Server error, could not retrieve backgrounds',
            error: error.message
        });
    }
};

