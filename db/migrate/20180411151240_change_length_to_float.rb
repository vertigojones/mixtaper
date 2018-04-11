class ChangeLengthToFloat < ActiveRecord::Migration[5.1]
  def change
    change_column :songs, :length, :float
  end
end
