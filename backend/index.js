const http = require('http');
const url = require('url');
const PORT = 8888;



//create server
const server = http.createServer((req, res) => {
    const strings = new en();
    
    // set headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');


    // handle preflight
    if (req.method == 'OPTIONS'){
        res.writeHead(204);
        res.end();
        return;
    }

    /*
    // get url
    // get pathname
    // get basepath
    const parsedURL = new URL(req.url, `http://${req.headers.host}`);
    const pathname = parsedURL.pathname;
    const postPath = '/comp4537/hackathon';
    const getPath = '/comp4537/hackathon';
    const queryParams = parsedURL.searchParams;
    

    // handle requests
    try {

        if (req.method == 'GET' && pathname == `${getPath}`) {
            console.log('\nGET handler called...');
            getHandler(req, res, queryParams);

        } else if (req.method == 'POST' && pathname == `${postPath}`) {
            console.log('/nPOST handler called...');
            postHandler(req, res);

        } else {
            console.log('\nError handler called...');
            errorHandler(req, res);
        }

    } catch (error) {
        let result = strings.notProcessed;
        console.error("\nCatch triggered - error: ", error);
        res.writeHead(404);
        res.end(JSON.stringify({ data: result }));

    }*/
})

//listen
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})