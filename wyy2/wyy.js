    
ajax({
    type: 'get',
    url: 'https://mock.mengxuegu.com/mock/6034ddb2ca363222f3d578f2/example/swiper',
    success: function(data){
        //获取图片
        //转化为对象
        var datae = eval('(' + data + ')');
        var imgs = document.querySelector('.imgs');
        var str = [];
        str = datae.data;
        //创建li并添加img
        for(var i= 0 ; i< str.length;i++){
            var lis = document.createElement('li');
            imgs.appendChild(lis);
            imgs.children[i].innerHTML = '<a href="#"><img src="" alt=""></a>'; 
        }
        //给img添加url
        var img = document.querySelectorAll('img');
        for(var i = 0;i < str.length;i++){
            console.log(str[i].url);
            img[i].src = str[i].url;
        }
        var li = imgs.querySelectorAll('li');
        //给li添加类名
        var num = ['one','two','three','four','five','six'];
        for(var i = 0;i < li.length;i++){
            li[i].className = num[i];
            console.log(li[i].className);
        }
        //获取元素
        var leftb = document.querySelector('.left');
        var rightb = document.querySelector('.right');
        var box = document.querySelector('.box');
        var imgs = box.querySelector('.imgs');   
        var imgt = imgs.querySelectorAll('li');
        //自动翻页函数
        var timeone = setInterval(function(){
            rightf();
        },1000);
        //左右按钮的出现
        box.addEventListener('mouseover',function(){
            leftb.style.display = 'block';
            rightb.style.display = 'block';
            //移入时清除定时器
            clearInterval(timeone);
            timeone = null;       
        })
        
        //左右按钮的消失
        box.addEventListener('mouseout',function(){
                leftb.style.display = 'none';
                rightb.style.display = 'none';
                //恢复定时器
                clearInterval(timeone);
                timeone = setInterval(function(){
                rightf();
            },1000)
            })
        //动态生成小圆圈，小圈圈模块
        var list = box.querySelector('.list');
        for(var i = 0;i < imgs.children.length;i++){
            //创建li，加入ul中
            var li =document.createElement('li');
            list.appendChild(li);
            //给小圈圈添加类名
            li.setAttribute('index',i);
            //排他思想，实现点击小圆圈，变色
            li.addEventListener('click',colors);
            //经过小圆圈，切换图片
            li.addEventListener('mouseenter',jump);
        }
        //一开始第二个亮
        list.children[1].className = 'change';
        //变色函数 
        function colors(){
            //把所有的小圆圈变白
            for(var i = 0 ; i < list.children.length ; i++){
                list.children[i].className = '';
            }
            //给图片对应的小圆圈上色
            var index = this.getAttribute('index');
            list.children[index].className = 'change';
        } 
        //跳转函数
        function jump(){
            var index = this.getAttribute('index');
            var now = num.indexOf('two');
            //计算经过点与当前点的距离
            var dif = Math.max(index,now) - Math.min(index,now);
            // console.log(dis);
            if(index > now){
                while(dif--){
                    rightf();
                }
            }else {
                while(dif--){
                    leftf();
                }
            }
        }
        //小圆圈跟随着图片移动
        var j = 1;
        function colort (){
            for(var i = 0 ; i < list.children.length ; i++){
                list.children[i].className = '';
            }
            if(j >= list.children.length){
                j = 0;
            }else if (j < 0 ){
                j = list.children.length - 1;
            }
            list.children[j].className = 'change';
        }
        //翻页模块
        var num = ['one','two','three','four','five','six'];
        //右翻页
            rightb.addEventListener('click',rightf);
            function rightf(){
                var nums = num.length-1;
                //把数组的最后一个添加到第一个
                num.unshift(num[nums]);
                //删除最后一个
                num.pop();
                //重新给li添加类名
                for(var i = 0;i < num.length;i++){
                    imgt[i].setAttribute('class',num[i]);
                }
                //通过这个全局变量来让小圆圈的颜色一起变化
                j++;
                colort();
            }
        //左翻页
            leftb.addEventListener('click',leftf)
            function leftf(){
                num.push(num[0]);
                num.shift();
                for(var i = 0;i < num.length;i++){
                    imgt[i].setAttribute('class',num[i]);
                }
                j--;
                colort();
            }
        //点击图片实现翻页,这里我是通过在左右两边添加一个盒子来实现的
            var rights = document.querySelector('.rights');
            rights.addEventListener('click',function(){
                rightf();
            })
            var lefts = document.querySelector('.lefts');
            lefts.addEventListener('click',function(){
                leftf();
            })

    },
    error: function(){
        console.log(22);
    }
})




