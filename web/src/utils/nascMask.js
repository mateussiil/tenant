export default function nascMask(value){
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{2})(\d)/, '$1/$2') // captura 2 grupo de numero, o primeiro de 2 apos capturar adiciona / o segundo de 2
        .replace(/(\d{2})(\d)/, '$1/$2') // captura 2 grupo de numero, o primeiro de 2 apos capturar adiciona / o segundo de 2
        .replace(/(\d{4})+?$/, '$1') // captura 1 grupo de numero, o primeiro de 2 apos capturar  ele adiciona um ()
}