import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/databases/database.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
