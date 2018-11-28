import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({ name: 'ipads' })
export class Ipad extends BaseEntity {

  @PrimaryGeneratedColumn()
  id = undefined

  @Column({
    type: 'varchar',
    name: 'asset_number'
  })
  assetNumber = ''

  @Column({
    type: 'varchar',
    name: 'ipad_model'
  })
  ipadModel = ''

  @Column({
    type: 'varchar',
    name: 'ios_version'
  })
  iosVersion = ''
}
