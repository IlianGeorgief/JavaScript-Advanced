class Request {

    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
    response = undefined;
    fulfilled = false;
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);