import { Entity, PrimaryGeneratedColumn } from 'typeorm';

import { BaseEntity } from './base.model';

@Entity('employees')
class Employee extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;
}

export default Employee;
