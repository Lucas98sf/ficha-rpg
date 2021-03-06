import mongoose, { Schema } from 'mongoose';

const NpcSchema = new Schema({
    Imagens:{
        Imagem1: { type: String },
        Imagem2: { type: String },
        Imagem3: { type: String },
        Imagem4: { type: String },
        Imagem5: { type: String },
        Imagem6: { type: String },
        Imagem7: { type: String },
        Imagem8: { type: String },
        Imagem9: { type: String },
    },
    Cor: { type: String },
    Nome: { type: String, required: true, trim: true, unique: true },
    Raça: { type: String, required: true, trim: true },
    Perícias: {
        Físico: {
            Arremessar: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Briga: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Escalar: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Esquivar: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Furtividade: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Nadar: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Saltar: { type: Number, default: 1, required: true, min: 1, max: 19 },
        },
        Ciências: {
            Arqueologia: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Astronomia: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Biologia: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Química: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Farmácia: { type: Number, default: 1, required: true, min: 1, max: 19 },
            'Analisar Espécie': { type: Number, default: 1, required: true, min: 1, max: 19 },
            Medicina: { type: Number, default: 1, required: true, min: 1, max: 19 },
        },
        Geral: {
            Artes: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Cultura: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Política: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Finanças: { type: Number, default: 1, required: true, min: 1, max: 19 },
            História: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Línguas: { type: Number, default: 1, required: true, min: 1, max: 19 },
        },
        Tecnologia: {
            'Tecnologia Cultural': { type: Number, default: 1, required: true, min: 1, max: 19 },
            Craft: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Navegação: { type: Number, default: 1, required: true, min: 1, max: 19 },
            'Reparação Elétrica': { type: Number, default: 1, required: true, min: 1, max: 19 },
            'Reparação Mecânica': { type: Number, default: 1, required: true, min: 1, max: 19 },
            LockPick: { type: Number, default: 1, required: true, min: 1, max: 19 },
        },
        Sociais: {
            Barganha: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Intimidar: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Lábia: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Persuasão: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Psicologia: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Charme: { type: Number, default: 1, required: true, min: 1, max: 19 },
        },
        Armas: {
            'Corpo a Corpo': { type: Number, default: 1, required: true, min: 1, max: 19 },
            Pistolas: { type: Number, default: 1, required: true, min: 1, max: 19 },
            'Rifles de Assalto': { type: Number, default: 1, required: true, min: 1, max: 19 },
            Snipers: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Shotguns: { type: Number, default: 1, required: true, min: 1, max: 19 },
        },
        Percepção: {
            Intuição: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Escutar: { type: Number, default: 1, required: true, min: 1, max: 19 },
            Encontrar: { type: Number, default: 1, required: true, min: 1, max: 19 },
        }
    },
    Atributos: {
        FOR: { type: Number, default: 1, required: true, min: 1, max: 19 },
        CON: { type: Number, default: 1, required: true, min: 1, max: 19 },
        DES: { type: Number, default: 1, required: true, min: 1, max: 19 },
        INT: { type: Number, default: 1, required: true, min: 1, max: 19 },
        TAM: { type: Number, default: 1, required: true, min: 1, max: 19 },
        POW: { type: Number, default: 1, required: true, min: 1, max: 19 },
        APA: { type: Number, default: 1, required: true, min: 1, max: 19 },
        SOR: { type: Number, default: 1, required: true, min: 1, max: 19 },
    },
    Resistências: {
        Perfurante: { type: String, default: "0", required: true },
        Corte: { type: String, default: "0", required: true },
        Brusco: { type: String, default: "0", required: true },
        Elemental: { type: String, default: "0", required: true },
        Veneno: { type: String, default: "0", required: true },
        Morte: { type: String, default: "0", required: true },
        Magia: { type: String, default: "0", required: true },
    },
    Status:
    {
        PV:{
            'VidaAtual': { type: Number, default: 0, required: true, min: 0, max: 999 },
            'VidaMáxima': { type: Number, default: 0, required: true, min: 0, max: 999 },
        },
        PS:{
            'SanidadeAtual': { type: Number, default: 0, required: true, min: 0, max: 999 },
            'SanidadeMáxima': { type: Number, default: 0, required: true, min: 0, max: 999 },
        },
        PM:{
            'MagiaAtual': { type: Number, default: 0, required: true, min: 0, max: 999 },
            'MagiaMáxima': { type: Number, default: 0, required: true, min: 0, max: 999 },
        },
    },
    Anotações: { type: String, default: ' ', required: true },
    Lins: { type: Number, default: 0, required: true },
    Exp: { type: Number, default: 0, required: true },
    Conexões: { type: [String], default: [], required: true },
    Itens: {
        type: [
            {
                ID: { type: Number, required: true },
                Quantidade: { type: Number, default: 1, min: 1, required: true }
            },
        ],
        default: []
    },
    Habilidades: {
        type: [
            {
                ID: { type: Number, required: true },
            },
        ],
        default: []
    }
});

const Npc = mongoose.models.Npc || mongoose.model('Npc', NpcSchema, 'npcs');

export default Npc;