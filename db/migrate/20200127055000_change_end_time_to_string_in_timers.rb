class ChangeEndTimeToStringInTimers < ActiveRecord::Migration[6.0]
  def change
    change_column :timers, :end_time, :string
  end
end
