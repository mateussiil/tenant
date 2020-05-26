export default function foneMask(value){
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{2})/, '($1) ') // captura 1 grupo de numero, o primeiro de 2 apos capturar  ele adiciona,  um ()
        .replace(/(\d{5})/, '$1 -')
        .replace(/(\d{4})+?$/, ' $1')
}