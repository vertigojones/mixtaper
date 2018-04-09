class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :artist
      t.string :title
      t.integer :length
      t.references :mixtape, foreign_key: true

      t.timestamps
    end
  end
end
