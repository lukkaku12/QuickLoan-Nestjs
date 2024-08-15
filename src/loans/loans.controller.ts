/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LoansService } from './loans.service';

@Controller('loans')
export class LoansController {
    constructor(private readonly loansService: LoansService) {}
  // @Post()
  // createLoan(@Body() createLoanDto: any) {
  //     return 'loan created'
  // }
  @Post()
  createLoan(@Body() createLoanDto: any) {
    return `Loan created for ${createLoanDto.userId}`;
  }

  @Get(':id')
  getLoanStatus(@Param('id') id: string) {
    const risk = this.loansService.calculateLoanRisk({ creditScore: 650 }); // Ejemplo de uso del servicio
    return `Status of loan ${id} with risk level: ${risk}`;
  }
}
