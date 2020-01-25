class RemoveColumn < ActiveRecord::Migration[6.0]
  def change
    remove_column :timers, :event_id
  end
end
