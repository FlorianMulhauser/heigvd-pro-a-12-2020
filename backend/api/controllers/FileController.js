var mongoose = require('mongoose');

var conn = mongoose.connection;
var multer = require('multer');
var GridFsStorage = require('multer-gridfs-storage');
var Grid = require('gridfs-stream');
var gfs;
var storage;

// init gfs and storage mais en attendant que la db  connecté
conn.once("open", () => {
    // init stream
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: "uploads"
    });
    // Storage
    storage = new GridFsStorage({
        db: conn.db,
        gfs: gfs,

        filename: (req, file, cb) => {
            let date = Date.now();
            // The way you want to store your file in database
            cb(null, file.fieldname + '-' + date + '.');
        },

        // Additional Meta-data that you want to store
        metadata: function(req, file, cb) {
            cb(null, { originalname: file.originalname });
        },
        root: 'ctFiles' // Root collection name
    });
});





// Multer configuration for single file uploads
var upload = multer({
    storage: storage
}).single('file');

exports.upload_a_file = function(req, res) {


    upload(req,res, (err) => {
        if(err){
            res.json({error_code:1,err_desc:err});
            console.log(err);
            return;
        }
        res.json({error_code:0, error_desc: null, file_uploaded: true});
        console.log( "file_uploaded: true");
    });

};


exports.Download_a_file = function (req, res) {
    gfs.collection('ctFiles'); //set collection name to lookup into

    /** First check if file exists */
    gfs.files.find({filename: req.params.filename}).toArray(function(err, files){
        if(!files || files.length === 0){
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "error"
            });
        }
        // create read stream
        var readstream = gfs.createReadStream({
            filename: files[0].filename,
            root: "ctFiles"
        });
        // set the proper content type
        res.set('Content-Type', files[0].contentType)
        // Return response
        return readstream.pipe(res);
    });

}


