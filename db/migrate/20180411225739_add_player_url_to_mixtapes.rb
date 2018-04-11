class AddPlayerUrlToMixtapes < ActiveRecord::Migration[5.1]
  def change
    add_column :mixtapes, :player_url, :string
  end
end
