process.env['NODE_ENV']  = 'production';

var fs                   = require('fs');
var browserify           = require('browserify');

var ENGINE_RUNTIME_DIR   = process.argv[2];
var ENGINE_RUNTIME_VER   = process.argv[3];
var OUTPUT_FILE          = process.argv[4];

var ENGINE_RUNTIME_INDEX = ENGINE_RUNTIME_DIR + '/lib/runtime.js';

browserify({entries: [ENGINE_RUNTIME_INDEX], standalone: 'jade'})
  .transform('babelify', {
    presets: ['es2015'],
    plugins: ['transform-es2015-block-scoping']
  })
  .transform('envify')
  .bundle()
  .pipe(fs.createWriteStream(OUTPUT_FILE));
