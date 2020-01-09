class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.boolean :complete
      t.string :staff

      t.timestamps
    end
  end
end
