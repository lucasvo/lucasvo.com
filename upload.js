const AWS = require('aws-sdk'),
    fs = require('fs');

// Read in the file, convert it to base64, store to S3
fs.readFile('dist/index.html', function (err, data) {
  if (err) { throw err }

  let s3 = new AWS.S3();

  s3.putObject({
    Bucket: 'lucasvo-web',
    Key: 'index.html',
    Body: data,
    ACL: 'public-read',
    ContentType: 'text/html'
  },resp => {
    console.log(resp)
    console.log('Successfully uploaded index.html.')
  });

});
