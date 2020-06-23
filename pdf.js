const PDFDocument = require('pdfkit');
const fs = require('fs')
const JsBarcode = require('jsbarcode')
const { createCanvas } = require("canvas")

// Código de barras
const canvas = createCanvas()
JsBarcode(canvas, "45191071869663000357550030001545061746362426", {
    displayValue: false
})

// Create a document
const doc = new PDFDocument()
doc.pipe(fs.createWriteStream('danfe.pdf'))

const espacoSuperior = 3
const espacoEsquerda = 3
const top = 20
const col = 20
const angulo = 3
const altura = 20
const modulo = 20
let lin = top

doc
    .lineWidth(0.25)

.roundedRect(col, lin, modulo * 24, altura, angulo).stroke()
    .font('Times-Roman')
    .fontSize(6)
    .text('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nihil, vel sint nemo debitis voluptatibus. Sequi libero exercitationem doloremque dolorum dolorem odit corrupti laborum error enim necessitatibus. Expedita, ipsam iure.',
        col + espacoEsquerda, lin + espacoSuperior, {
            width: modulo * 24 - espacoEsquerda,
            align: 'left'
        })

.roundedRect(modulo * 24 + col, lin, modulo * 4, altura * 2, angulo).stroke()
    .font('Times-Bold')
    .fontSize(12)
    .text('NF-e',
        modulo * 24 + col, lin + espacoSuperior, {
            width: modulo * 4 - espacoEsquerda,
            align: 'center'
        })
    .fontSize(9)
    .text('No. 000.000.000',
        modulo * 24 + col, lin + espacoSuperior + 13, {
            width: modulo * 4 - espacoEsquerda,
            align: 'center'
        })
    .fontSize(9)
    .text('Série 000',
        modulo * 24 + col, lin + espacoSuperior + 13 + 10, {
            width: modulo * 4 - espacoEsquerda,
            align: 'center'
        })

lin = top + altura
doc.roundedRect(col, lin, modulo * 4, altura, angulo).stroke()
    .font('Times-Roman')
    .fontSize(6)
    .text('DATA RECEBIMENTO', col + espacoEsquerda, lin + espacoSuperior)

.roundedRect(col + modulo * 4, lin, modulo * 20, altura, angulo).stroke()
    .font('Times-Roman')
    .fontSize(6)
    .text('IDENTIFICAÇÃO E ASSINATURA DO RECEBEDOR', col + modulo * 4 + espacoEsquerda, lin + espacoSuperior)

lin = top + altura * 2 + espacoSuperior
doc.moveTo(col, lin)
    .lineTo(modulo * 28 + col, lin)
    .lineWidth(1)
    .dash(5, { space: 10 })
    .stroke()
    .undash()
    .lineWidth(0.25)

lin = lin + espacoSuperior
doc.roundedRect(col, lin, modulo * 12, altura * 4, angulo).stroke()
    .font('Times-Roman')
    .fontSize(6)
    .text('IDENTIFICAÇÃO DO EMITENTE',
        col + espacoEsquerda, lin + espacoSuperior, {
            width: modulo * 12 - espacoEsquerda,
            align: 'center'
        })

.roundedRect(modulo * 12 + col, lin, modulo * 4, altura * 4, angulo).stroke()
    .font('Times-Roman', 14)
    .text('DANFE',
        modulo * 12 + col + espacoEsquerda, lin + espacoSuperior, {
            width: modulo * 4 - espacoEsquerda,
            align: 'center'
        })
    .font('Times-Roman', 7)
    .text('Documento Auxiliar da Nota Fiscal Eletrônica', {
        width: modulo * 4 - espacoEsquerda,
        align: 'center'
    })
    .text('0 - ENTRADA', {
        width: modulo * 4 - espacoEsquerda,
        align: 'left'
    })
    .text('1 - SAÍDA ', {
        width: modulo * 4 - espacoEsquerda,
        align: 'left'
    })
    .font('Times-Bold', 7)
    .text('Nº .000 .155 .506', {
        width: modulo * 4 - espacoEsquerda,
        align: 'center'
    })
    .text('Série 003', {
        width: modulo * 4 - espacoEsquerda,
        align: 'center'
    })
    .font('Times-Roman', 7)
    .text('Folha 1 / 1', {
        width: modulo * 4 - espacoEsquerda,
        align: 'center'
    })

