
$(function(){

    const person = {
        name: 'Lily',
        like: 'noodles',
    }
    Object.keys(person).forEach(function (key) {
        $(`[data-set = "${key}"]`).text(person[key]);
    });

    //jQuery ajax
    $.ajax({
        url:'https://randomuser.me/api/',
        dataType:'json',
        success: function(data){
            const result = data.results[0];
            console.log(result);
            const person = {
                name: `${result.name.first} ${result.name.last}`, //OR result.name.first + result.name.last,
                email: result.email,
                tel: result.phone,
                img: result.picture.large
            }
            Object.keys(person).forEach(function (key) {
                $(`[data-set = "${key}"]`).text(person[key]);
            });
            $('[data-set="img"]').attr('src', person.img);        
        }
    });

//tool jQuery quick API references

    //事件监听（事件监听的类型，要做的事)
    $('#addAnimate').on('click', function(){
        $('.block').toggleClass('animate__animated animate__swing');
    });
    //监听block，动完之后移除class
    $('.block').on('animationed',function(){
        $('.block').removeClass('animate__animated animate__swing');
    });

    $('#hideButton').on('click', function(){
        //目标元素hide block
        $('.block').hide();//$('.block').toggle();  
    });
    
    $('#slideButton').on('click', function(){
        //滑动slide 如何展开收合一个元素
        $('.block').slideToggle();
    });

    $('#classToggle').on('click', function(){
        $('.block').toggleClass('bg-purple');
    });

    //animate.css

});

