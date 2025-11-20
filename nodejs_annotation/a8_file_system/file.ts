import { readFile, unlink, writeFile } from "fs/promises";

const escreverTexto = async () => {
    console.log('Escrevendo no arquivo...');
    
    const fileName = './teste.txt';

    const list = ['John Doe', 'Maria Green', 'Bob Brown'];
    const listTxt = list.join('\n');
    
    await writeFile(fileName,listTxt);

    console.log('Pronto')
}

const lerTexto = async () => {
    console.log('Lendo o arquivo...');

    const fileName = './teste.txt';

    const listText = await readFile(fileName,{encoding:'utf8'});
    const list = listText.split('\n');
    console.log(list);
    console.log('Pronto');
}

const alterandoArquivo = async () => {
    console.log('Alterando Arquivo...');
    
    const fileName = './teste.txt';

    const fileContent = await readFile(fileName,{encoding:'utf8'})
    if(fileContent.length == 0) {
        console.log('Arquivo Vazio !');
        return
    }

    const list = fileContent.split('\n');
    list.push('Jully','Luna');
    
    const listText = list.join('\n')
    await writeFile(fileName,listText,{encoding:'utf8'});
    console.log('Pronto');
}

const deletandoArquivo = async () => {
    console.log('Deletando Arquivo...')

    const fileName = './teste.txt';
    
    await unlink(fileName);

    console.log('Pronto');

}

escreverTexto();
// lerTexto();
// alterandoArquivo();
// deletandoArquivo();
