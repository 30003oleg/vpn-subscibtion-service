import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
        .setTitle('VPN Subscriptions service')
        .setDescription('This service is a main part of our VPS-as-a-service app')
        .setVersion('1.0.0')
        .addTag('FCK_PTN')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
    await app.listen(PORT, () => {
        console.log('START', PORT);
    });
}
await start();
//# sourceMappingURL=main.js.map