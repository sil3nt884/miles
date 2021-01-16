To run or test the project please run these following commands 


### `npm i`
### `npm start`
### `npm test`
### `npm run build`

### Extra libs:

react-router-dom,history,react-router

react-router-dom - used to allow routing of pages.
history,react-router - used in this testing the rendering of pages.

Time taken 1 - 2 hours 


Sometimes a cors error is thrown within the browsers this stops the first fetch request from happening.
This seems to be a  response header set on the server side.  - not too sure if this was something done on purpose.

my ideal solution would have been to attempt to send fetch request X amount of times and then fail and stop if 
the request broke the threshold, as I do not think that we should keep on sending the request multiple
times. - cors headers are usually set to prevent unauthorized origins to request  the page/api.



