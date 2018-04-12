class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :post
      t.string :posted_by
      t.references :mixtape, foreign_key: true

      t.timestamps
    end
  end
end
