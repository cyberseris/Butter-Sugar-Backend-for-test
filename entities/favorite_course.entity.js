const { EntitySchema } = require('typeorm')

module.exports = new EntitySchema({
  name: 'favorite_course', // 實體的名稱
  tableName: 'favorite_course', // 對應的資料表名稱
  columns: {
        id: {
        primary: true, // 設定為主鍵
        type: 'uuid', // 資料型別為 UUID
        generated: 'uuid', // 設定為 UUID 自動生成
        },
        user_id: {
            type: 'uuid',
            nullable: false,
        },
        course_id: {
            type: 'uuid',
            nullable: false,
        },
        created_at: {
            type: 'timestamp',
            createDate: true,
        },
        updated_at: {
            type: 'timestamp',
            updateDate: true,
        }
    },
    relations: {
        user: {
            target: 'users',
            type: 'many-to-one',
            inverseSide: 'carts',
            joinColumn: {
                name: 'user_id',
                referencedColumnName: 'id',
                foreignKeyConstraintName: 'carts_users_id_fk'
            }
        },
        course: {
            target: 'courses', // 對應類別的實體
            type: 'many-to-one', // 多個評價對應一個課程
            inverseSide: 'ratings',
            joinColumn: { 
                name: 'course_id',
                referencedColumnName: 'id', 
                foreignKeyConstraintName: 'ratings_courses_id_fk'
            }
        }
    }
})
