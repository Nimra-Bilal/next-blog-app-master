// import mongoose from "mongoose";
// const Schema = new mongoose.Schema({
//     title:{
//         type: String,
//         required:true
// },
// description:{
//     type:String,
//     required:true,
// },
// category:{
//      type:String,
//     required:true, 
// },
// author:{
//      type:String,
//     required:true, 
// },
// image:{
//      type:String,
//     required:true, 
// },
// authImg:{
//      type:String,
//     required:true, 
//     default: "/Assets/author_img.png",
// },
// date:{
//     type:Date,
//     default:Date.now()
// }


// }) 
// const BlogModel = mongoose.models.blog || mongoose.model('blog',Schema)
// export default BlogModel;




import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String, // This will store the Cloudinary URL
    required: true,
  },
  authImg: {
    type: String,
    required: true,
    default: "/Assets/author_img.png", // optional, can also be a Cloudinary URL
  },
  date: {
    type: Date,
    default: Date.now, // ✅ fixed: use function, not Date.now()
  },
});

const BlogModel = mongoose.models.blog || mongoose.model("blog", Schema);
export default BlogModel;
