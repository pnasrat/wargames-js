## Notes on what I learned doing this

* `node debug node_modules/karma/bin/karma start`
* Added breakpoint in  `node_modules/karma/bin/karma:3`
```
 curl -v http://127.0.0.1:5858/
*   Trying 127.0.0.1...
* Connected to 127.0.0.1 (127.0.0.1) port 5858 (#0)
> GET / HTTP/1.1
> Host: 127.0.0.1:5858
> User-Agent: curl/7.43.0
> Accept: */*
>
Type: connect
V8-Version: 4.6.85.31
Protocol-Version: 1
Embedding-Host: node v5.9.1
Content-Length: 0
```
* `this.parent.__karma__.files`
* karma runs on http://localhost:9876/