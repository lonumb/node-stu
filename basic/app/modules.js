
module.exports = function(request,response){
    
    console.log(require.main);

    response.sendContent('111');
}
