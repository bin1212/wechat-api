var http = require('http')

const defaultConfig = {
    url:'',
    data:null,
    methods:'GET',
    encoding: 'utf-8',   // encoding-type utf-8 | gbk | ascii utf-8 is default
    headers: {},         // request headers
    timeout: 10,         // request timeout threshold (seconds)
    successFunc: function (data) {
    }, //request successfully
    errorFunc: function (data) {
    }, 
}
function request(config){
    
}

exports.request = request