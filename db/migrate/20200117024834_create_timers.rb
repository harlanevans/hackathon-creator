class CreateTimers < ActiveRecord::Migration[6.0]
  def change
    create_table :timers do |t|
      t.string :name
      t.time :start_time
      t.time :end_time
      t.boolean :complete
      t.belongs_to :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
