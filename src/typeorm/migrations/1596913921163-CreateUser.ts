import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1596913921163 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tb_user',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    default: 'uuid_generate_v4()',
                    generationStrategy: 'uuid'
                }, {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true
                }, {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_user');
    }

}
