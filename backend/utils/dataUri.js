const {DataUriParser} =require("datauri/parser.js");
import path from "path"
const getDataUri = (file) => {
    const parser = new DataUriParser()
    const extName=path.extname()
    parser.format()
}

export default getDataUri