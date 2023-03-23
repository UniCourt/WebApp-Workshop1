# Simple NodeJs App
## Introduction
Simple NodeJs App is a simple web application created using [Node.js](https://github.com/nodejs/node). It uses [MediaWiki - Wikipedia's Search API](https://www.mediawiki.org/wiki/API:Opensearch) to search for anything entered by the user and parses the result in a JSON format. The info box of the Wikipedia page is parsed using [wiki-infobox-parser](https://github.com/0x333333/wiki-infobox-parser).

## Set up the NodeJs server
- Go to [Nasa API's](https://api.nasa.gov/) -> Generate API Key -> Signup 
- You will get API_KEY in mail
- Paste your API_KEY inside .env
- RUN ```docker-compose build``` to build the web application
- RUN ```docker-compose up``` to run the web application

### Live Preview
To view a live preview of this application, click [here](http://localhost:6004)

## Creating Routes
- **Dashboard route**
    - Creating ```/``` route
        ```
        app.get('/', (req,res) =>{
            res.render('dashboard');
        });
        ```
- **NASA route**
    - Creating ```/nasa``` route
        ```
        app.get('/nasa', (req,res) =>{
            res.send("<h1>Nasa API Response will be shown here.</h1>");
        })
        ```
    - Replace the above code with
        ```
        app.get('/nasa', (req,res) =>{
        (async () => {
            try {
              url = 'https://api.nasa.gov/planetary/apod?api_key='+ process.env.api_key
              const response = await axios.get(url);
              console.log("test");
              console.log(response.data);
              res.render('nasa.ejs',{data:response.data})
            } catch (error) {
              console.log(error.response);
            }
          })();
        })
        ```
- **Search Route**
    - Creating ```/search``` route
        ```
        app.get('/search', (req,response) =>{
            res.send("<h1>Search page will be shown here.</h1>");
        })
        ```
    - Rendering Search page
        ```
        app.get('/search', (req,response) =>{
            response.render("search");
        })
        ```
    - Showing result by doing Search API call
        ```
        app.get('/search', (req,response) =>{
            if(req.originalUrl === "/search"){
                response.render("search");
                return;
            }
            
            let url = "https://en.wikipedia.org/w/api.php"
            let params = {
                action: "opensearch",
                search: req.query.person,
                limit: "1",
                namespace: "0",
                format: "json"
            }
        
            url = url + "?"
            Object.keys(params).forEach( (key) => {
                url += '&' + key + '=' + params[key]; 
            });
        
            //get wikip search string
            request(url,(err,res, body) =>{
                if(err) {
                    response.redirect('404');
                }
                result = JSON.parse(body);
                x = result[3][0];
                x = x.substring(30, x.length); 
                //get wikip json
                wikip(x , (err, final) => {
                    if (err){
                        response.redirect('404');
                    } else {
                        const answers = final;
                        const data = JSON.parse(answers);
                        data["person"]= req.query.person
                        response.render('details',{data:data}); 
                    }
                });
            });
        });
        ```

***Exercise:***
- Signup to Open AI and generate API_Key
- Creating ```/chatGPT``` route 
- Create a search box where user can type description of desired image(s)
- Use [Open AI API](https://platform.openai.com/docs/api-reference/images) to Generate Image which user types in the search box
- After completing the exercise push the Changes to your origin and then create a Pull Request to [Unicourt Workshop Repo](https://github.com/UniCourt/WebApp-Workshop1)