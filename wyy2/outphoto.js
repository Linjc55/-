window.addEventListener('load',function(){
    
ajax({
    type: 'get',
    url: 'https://mock.mengxuegu.com/mock/6034ddb2ca363222f3d578f2/example/swiper',
    success: function(data){
        var imgs = document.querySelector('.imgs');
        console.log(data);
        //
        var datae = eval('(' + data + ')');
        var str = [];
        str = datae.data;
        for(var i= 0 ; i< str.length;i++){
            var lis = document.createElement('li');
            imgs.appendChild(lis);
            imgs.children[i].innerHTML = '<a href="#"><img src="" alt=""></a>'; 
        }
        var img = document.querySelectorAll('img');
        for(var i = 0;i < str.length;i++){
            console.log(str[i].url);
            img[i].src = str[i].url;
        }
        var li = imgs.querySelectorAll('li');
        var num = ['one','two','three','four','five','six'];
        for(var i = 0;i < li.length;i++){
            li[i].className = num[i];
            console.log(li[i].className);
        }
        
    },
    error: function(){
        console.log(22);
    }
})

})
/*  */