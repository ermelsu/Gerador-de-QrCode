import { useState } from 'react'; //importando UseState biblioteca do react
import QRCode from 'react-qr-code'; //importando a api qr code
import QRCodeLink from 'qrcode'; // importando outra qrcode
import './App.css'; //importando css

//cria a funcao principal
function App() {
  const[link, setLink] = useState('');
  const[qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url,{
      width: 600,
      margin: 3,
    }, function(err, url){
      setQrcodeLink(url);
    })
  }

  function handleQrcode(e){
    setLink(e.target.value);
    handleGenerate(e.target.value)
  }

  return (
    <div className="container">

    <QRCode
      value={link}
    />

      <input
      className="input"
      placeholder='Digite aqui seu link...'
      value={link}
      onChange={ (e) => handleQrcode(e)}
      />

      <a className='button' href={qrcodeLink} download={`qrcode.png`}>Baixar Qr Code</a>
    </div>
  );
}

export default App;
