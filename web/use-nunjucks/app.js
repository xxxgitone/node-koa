const nunjucks = require('nunjucks');

function createEnv(path, opts) {
    let autoescape = opts.autoescape && true,
          noCache = opts.noCache || false,
          watch = opts.watch || false,
          throwOnUndefined = opts.throwOnUndefined || false;
    let env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch
            }), {
                autoescape:autoescape,
                throwOnUndefined: throwOnUndefined
            }
        );

    if(opts.filters) {
        for(let f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }

    return env;
}

const env = createEnv('views', {
    watch:true,
    filters: {
        hex: function(n) {
            return 'Ox' + n.toString(16);
        }
    }
})

const s = env.render('hello.html', {name: 'xiaoming'})
console.log(s);//h1>Hello xiaoming</h1>