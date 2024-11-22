import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema (
    {
        videoFile: {
            type: String, //cloudnary Url
            reqired: true
        },
        thumbnail: {
            type: String, //cloudnary Url
            reqired: true
        },
        title: {
            type: String,
            reqired: true
        },
        description: {
            type: String, 
            reqired: true
        },
        duration:{
            type: Number,
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)