import Script from 'next/script'

export default function ChatBotScript() {
  return (
    <Script id="tawk">
      {`window.$crisp=[];window.CRISP_WEBSITE_ID="e00fb5d9-9eef-4a5c-910b-832413561ac1";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
    </Script>
  )
}
