  function init()
    {
        verticalAlign();
        menuClick();
    }


    function verticalAlign()
    {
        var timeout;
        $(window).on('resize', function(){
            function set()
            {
                $('#menu,.blue-warp,.lineheight-center').each(function(){
                    var $this = $(this);
                    $this.css('lineHeight', 'normal');
                    $this.css('lineHeight', $this.height()+'px');
                });
                // $('#menu').each(function(){
                //     var $this = $(this);
                //     $this.css('lineHeight', 'normal');
                //     $this.css('lineHeight', $this.height()+'px');
                // });
            }
            set();
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function(){
                set();
            }, 50);
        }).trigger('resize');
    }
    function menuClick(){
      $('#menuButtonClose').click(function(){
        $('#menu').fadeOut();
        $(this).fadeOut()
      });
      $('#menuButton').click(function(){
        $('#menu').fadeIn();
        $('#menuButtonClose').fadeIn()
      });
      $('#inner-logo').click(function(){
        window.location.href='index.html'
      })
    }
