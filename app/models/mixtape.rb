class Mixtape < ApplicationRecord
    has_many :songs, dependent: :destroy
    has_many :comments, dependent: :destroy
end
