import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from 'typeorm'
import {Ipad} from './ipad'
import {Exhibition} from './exhibition'

@Entity({ name: 'presentations' })
export class Presentation extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id = undefined

  @Column({
    type: 'text',
    name: 'description'
  })
  description = ''

  @ManyToOne(type => Ipad, ipad => ipad.presentation)
  @JoinColumn()
  ipad = undefined

  @ManyToOne(type => Exhibition, exhibition => exhibition.presentations)
  exhibition = undefined

}