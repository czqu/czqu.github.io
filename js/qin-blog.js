//判断国内国外 
var is_global=false;
var websiteurl = window.parent.location.href.toLowerCase();

var websitedomaintemp = new Array();
websitedomaintemp =websiteurl.split("/");
var websitedomain = websitedomaintemp[2];

switch (websitedomain) {
    case "blog.xiyuan.ren":
    is_global=false;
    break;
    case "blog.czqu.ren":
    is_global=false;
    break;
    
    case "czqu.xyz":
    is_global=true;
    break;
    case "czqu.cc":
    is_global=true;
    break;

    case "qinh.ren":
    is_global=true;
    break;

    case "www.qinh.ren":
    is_global=true;
    break; 
    
    default:
    is_global=false;
    break;
}

function replacedomain(str1,str2,str3)
{ //str1为母字符串，str2为要替换的。str3为替换成的
    var k
    var tmp = str1.split(str2)
    k=tmp[0]
    for(i=1;i<tmp.length;i++){
        k+=str3+tmp[i]
    }
    return k
}
