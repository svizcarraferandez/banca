import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionCreateModule } from './transaction-create/transaction-create.module';
import { TransactionRetrieveModule } from './transaction-retrieve/transaction-retrieve.module';
import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionTypeModule } from './transaction-type/transaction-type.module';
import { TransactionStatusModule } from './transaction-status/transaction-status.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type:'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true,
      autoLoadEntities: true,
    })
    ,TransactionCreateModule, TransactionRetrieveModule, ClientModule, AuthModule, SharedModule, TransactionTypeModule, TransactionStatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
