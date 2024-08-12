import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async list() {
    return await this.prisma.notification.findMany();
  }

  @Post()
  async create() {
    await this.prisma.notification.create({
      data: {
        content: 'You have a new friendship request',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}
