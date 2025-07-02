const axios = require('axios');
const QRCode = require('qrcode');

async function fetchPixData() {
  try {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://mg.paymgbet.com/pay/paysubmit/5091?siteCode=5091&token=9bf92334f5315fb868671751478162894206274&currency=BRL&language=pt&platformType=5&amount=99.00&username=474388268&time=1751478175&currencyCode=BRL&source=web&version=4&pnt=NORMAL&mr=0&tk=9bf92334f5315fb868671751478162894206274&fp&xDevice=1-1&ld=7f770872-777f-4ea3-af8b-38d7c2f1385b&payplatformids=2220562,3960562,2310562,3240572&id=2220562&merchCode=fygjbrlpay,fygjbrlpay,brltransafepay,brlunivepay&sign=0d38903eb72509bfc1db02c21f9c9989&webUrl=mgbet.com&signKey=c896&webVersion=1751456987000',
      headers: { 
        'Cookie': '__cf_bm=wgwVfCmg8ViTyJ_WRPR6DafSTRob6PA7rX8l2WjD6ks-1751480814-1.0.1.1-R0d5e9VRcPWtj5i0gpVb3wtYCkr6iAum2EAryLfvJhiYBZBKbBS6ui6e2jAXpOd_WGza_wWOsiHd2NZYL_9YzADu2QqP3R2URLb6YTDhpdA', 
        'accept-language': 'pt', 
        'appsystem': 'Windows 11', 
        'appversion': 'v6.2.43', 
        'auth': 'faxfmknxgNPq8L2acT1It8H--1W13ocRshJFxVAoZOdy3bFjS3dJjgoTDraelNdENGy0DbiDW92Gislng4kj7VQ6v076EyEhK_t12NWfHfcvdIqu94qYLy5YrbV2rdI-E_uLEG7org6ugB7OeRVNIM-_Deo0cTL1ZLoosSLjo1UnIv_0_I7mzLQHQV6DtJXeux6MFoEQy70C1GQXBsPYSdB-EY-V2fSeTpMwYSzpVooOsoWkn4SfyBERqBGkDSZJ6iJoNKrg6a6p2fYmgd7nt2Emmh_UE2bl43HAdmHt2rxoNAKrGXvhgE-e0dotnzbEbEHJVfe0Y3EQmkUFq0N-cg', 
        'browserfingerid': '', 
        'browsertype': 'Chrome v137.0.0.0', 
        'cache': '0', 
        'clienttimezone': '-3', 
        'currency': 'BRL', 
        'device': '7f770872-777f-4ea3-af8b-38d7c2f1385b', 
        'device_id': '7f770872-777f-4ea3-af8b-38d7c2f1385b', 
        'devicebrand': 'unknown', 
        'devicemodel': 'Chrome v137.0.0.0', 
        'devicetype': '3', 
        'domain': 'mgbet.com', 
        'fingerprint': '', 
        'language': 'pt', 
        'newjwt': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3ODMwMTQxNjIsImV4dEluZm8iOnsiYnJvd3NlcmZpbmdlcmlkIjoiIiwiY2xpZW50aXAiOiIxNzcuMTkwLjIzNS4yMzQiLCJkZXZpY2UiOiI3Zjc3MDg3Mi03NzdmLTRlYTMtYWY4Yi0zOGQ3YzJmMTM4NWIiLCJkZXZpY2V0eXBlIjoiMyIsIngtZGV2aWNlIjoiMS0xIn0sInUiOiI0NzQzODgyNjgiLCJ2IjoiMTc1MTQ3ODE2MiJ9.eET6L7efZauTPZxAR9uZpOIhdtklzkalfkyi7bf0SDY', 
        'nonce': 'e2347fe1-f0b5-4d26-8d1e-4055c3c9a596', 
        'operatingsystem': 'Windows', 
        'origin': 'https://mgbet.com', 
        'physicaldevicemodel': 'unknown', 
        'platformtype': '5', 
        'priority': 'u=1, i', 
        'referer': 'https://mgbet.com/', 
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"', 
        'sec-ch-ua-mobile': '?0', 
        'sec-ch-ua-platform': '"Windows"', 
        'sec-fetch-dest': 'empty', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-site': 'cross-site', 
        'sign': 'vk7anWBYCgVyg/Qs8Q4BtDwb2MG52Tb2rGaz4UvywCGHOZtob9Oxy9tlAk3nREQe', 
        'sign-key': 'c896', 
        'sitecode': '5091', 
        'timestamp': '1751480743', 
        'token': '9bf92334f5315fb868671751478162894206274', 
        'userid': '474388268', 
        'web-version': '1751456987000', 
        'webauthndomain': 'mgbet.com', 
        'x-custom-referer': 'https://mgbet.com/', 
        'x-data-mode': 'plain', 
        'x-device': '1-1', 
        'x-object-id': '{"uid":474388268,"browserLanguage":"pt-PT","init":{"device":"","created":1751476930067,"version":1751456987000}}', 
        'x-request-id': 'e2347fe1-f0b5-4d26-8d1e-4055c3c9a596', 
        'x-version': '6.2.43'
      }
    };
    
   const response = await axios.request(config)
    
      if (!response.data.success) throw new Error('Resposta da API não foi sucesso');
    
      // const pixTitle = response.data.data.qrCode;
      const pixPayload = response.data.data.qrCode;
    
      if (!pixPayload) throw new Error('Payload PIX não encontrado');
    
      const qrCodeBase64 = await QRCode.toDataURL(pixPayload);
    
      // console.log({ pixTitle: pixPayload, imgBase64: qrCodeBase64 })
      return { pixTitle: pixPayload, imgBase64: qrCodeBase64 };
  } catch (error) {
    console.error('Erro:', error.message);
    if (error.response) console.error('Resposta da API:', error.response.data);
    throw error;
  }
}


// fetchPixData()
//   .then((a) => {
    
//     console.log('QR Code Base64:', a);
//   })
//   .catch(console.error);

module.exports = fetchPixData