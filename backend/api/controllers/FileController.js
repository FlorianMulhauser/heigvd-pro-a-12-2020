var mongoose = require('mongoose');

var conn = mongoose.connection;
var multer = require('multer');
var GridFsStorage = require('multer-gridfs-storage');
var Grid = require('gridfs-stream');
var gfs;
var storage;
// Multer configuration for single file uploads
var upload;

// init gfs and storage mais en attendant que la db  connecté
conn.once("open", () => {
    // init stream
    gfs = Grid(conn.db,mongoose.mongo);
    // Storage
    storage = new GridFsStorage({
        url:  "mongodb+srv://test_node_js:mZFhIBjco2JR7xqX@progroupa12-f3mld.gcp.mongodb.net/test?retryWrites=true&w=majority",
        options: {useUnifiedTopology: true},
        file: (req, file) => {
            return {filename: file.originalname.replace(".", "_")}
        }
    });

    upload = multer({storage}).single('file');
});


exports.upload_a_file = function(req, res) {
    upload(req,res, (err) => {
        if(err){
            res.json({error_code:1,err_desc:err});
            console.log(err);
            return;
        }
        res.json({error_code:0, error_desc: null, file_uploaded: true});
    });

};


exports.Download_a_file = function (req, res) {


    gfs.collection('fs');
    /** First check if file exists */
    gfs.files.find({filename: req.params.filename.replace(".", "_")}).toArray(function(err, files){
        if(!files || files.length === 0){
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "error",
                responseType: files.length,
            });
        }
        // create read stream
        var readstream = gfs.createReadStream({
            filename: files[0].filename,
            root: 'fs'

        });
        // set the proper content type
        res.set('Content-Type', files[0].contentType)
        // Return response
        return readstream.pipe(res);
    });

}

exports.Download_all_files = function (req, res) {

    let filesData = [];
    let count = 0;
    gfs.collection('fs'); // set the collection to look up into

    gfs.files.find({}).toArray((err, files) => {
        // Error checking
        if(!files || files.length === 0){
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "error"
            });
        }
        // Loop through all the files and fetch the necessary information
        files.forEach((file) => {
            filesData[count++] = {
                originalname: file.metadata.originalname,
                filename: file.filename,
                contentType: file.contentType
            }
        });
        res.json(filesData);
    });

}

exports.Delete_a_file = function (req, res) {

    var options = {filename:req.params.filename.replace(".", "_")};

    gfs.collection('fs'); // set the collection to look up into
    gfs.remove(options, function (err) {
        if (err) return handleError(err);
        console.log('success');
    });

}
