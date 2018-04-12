class AddTrackToSongs < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :track, :integer
  end
end
