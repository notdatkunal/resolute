import { constants } from './constants'

// this function would create a final url for an API
// const registerUrl = createUrl('/user/register')
// const registerUrl = 'http://localhost:3000' + '/user/register'
// const registerUrl = 'http://localhost:3000/user/register'
export function createUrl(path) {
  return constants.serverUrl + path
}

// use the logging on console by default
export function log(message) {
  console.log(message)
}



export function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  var bb = new Blob([ab]);
  return bb;
}