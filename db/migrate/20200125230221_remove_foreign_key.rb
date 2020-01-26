class RemoveForeignKey < ActiveRecord::Migration[6.0]
  def change  
    remove_foreign_key :timers, :events
  end
end