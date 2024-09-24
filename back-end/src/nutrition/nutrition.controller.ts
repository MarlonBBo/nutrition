import { Body, Controller, Get, Post } from '@nestjs/common';
import { NutritionService } from './nutrition.service';
import { CreateNutrition } from './dto/createNutrition.dto';
import { plainToClass } from 'class-transformer';


@Controller('nutrition')
export class NutritionController {
    constructor(private readonly nutritionServer: NutritionService){}


    @Post()
    async create(@Body() createNutrition: CreateNutrition){
        const nutritionData = plainToClass( CreateNutrition, createNutrition);
        return this.nutritionServer.create(nutritionData)
    }

    @Get('/teste')
    async teste(){
        return this.nutritionServer.teste()
    }
}
