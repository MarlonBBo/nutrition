import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

enum Level {
    Sedentary = 'Sedentário',
    LittleActive = 'Levemente ativo (exercícios 1 a 3 vezes na semana)',
    Active = 'Moderadamente ativo (exercícios 3 a 5 vezes na semana)',
    VeryActive = 'Altamente ativo (exercícios 5 a 7 dia por semana)'
}

enum Objective {
    WeightLoss = 'emagrecer',
    Hypertrophy = 'Hipertrofia',
    HypertrophyDefinition = 'Hipertrofia e Definição',
    Definition = 'Definição'
}

export class CreateNutrition {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    age: string;

    @IsNotEmpty()
    @IsString()
    gender: string;

    @IsNotEmpty()
    @IsString()
    height: string;

    @IsNotEmpty()
    @IsEnum(Level)
    level: Level;

    @IsNotEmpty()
    @IsEnum(Objective)
    objective: Objective;

    @IsNotEmpty()
    @IsString()
    weight: string

}