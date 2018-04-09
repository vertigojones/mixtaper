class CreateMixtapes < ActiveRecord::Migration[5.1]
  def change
    create_table :mixtapes do |t|
      t.string :title
      t.string :created_by
      t.string :created_for
      t.string :dedication

      t.timestamps
    end
  end
end
