var order=function(){function o(e){let t=[];var n=sessionStorage.getItem("pinCode");if(n){t=JSON.parse(n),e.bind.empty();for(var o=1;o<=t.length;o++)e.bind.append(t[o-1])}}return{load:o,remove:function(e){let t=[];var n=sessionStorage.getItem("order");n&&(t=JSON.parse(n),0<t.length&&(t.pop(),sessionStorage.setItem("order",JSON.stringify(t)))),o(e)},push:function(e){let t=[];var n=sessionStorage.getItem("order");n&&(t=JSON.parse(n)),t.length<4&&(t.push(e.th.data().pin),sessionStorage.setItem("order",JSON.stringify(t))),o(e)}}}(),pin=function(){let o=function(e){let t=[];var n=localStorage.getItem("pinCode");if(n){t=JSON.parse(n),e.bind.empty();for(var o=1;o<=t.length;o++)e.bind.append("<span class='items'>"+t[o-1]+"</span>")}var r=4-t.length;if(0!=r)for(o=0;o<r;o++)e.bind.append("<span class='items'></span>")};return{load:o,push:function(e){let t=[];var n=localStorage.getItem("pinCode");n&&(t=JSON.parse(n)),t.length<4&&(t.push(e.th.data().pin),localStorage.setItem("pinCode",JSON.stringify(t))),4===t.length&&(window.location.href=location.origin+"/profile"),o(e)},remove:function(e){let t=[];var n=localStorage.getItem("pinCode");n&&(t=JSON.parse(n),e.bind.empty(),0<t.length&&(t.pop(),localStorage.setItem("pinCode",JSON.stringify(t))),o(e))}}}();