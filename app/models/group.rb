class Group < ApplicationRecord
  belongs_to :event
  has_many :students, through: :student_groups
end