.roundedRect(modulo * 12 + col + modulo + modulo + modulo / 2, lin + altura + altura / 5 * 3, 15, 15, angulo).stroke()

.roundedRect(col + modulo * 12 + modulo * 4, lin, modulo * 12, altura * 2, angulo).stroke()
    .image(canvas.toBuffer(), col + modulo * 12 + modulo * 4 + 6, lin + espacoSuperior, { width: modulo * 12 - 10, height: altura * 2 - 6 })

.roundedRect(col + modulo * 12 + modulo * 4, lin + altura * 2, modulo * 12, altura, angulo).stroke()
    .font('Times-Roman', 6)
    .text('CHAVE DE ACESSO', col + modulo * 12 + modulo * 4 + espacoEsquerda, lin + altura * 2 + espacoSuperior)

.font('Times-Bold', 9)
    .text('4519 1071 8696 6300 0357 5500 3000 1545 0617 4636 2426',
        col + modulo * 12 + modulo * 4 + espacoEsquerda, lin + altura * 2 + 10, {
            width: modulo * 12 - espacoEsquerda,
            align: 'center'
        })

.roundedRect(col + modulo * 12 + modulo * 4, lin + altura * 3, modulo * 12, altura, angulo).stroke()
    .font('Times-Roman', 7)
    .text('Consulta de autenticidade no portal nacional da NF-e www.nfe.fazenda.gov.br/portal ou no site da Sefaz Autorizadora',
        col + modulo * 12 + modulo * 4 + espacoEsquerda, lin + altura * 3 + espacoSuperior, {
            width: modulo * 12 - espacoEsquerda,
            align: 'center'
        })

lin = lin + 4 * altura
doc.roundedRect(col, lin, modulo * 16, altura, angulo).stroke()
    .font('Times-Roman', 6)
    .text('NATUREZA DA OPERAÇÃO', col + espacoEsquerda, lin + espacoSuperior)

.roundedRect(modulo * 16 + col, lin, modulo * 12, altura, angulo).stroke()
    .text('PROTOCOLO DE AUTORIZAÇÃO DE USO', modulo * 16 + col + espacoEsquerda, lin + espacoSuperior)

lin = lin + altura
doc.roundedRect(col, lin, modulo * 9, altura, angulo).stroke()
    .text('INSCRIÇÃO ESTADUAL', col + espacoEsquerda, lin + espacoSuperior)

.roundedRect(modulo * 9 + col, lin, modulo * 10, altura, angulo).stroke()
    .text('INSCRIÇÃO ESTADUAL DO SUBST. TRIBUT.', modulo * 9 + col + espacoEsquerda, lin + espacoSuperior)

.roundedRect(modulo * 9 + modulo * 10 + col, lin, modulo * 9, altura, angulo).stroke()
    .text('CNPJ', modulo * 9 + modulo * 10 + col + espacoEsquerda, lin + espacoSuperior)

lin = lin + altura
doc.font('Times-Roman', 7)
    .text('DESTINATÁRIO / REMETENTE', col + espacoEsquerda, lin + espacoSuperior)
    .font('Times-Roman', 6)

lin = lin + altura / 2
doc.roundedRect(col, lin, modulo * 17, altura, angulo).stroke()
    .text('NOME / RAZÃO SOCIAL', col + espacoEsquerda, lin + espacoSuperior)

.roundedRect(modulo * 17 + col, lin, modulo * 7, altura, angulo).stroke()
    .text('CNPJ / CPF', modulo * 17 + col + espacoEsquerda, lin + espacoSuperior)

.roundedRect(modulo * 17 + modulo * 7 + col, lin, modulo * 4, altura, angulo).stroke()
    .text('DATA DA EMISSÃO', modulo * 17 + modulo * 7 + col + espacoEsquerda, lin + espacoSuperior, {
        width: modulo * 4 - espacoEsquerda,
        align: 'left'
    })

.end()