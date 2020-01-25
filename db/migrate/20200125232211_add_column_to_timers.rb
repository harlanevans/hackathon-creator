class AddColumnToTimers < ActiveRecord::Migration[6.0]
  def change
    add_column :timers, :types, :string
  end
end
