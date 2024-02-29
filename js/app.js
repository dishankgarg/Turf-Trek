$(document).ready(function()
{
    $(window).on('scroll',function()
    {
        var scrol = $(window).scrollTop();
        if(scrol >= 20)
        {
            $(".sticky").addClass("stickadd");
        }
        else
        {
            $(".sticky").removeClass("stickadd");
        }
    })
})


var typed = new Typed('#element', {
    strings: ['Dishank Garg!',
    'Developer!',
    'Coder!'],
   
    typeSpeed: 150,
    backSpeed: 50,
    loop : true,
    loopCount:Infinity,
    backDelay: 400,
  });

  