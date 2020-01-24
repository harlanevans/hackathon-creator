class Event < ApplicationRecord
  belongs_to :course
  has_many :timers, dependent: :destroy
  has_many :groups, dependent: :destroy
  has_many :submissions, dependent: :destroy
end
