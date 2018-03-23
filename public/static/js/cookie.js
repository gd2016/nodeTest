/*
* @Author: Marte
* @Date:   2017-06-23 10:56:09
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-23 14:16:24
*/

function setCookie(name,value,expires){
    var d=new Date();
    d.setDate(d.getDate()+expires);
    document.cookie=name+'='+value+';expires='+d;
}
function removeCookie(name){
    setCookie(name,'',-1);
}
function getCookie(name){

    var str=document.cookie;
    var arr=str.split('; ');
    for(var i=0; i<arr.length; i++){
        var arr2=[];
        arr2=arr[i].split('=');

        if(arr2[0]==name){

            return arr2[1];
        }
    }
    return '';
}