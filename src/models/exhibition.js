import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import {Presentation} from './presentation'

@Entity({ name: 'exhibitions' })
export class Exhibition extends BaseEntity {

  @PrimaryGeneratedColumn()
  id = undefined

  @Column({
    type: 'varchar',
    name: 'name'
  })
  name = ''

  @Column({
    type: 'date',
    name: 'start_date'
  })
  startDate = undefined

  @Column({
    type: 'date',
    name: 'end_date'
  })
  endDate = undefined

  @OneToMany(type => Presentation, presentation => presentation.exhibition)
  presentations = undefined
}
