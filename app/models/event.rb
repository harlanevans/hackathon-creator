class Event < ApplicationRecord
  belongs_to :course
  has_many :timers
end
