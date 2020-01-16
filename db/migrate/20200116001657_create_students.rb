class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :name
      t.integer :effort_lvl
      t.integer :skill_lvl
      t.belongs_to :course, null: false, foreign_key: true

      t.timestamps
    end
  end
end
