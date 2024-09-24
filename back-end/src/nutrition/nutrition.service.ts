import { Injectable } from '@nestjs/common';
import { CreateNutrition } from './dto/createNutrition.dto';
import { GoogleGenerativeAI } from '@google/generative-ai';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class NutritionService {

        async create(createNutrition: CreateNutrition){

          try{    
                
            const apiKey = process.env.API_KEY 
            const genAI = new GoogleGenerativeAI(apiKey);

            const module = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const prompt = `Crie uma dieta completa para uma pessoa com nome: ${createNutrition.name} do sexo ${createNutrition.gender} com peso atual: ${createNutrition.weight}
             kg, altura: ${createNutrition.height}, idade: ${createNutrition.age} anos e com foco e objetivo em ${createNutrition.objective}, atualmente nível de atividade: ${createNutrition.level}
             e ignore qualquer outro parametro que não seja os passados, retorne em json com as respectivas propriedades, propriedade
             nome o nome da pessoa, propriedade sexo com sexo, propriedade idade, propriedade altura, propriedade peso, propriedade
             objetivo com o objetivo atual, propriedade refeições com uma array contendo dentro cada objeto sendo uma refeição da
             dieta e dentro de cada refeição a propriedade horário com horário da refeição, propriedade nome com nome e a propriedade
             alimentos com array contendo os alimentos dessa refeição e pode incluir uma propreidade como suplementos contendo
             array com sugestão de suplemento que é indicado para o sexo dessa pessoa e o objetivo dela e não retorne nenhuma
             observação alem das passadas no prompt, retorne em json e nenhuma propriedade pode ter acento.`

             const result = await module.generateContent(prompt);
             const response = await result.response;
             const text = response.text()

             if (text) {
                // Limpeza do texto para remover formatação em Markdown
                try{

                let jsonString = text.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim() 
                        
                let jsonObject = JSON.parse(jsonString)
  
                return { data: jsonObject } 
  
                }catch(err){
                        console.log(err)
                }
        }

        }catch(err){
                console.log(err)
        }

}


        async teste() {
                console.log('Olá')
              return{
                "data": {
                        "nome": "Jes",
                        "sexo": "masculino",
                        "idade": 34,
                        "altura": 1.9,
                        "peso": 107,
                        "objetivo": "muscle_gain",
                        "refeicoes": [
                                {
                                        "horario": "08:00",
                                        "nome": "Café da Manhã",
                                        "alimentos": [
                                                "2 fatias de pão integral",
                                                "2 ovos mexidos com queijo cottage",
                                                "1 banana",
                                                "200 ml de leite desnatado",
                                                "1 colher de sopa de azeite de oliva"
                                        ]
                                },
                                {
                                        "horario": "10:00",
                                        "nome": "Lanche da Manhã",
                                        "alimentos": [
                                                "1 scoop de whey protein",
                                                "1 fruta (maçã, laranja ou banana)"
                                        ]
                                },
                                {
                                        "horario": "12:00",
                                        "nome": "Almoço",
                                        "alimentos": [
                                                "150g de frango grelhado",
                                                "1 xícara de arroz integral",
                                                "1 xícara de brócolis",
                                                "1 batata doce média",
                                                "Salada verde a vontade"
                                        ]
                                },
                                {
                                        "horario": "15:00",
                                        "nome": "Lanche da Tarde",
                                        "alimentos": [
                                                "1 scoop de whey protein",
                                                "1 fatia de pão integral com 1 colher de sopa de pasta de amendoim"
                                        ]
                                },
                                {
                                        "horario": "18:00",
                                        "nome": "Jantar",
                                        "alimentos": [
                                                "150g de peixe assado",
                                                "1 xícara de batata doce cozida",
                                                "1 xícara de espinafre",
                                                "Salada verde a vontade"
                                        ]
                                },
                                {
                                        "horario": "20:00",
                                        "nome": "Lanche da Noite",
                                        "alimentos": [
                                                "1 scoop de caseína"
                                        ]
                                }
                        ],
                        "suplementos": [
                                "Whey protein",
                                "Creatina",
                                "Glutamina",
                                "BCAA"
                        ]
                }
        }
        }


}