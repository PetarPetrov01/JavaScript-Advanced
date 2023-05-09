function validate(obj) {

    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT']
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    if (!validMethods.includes(obj['method'])) {
        throw new Error('Invalid request header: Invalid Method')
    }

    if (!obj.hasOwnProperty('uri') || obj['uri'].match(/^[\w.*]+$/) == null) {
        throw new Error('Invalid request header: Invalid URI')
    }

    if (!validVersions.includes(obj['version'])) {
        throw new Error('Invalid request header: Invalid Version')
    }

    if (!obj.hasOwnProperty('message') || obj['message'].match(/^[^<>\\&'"]*$/) == null) {
        throw new Error('Invalid request header: Invalid Message')
    }

    return obj
}

let input = {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  }
  
  
console.log(validate(input))
