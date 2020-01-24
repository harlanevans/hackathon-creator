class Group < ApplicationRecord
  belongs_to :event
  has_many :student_groups, dependent: :destroy
  has_many :students, through: :student_groups
end
