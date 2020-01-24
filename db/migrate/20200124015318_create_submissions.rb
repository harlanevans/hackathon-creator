class CreateSubmissions < ActiveRecord::Migration[6.0]
  def change
    create_table :submissions do |t|
      t.string :link
      t.string :group_name
      t.belongs_to :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
