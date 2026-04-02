import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { FinanceModule } from './modules/finance/finance.module';
import { HrModule } from './modules/hr/hr.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [CoreModule, InventoryModule, FinanceModule, HrModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
