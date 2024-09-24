import { Module } from '@nestjs/common';
import { NutritionModule } from './nutrition/nutrition.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [NutritionModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
