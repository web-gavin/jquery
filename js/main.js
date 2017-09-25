//placeholder for ie8
$(function(){
    $('input, textarea').placeholder();
    dropSelect();
});
//重置搜索表单
function resetFilter(){
    $(".search-form").find('select').prop('selectedIndex', 0);
    $(".search-form").find('input[type=text]').val("");
    $(".search-form").find('textarea').val("");
    $(".drop-select").each(function(index, el) {
        var defaultText = $(this).attr('data-placeholder');
        $(this).next('.chosen-container').find('.chosen-single').addClass('chosen-default');
        $(this).next('.chosen-container').find('.chosen-single span').text(defaultText);
    });
}
//下拉框筛选
function dropSelect(){
    $('.drop-select').chosen({
        disable_search_threshold: 6 //少于 6 项时隐藏搜索框
    });
}
//form-not-null
function formNotNull(){
    $(".alert-form-view").find(".form-not-null").on('input propertychange', function() {
        $('.alert-form-view').find('.form-not-null').each(function(index, el) {
            var checkInput = $(this).val();
            if(checkInput == ""){
                $(".layui-layer").find('.layui-layer-btn0').addClass('disabled');
            }else{
                $(".layui-layer").find('.layui-layer-btn0').removeClass('disabled');
            }
        })
    })
}

function checkemail(email) {
    var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(email.match(reg) != null) {
        return true;
    } else {
        return false;
    }
}
function checkmobile(mobile) {
    var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if(mobile.match(reg) != null) {
        return true;
    } else {
        return false;
    }
}

(function ($) {
    $.fn.getStyleObject = function () {
        var dom = this.get(0);
        var style;
        var returns = {};
        if (window.getComputedStyle) {
            var camelize = function (a, b) {
                return b.toUpperCase();
            };
            style = window.getComputedStyle(dom, null);
            for (var i = 0, l = style.length; i < l; i++) {
                var prop = style[i];
                var camel = prop.replace(/\-([a-z])/, camelize);
                var val = style.getPropertyValue(prop);
                returns[camel] = val;
            }
            return returns;
        }
        if (style = dom.currentStyle) {
            for (var prop in style) {
                returns[prop] = style[prop];
            }
            return returns;
        }
        if (style = dom.style) {
            for (var prop in style) {
                if (typeof style[prop] != 'function') {
                    returns[prop] = style[prop];
                }
            }
            return returns;
        }
        return returns;
    }
})(jQuery);