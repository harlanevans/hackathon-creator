class AddActiveColumnToTimers < ActiveRecord::Migration[6.0]
  def change
    add_column :timers, :active, :boolean
  end
end
