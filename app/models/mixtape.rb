class Mixtape < ApplicationRecord
    has_many :songs, dependent: :destroy
end
