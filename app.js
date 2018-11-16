  function switchLanguage(value){
      console.log('value',value)
      if(value === 'zh_cn'){
          location.href="/index.html"
      }
      if(value === 'en'){
          location.href="/index_en.html"
      }
      if(value === 'zh_cn_traditional'){
          location.href="/index_zh_cn_traditional.html"
      }
  }
  $(document).ready(function() {
    const userAgentInfo = navigator.userAgent;
    const isAndroid = userAgentInfo.indexOf('Android') > -1 || userAgentInfo.indexOf('Adr') > -1; //android终端
    const isiOS = !!userAgentInfo.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (!isAndroid && !isiOS) {
        $('#qrcode').qrcode({
            render: "canvas",
            width: 100,
            height: 100,
            text: encodeURI(window.location.href)
        });
        $('#qrcode2').qrcode({
            render: "canvas",
            width: 100,
            height: 100,
            text: encodeURI("https://play.google.com/store/apps/details?id=leaf.prod.app")
        });
        $('#qrcode3').qrcode({
            render: "canvas",
            width: 100,
            height: 100,
            text: encodeURI("https://shouji.baidu.com/software/25094493.html")
        });
        $('#qrcode4').qrcode({
            render: "canvas",
            width: 100,
            height: 100,
            text: encodeURI(window.location.href)
        });
        $('#qrcode5').qrcode({
            render: "canvas",
            width: 100,
            height: 100,
            text: encodeURI("https://play.google.com/store/apps/details?id=leaf.prod.app")
        });
        $('#qrcode6').qrcode({
            render: "canvas",
            width: 100,
            height: 100,
            text: encodeURI("https://shouji.baidu.com/software/25094493.html")
        });
        $('#ios-download').hide();
        $('#ios-download2').hide();
        $('#an-download').hide();
        $('#an-download2').hide();
        $('#an-download3').hide();
        $('#an-download4').hide();
    } else if (isiOS) {
        $('#qrcode').hide();
        $('#qrcode2').hide();
        $('#qrcode3').hide();
        $('#qrcode4').hide();
        $('#qrcode5').hide();
        $('#qrcode6').hide();
        $('#an-download').hide();
        $('#an-download2').hide();
        $('#an-download3').hide();
        $('#an-download4').hide();
        const reg = new RegExp("(^|&)cityPartner=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        const r = window.location.search.substr(1).match(reg);  //匹配目标参数if
        if(r) {
            jQuery.ajax({
                'type': 'POST',
                'url': "https://relay1.loopring.io/city_partner/add_customer/" + decodeURI(r[2]),
                'contentType': 'application/json',
                'dataType': 'json',
                'success': function (data, status) {
                    if (data.result) {
                        $('#code').val(data.result)
                    }
                }
            });
        }
    }else if(isAndroid){
        $('#ios-download').hide();
        $('#ios-download2').hide();
        $('#qrcode').hide();
        $('#qrcode2').hide();
        $('#qrcode3').hide();
        $('#qrcode4').hide();
        $('#qrcode5').hide();
        $('#qrcode6').hide();
        const reg = new RegExp("(^|&)cityPartner=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        const r = window.location.search.substr(1).match(reg);  //匹配目标参数if
        if(r) {
            jQuery.ajax({
                'type': 'POST',
                'url': "https://relay1.loopring.io/city_partner/add_customer/" + decodeURI(r[2]),
                'contentType': 'application/json',
                'dataType': 'json',
                'success': function (data, status) {
                    if (data.result) {
                        $('#code').val(data.result)
                    }
                }
            });
        }
    }

    document.getElementById('switchLanguage').onchange = function(){
        if(this.value === 'zh_cn'){
            location.href="/index.html"
        }
        if(this.value === 'en'){
            location.href="/index_en.html"
        }
        if(this.value === 'cn'){
            location.href="/index_cn.html"
        }
    }
})
