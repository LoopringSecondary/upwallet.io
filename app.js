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
    if (!isAndroid || !isiOS) {
        $('#qrcode').qrcode({
            render: "canvas",
            width: 150,
            height: 150,
            text: encodeURI(window.location.href)
        });
        $('#qrcode2').qrcode({
            render: "canvas",
            width: 150,
            height: 150,
            text: encodeURI(window.location.href)
        });
        $('#iosdownload').hide();
        $('#iosdownload2').hide();
    } else if (isiOS) {
        $('#qrcode').hide();
        $('#qrcode2').hide();
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
        console.log('this.value',this.lvalue)
        if(this.value === 'zh_cn'){
            location.href="/index.html"
        }
        if(this.value === 'en'){
            location.href="/index_en.html"
        }
        if(this.value === 'zh_traditional'){
            location.href="/index_zh_traditional.html"
        }
    }
})